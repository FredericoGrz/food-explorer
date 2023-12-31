import { Header } from "../Components/Header";
import fruits from "../assets/fruits.svg";
import salada from "../assets/salada-ravanello.svg";
import spaguetti from "../assets/spaguetti-gambe.svg";
import torradas from "../assets/torradas-parma.svg";
import { FoodCard } from "../Components/FoodCard";
import { CardCarousel } from "../Components/Carousel";

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
              <CardCarousel>
                <FoodCard
                  img={salada}
                  nome="Salada Ravanello"
                  descricao="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                  preco="49,97"
                />
                <FoodCard
                  img={spaguetti}
                  nome="Spaguetti Gambe"
                  descricao="Massa fresca com camarões e pesto"
                  preco="79,97"
                />
                <FoodCard
                  img={torradas}
                  nome="Torradas de Parma"
                  descricao="Presunto de parma e rúcula em um pão com fermentação natural"
                  preco="25,97"
                />
                <FoodCard
                  img={torradas}
                  nome="Torradas de Parma"
                  descricao="Presunto de parma e rúcula em um pão com fermentação natural"
                  preco="25,97"
                />
                <FoodCard
                  img={torradas}
                  nome="Torradas de Parma"
                  descricao="Presunto de parma e rúcula em um pão com fermentação natural"
                  preco="25,97"
                />
                <FoodCard
                  img={torradas}
                  nome="Torradas de Parma"
                  descricao="Presunto de parma e rúcula em um pão com fermentação natural"
                  preco="25,97"
                />
              </CardCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
