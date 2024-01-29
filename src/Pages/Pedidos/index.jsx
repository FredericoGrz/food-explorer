import { useAlertBox } from "../../hooks/AlertBox";
import { Header } from "../../Components/Header";
import { ButtonBack } from "../../Components/ButtonBack";
import { Image } from "../../Components/Image";
import { Button } from "../../Components/Button";
import { Footer } from "../../Components/Footer";
import { FaRegCreditCard } from "react-icons/fa6";
import pix from "../../assets/pix.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { usePedido } from "../../hooks/Pedido";
import qrcode from "qrcode-generator";
import { useNavigate } from "react-router-dom";

function Pedidos() {
  const navigate = useNavigate();
  const { showAlertBox } = useAlertBox();
  const { pedido, removerPrato, finalizarPedido } = usePedido();
  const [pratos, setPratos] = useState([]);
  const [pedidoTotal, setPedidoTotal] = useState(0);
  const [page, setPage] = useState("desktop");
  const [isCredito, setIsCredito] = useState(false);
  const [qrCode, setQrCode] = useState({});
  const [numCard, setNumCard] = useState("");
  const [validade, setValidade] = useState("");
  const [cvc, setCvc] = useState("");

  async function handleRemoverPrato(prato_id) {
    await removerPrato(prato_id);
    fetchPedido();
  }

  async function handleFinalizarPagamento() {
    try {
      if (!numCard || !validade || !cvc) {
        return showAlertBox({
          message: "Preencha os campos corretamente",
          type: "warning",
        });
      } else {
        const response = await api.get(`pagamentos/finalizar/${pedido.id}`);

        if (response.status === 200) {
          finalizarPedido();
          showAlertBox({
            message: "Pagamento realizado com sucesso",
          });
          navigate("/");
        }
      }
    } catch (error) {
      showAlertBox({
        message: "Erro ao efetuar o pagamento",
        type: "warning",
      });
    }
  }

  async function fetchPedido() {
    try {
      const response = await api.get(`pedidos/${pedido.id}`);

      if (response.data.pratos.length === 0) {
        navigate("/");
        showAlertBox({
          message: "Nenhum prato adicionado ao pedido",
          type: "warning",
        });
      }

      setPratos(response.data.pratos);
    } catch (error) {
      showAlertBox({
        message: "Erro ao carregar o pedido",
        type: "warning",
      });
      console.log(error);
    }
  }

  async function fetchPagamento() {
    try {
      const response = await api.post("pagamentos", {
        pedido_id: pedido.id,
      });
      console.log(response.data.qr_code);

      setPedidoTotal(response.data.total);

      // Gera o QR Code
      const qr = new qrcode(0, "M");
      qr.addData(response.data.qr_code);
      qr.make();

      setQrCode(qr.createDataURL(4, 1));
    } catch (error) {
      showAlertBox({
        message: "Erro ao carregar as informações de pagamento",
        type: "warning",
      });
      console.log(error);
    }
  }

  useEffect(() => {
    if (!pedido.id) {
      showAlertBox({
        message: "Nenhum prato adicionado ao pedido",
        type: "warning",
      });
      return navigate("/");
    }

    const handleResize = () => {
      const larguraDaTela =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      if (larguraDaTela > 1024) setPage("desktop");
      else setPage("pedido");
    };

    if (pratos.length === 0) fetchPedido();

    handleResize();

    // Adiciona o evento de redimensionamento ao carregar o componente
    window.addEventListener("resize", handleResize);

    // Remove o evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (pratos.length > 0) fetchPagamento();
    const intervalId = setInterval(() => {
      // Lógica para verificar o endpoint
      api
        .get(`pedidos/${pedido.id}`)
        .then((response) => {
          if (response.data.status === "Concluído") {
            finalizarPedido();
            showAlertBox({
              message: "Pagamento realizado com sucesso",
            });
            navigate("/");
          }
        })
        .catch((error) => {
          // Lógica para lidar com erros
          console.error(error);
        });
    }, 3000); // Intervalo de 3 segundos

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, [pratos]);

  return (
    <div className="relative min-h-screen w-full bg-dark-400 pb-10">
      <Header />
      <div
        id="container"
        className="px-8 lg:px-28 pt-2 lg:pt-10 pb-14 flex flex-col gap-8"
      >
        <ButtonBack />
        <div className="lg:flex lg:gap-16">
          {(page === "pedido" || page === "desktop") && (
            <div
              id="pedido"
              className="flex flex-col gap-8 lg:w-2/3"
            >
              <h2 className="font-medium text-3xl text-light-300">
                Meu Pedido
              </h2>
              {pratos &&
                pratos.map((prato) => (
                  <div
                    key={String(prato.id)}
                    className="flex gap-3"
                  >
                    <div className="w-24 h-24">
                      <Image imgUrl={prato.imagem} />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-center">
                      <div className="flex gap-3 items-center">
                        <p className="text-xl text-light-300">{`${prato.quantidade}x ${prato.name}`}</p>
                        <p className="text-xs text-light-400">{`R$ ${String(
                          prato.preco.toFixed(2)
                        ).replace(".", ",")}`}</p>
                      </div>
                      <button
                        type="button"
                        className="text-tomato-400"
                        onClick={() => handleRemoverPrato(prato.id)}
                      >
                        Remover do Pedido
                      </button>
                    </div>
                  </div>
                ))}
              {pedidoTotal && (
                <p className="text-light-300 text-xl font-medium mt-3">
                  Total: R$ {String(pedidoTotal.toFixed(2)).replace(".", ",")}
                </p>
              )}
              <div className="w-3/5 place-self-end mt-3">
                {page !== "desktop" && (
                  <Button
                    title="Avançar"
                    onClick={() => setPage("pagamento")}
                  />
                )}
              </div>
            </div>
          )}
          {(page === "pagamento" || page === "desktop") && (
            <div
              id="pagamento"
              className="flex flex-col gap-8 lg:w-1/3"
            >
              <h2 className="font-medium text-3xl text-light-300">Pagamento</h2>
              <div className="w-full flex flex-col">
                <div className="h-[80px] flex">
                  <button
                    onClick={() => setIsCredito(false)}
                    type="button"
                    className="border border-light-600 h-full w-1/2 rounded-tl-xl flex justify-center items-center group"
                  >
                    <div
                      className={`text-light-100 flex gap-2 w-fit group-hover:scale-110 transition-transform ${
                        !isCredito && "font-bold"
                      }`}
                    >
                      <img src={pix} />
                      PIX
                    </div>
                  </button>
                  <button
                    onClick={() => setIsCredito(true)}
                    type="button"
                    className="border border-l-0 border-light-600 h-full w-1/2 rounded-tr-xl flex justify-center items-center group"
                  >
                    <div
                      className={`w-fit text-light-100 flex gap-2 items-center group-hover:scale-110 transition-transform ${
                        isCredito && "font-bold"
                      }`}
                    >
                      <FaRegCreditCard className="text-2xl" />
                      Credito
                    </div>
                  </button>
                </div>
                {!isCredito && (
                  <div
                    id="pix"
                    className="h-full py-8 border border-light-600 border-t-0 rounded-b-xl flex items-center justify-center"
                  >
                    <div className="w-60 h-60">
                      <Image imgFile={qrCode} />
                    </div>
                  </div>
                )}
                {isCredito && (
                  <div
                    id="card"
                    className="h-full border border-light-600 border-t-0 rounded-b-xl px-6 py-14"
                  >
                    <form className="flex flex-col gap-9">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="cartao"
                          className="text-light-400"
                        >
                          Numero do cartão
                        </label>
                        <input
                          id="cartao"
                          name="cartao"
                          type="text"
                          placeholder="0000 0000 0000 0000"
                          className="px-4 py-3 text-light-100 bg-transparent outline-none border rounded border-light-400"
                          value={numCard}
                          onChange={(e) => setNumCard(e.target.value)}
                        />
                      </div>
                      <div className="flex gap-4 w-full">
                        <div className="w-1/2 flex flex-col gap-2">
                          <label
                            htmlFor="validade"
                            className="text-light-400"
                          >
                            Validade
                          </label>
                          <input
                            id="validade"
                            name="validade"
                            type="text"
                            placeholder="04/25"
                            className="px-4 py-3 text-light-100 bg-transparent outline-none border rounded border-light-400 w-full"
                            value={validade}
                            onChange={(e) => setValidade(e.target.value)}
                          />
                        </div>
                        <div className="w-1/2 flex flex-col gap-2">
                          <label
                            htmlFor="cvc"
                            className="text-light-400"
                          >
                            CVC
                          </label>
                          <input
                            id="cvc"
                            name="cvc"
                            type="text"
                            placeholder="000"
                            className="px-4 py-3 text-light-100 bg-transparent outline-none border rounded border-light-400 w-full"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                          />
                        </div>
                      </div>

                      <Button
                        onClick={handleFinalizarPagamento}
                        title="Finalizar Pagamento"
                      />
                    </form>
                  </div>
                )}
              </div>
              <div className="w-1/2 self-end">
                {page !== "desktop" && (
                  <Button
                    onClick={() => setPage("pedido")}
                    title="Voltar"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute w-full bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default Pedidos;
