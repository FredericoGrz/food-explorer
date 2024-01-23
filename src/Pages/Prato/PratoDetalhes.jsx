import { Counter } from "../../Components/Counter";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { ButtonBack } from "../../Components/ButtonBack";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAlertBox } from "../../hooks/AlertBox";
import { api } from "../../services/api";
import { Image } from "../../Components/Image";

function PratoDetalhes() {
  const { id } = useParams();
  const { showAlertBox } = useAlertBox();
  const [prato, setPrato] = useState({});

  useEffect(() => {
    async function fetchPrato() {
      try {
        let response = await api.get(`pratos/${id}`);

        response.data.preco = Number(response.data.preco)
          .toFixed(2)
          .toString()
          .replace(".", ",");
        setPrato(response.data);
      } catch (error) {
        console.log(error);
        showAlertBox({
          message: "Nao foi possível carregar as informações do prato",
          type: "warning",
        });
      }
    }

    fetchPrato();
  }, []);
  return (
    <div className="min-w-full min-h-screen bg-dark-400">
      <Header />
      <div
        className="px-14 py-9 lg:px-[121px] lg:py-6 flex flex-col gap-4 lg:flex-row lg:gap-12 lg:items-center"
        id="container"
      >
        <div className="flex flex-col gap-4 lg:gap-10">
          <ButtonBack />
          <div className="self-center">
            <div className="w-[264px] h-[264px] lg:min-w-[384px] lg:min-h-[384px]">
              {prato.imagem && (
                <Image
                  imgUrl={prato.imagem}
                  alt={`Imagem de ${prato.name}`}
                />
              )}
            </div>
          </div>
        </div>
        <div>
          <div
            id="information"
            className="flex flex-col gap-6 items-center lg:items-start"
          >
            <h1 className="text-light-300 font-medium text-2xl lg:text-[40px]">
              {prato.name}
            </h1>
            <p className="text-light-300 line-clamp-6 text-center lg:text-start lg:text-2xl">
              {prato.description}
            </p>
            <div
              id="tags"
              className="flex gap-6 flex-wrap lg:gap-3 justify-center"
            >
              {prato.ingredientes &&
                prato.ingredientes.map((ingrediente, index) => (
                  <p
                    key={String(index)}
                    className="bg-dark-1000 rounded text-white text-sm lg:text-base px-2 py-1"
                  >
                    {ingrediente}
                  </p>
                ))}
            </div>
          </div>
          <div
            id="actions"
            className="flex gap-4 mt-12 justify-center lg:justify-start"
          >
            <Counter />
            <div className="max-w-[200px]">
              {/* Finalizar o botão */}
              <Button title={`Incluir - R$ ${prato.preco}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PratoDetalhes;
