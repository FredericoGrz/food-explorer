import { FaRegHeart } from "react-icons/fa";
import { Header } from "../Components/Header";
import { Counter } from "../Components/Counter";
import fruits from "../assets/fruits.svg";
import salada from "../assets/salada-ravanello.svg";
import spaguetti from "../assets/spaguetti-gambe.svg";

function Home() {
  return (
    <div className="min-w-full min-h-screen bg-dark-400">
      <Header />
      <div className="py-11 pl-8 pr-4 lg:py-24 lg:px-32 flex flex-col gap-16">
        <div
          id="banner"
          className=" cursor-pointer"
        >
          <div className="relative bg-gradient-to-t gradient-200 rounded-sm w-full h-32 lg:h-64">
            <img
              src={fruits}
              alt="Frutas caindo"
              className="absolute bottom-0 -left-7 lg:h-80 lg:-left-12"
            />
            <div className="flex h-full w-1/2 flex-col gap-2 lg:gap-3 justify-center ml-auto mr-6">
              <h2 className="text-white font-bold text-lg lg:text-5xl">
                Sabores inigualáveis
              </h2>
              <p className="text-white text-sm lg:text-lg">
                Sinta o cuidado do preparo com ingredientes selecionados.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-14">
          <div className="flex flex-col w-full gap-6">
            <h2 className="text-white text-lg font-semibold lg:text-2xl">
              Refeições
            </h2>
            <div className="flex gap-4 lg:gap-7">
              <div className="w-52 lg:w-72 h-72 lg:h-96 p-6 bg-dark-200 border border-dark-300 rounded-lg relative flex flex-col gap-3 justify-center items-center">
                <FaRegHeart className="text-white text-3xl absolute top-4 right-4 cursor-pointer" />
                <img
                  src={salada}
                  alt="Imagem de uma salada Ravanello"
                  className="w-24 lg:w-44 h-24 lg:h-44"
                />
                <p className="text-white font-semibold lg:text-2xl">
                  Salada Ravanello
                </p>
                <div>
                  <p className="hidden lg:block h-9 text-xs text-light-400 text-center line-clamp-2">
                    Rabanetes, folhas verdes e molho agridoce salpicados com
                    gergelim
                  </p>
                </div>
                <p className="text-cake-200 text-lg lg:text-xl">R$ 49,97</p>
                <div className="w-full flex flex-col lg:flex-row lg:mt-2 gap-4 justify-center items-center">
                  <Counter />
                  <button className="text-white font-semibold w-full px-6 py-2 bg-tomato-100 rounded hover:bg-tomato-200">
                    Incluir
                  </button>
                </div>
              </div>
              <div className="w-52 lg:w-72 h-72 lg:h-96 p-6 bg-dark-200 border border-dark-300 rounded-lg relative flex flex-col gap-3 justify-center items-center">
                <FaRegHeart className="text-white text-3xl absolute top-4 right-4 cursor-pointer" />
                <img
                  src={spaguetti}
                  alt="Imagem de um Spaguetti Gambe"
                  className="w-24 lg:w-44 h-24 lg:h-44"
                />
                <p className="text-white font-semibold lg:text-2xl">
                  Spaguetti Gambe
                </p>
                <div>
                  <p className="hidden lg:block text-xs text-light-400 text-center h-9 line-clamp-2">
                    Massa fresca com camarões e pesto
                  </p>
                </div>
                <p className="text-cake-200 text-lg lg:text-xl">R$ 79,97</p>
                <div className="w-full flex flex-col lg:flex-row lg:mt-2 gap-4 justify-center items-center">
                  <Counter />
                  <button className="text-white font-semibold w-full px-6 py-2 bg-tomato-100 rounded hover:bg-tomato-200">
                    Incluir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
