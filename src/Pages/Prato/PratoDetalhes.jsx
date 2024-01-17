import ravanello from "../../assets/salada-ravanello.svg";
import { Counter } from "../../Components/Counter";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { ButtonBack } from "../../Components/ButtonBack";

function PratoDetalhes() {
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
            <img
              src={ravanello}
              alt="Salada Ravanello"
              className="w-[264px] h-[264px] lg:min-w-[384px] lg:min-h-[384px]"
            />
          </div>
        </div>
        <div>
          <div
            id="information"
            className="flex flex-col gap-6 items-center lg:items-start"
          >
            <h1 className="text-light-300 font-medium text-2xl lg:text-[40px]">
              Salada Ravanello
            </h1>
            <p className="text-light-300 line-clamp-2 text-center lg:text-start lg:text-2xl">
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>
            <div
              id="tags"
              className="flex gap-6 flex-wrap lg:gap-3"
            >
              <p className="bg-dark-1000 rounded text-white text-sm px-2 py-1">
                Alface
              </p>
              <p className="bg-dark-1000 rounded text-white text-sm px-2 py-1">
                Cebola
              </p>
              <p className="bg-dark-1000 rounded text-white text-sm px-2 py-1">
                Pao Naan
              </p>
              <p className="bg-dark-1000 rounded text-white text-sm px-2 py-1">
                Pepino
              </p>
              <p className="bg-dark-1000 rounded text-white text-sm px-2 py-1">
                Rabanete
              </p>
              <p className="bg-dark-1000 rounded text-white text-sm px-2 py-1">
                Tomate
              </p>
            </div>
          </div>
          <div
            id="actions"
            className="flex gap-4 mt-12"
          >
            <Counter />
            <div className="max-w-[200px]">
              {/* Finalizar o botão */}
              <Button title="Incluir - R$ 25,00" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PratoDetalhes;
