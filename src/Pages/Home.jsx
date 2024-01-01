import { Header } from "../Components/Header";
import fruits from "../assets/fruits.svg";
import salada from "../assets/salada-ravanello.svg";
import spaguetti from "../assets/spaguetti-gambe.svg";
import torradas from "../assets/torradas-parma.svg";
import macarons from "../assets/macarons.svg";
import peachy from "../assets/peachy-pastrie.svg";
import maracuja from "../assets/maracuja.svg";
import autunno from "../assets/autunno.svg";
import { FoodCard } from "../Components/FoodCard";
import { CardCarousel } from "../Components/Carousel";
import { Footer } from "../Components/Footer";

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
        <div className="flex flex-col w-full gap-6 lg:gap-14">
          <div
            id="refeicao"
            className="flex flex-col w-full gap-6"
          >
            <h2 className="text-white text-lg font-semibold lg:text-2xl">
              Refeições
            </h2>
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
          <div
            id="sobremesas"
            className="flex flex-col w-full gap-6"
          >
            <h2 className="text-white text-lg font-semibold lg:text-2xl">
              Sobremesas
            </h2>
            <CardCarousel>
              <FoodCard
                img={peachy}
                nome="Peachy Pastrie"
                descricao="Delicioso folheado de pêssego com folhas de hortelã"
                preco="32,97"
              />
              <FoodCard
                img={macarons}
                nome="Macarons"
                descricao="Farinha de amêndoas, manteiga, claras e açúcar"
                preco="79,97"
              />
              <FoodCard
                img={peachy}
                nome="Peachy Pastrie"
                descricao="Delicioso folheado de pêssego com folhas de hortelã"
                preco="32,97"
              />
              <FoodCard
                img={macarons}
                nome="Macarons"
                descricao="Farinha de amêndoas, manteiga, claras e açúcar"
                preco="79,97"
              />
              <FoodCard
                img={peachy}
                nome="Peachy Pastrie"
                descricao="Delicioso folheado de pêssego com folhas de hortelã"
                preco="32,97"
              />
              <FoodCard
                img={macarons}
                nome="Macarons"
                descricao="Farinha de amêndoas, manteiga, claras e açúcar"
                preco="79,97"
              />
            </CardCarousel>
          </div>
          <div
            id="bebidas"
            className="flex flex-col w-full gap-6"
          >
            <h2 className="text-white text-lg font-semibold lg:text-2xl">
              Bebidas
            </h2>
            <CardCarousel>
              <FoodCard
                img={maracuja}
                nome="Suco de maracujá"
                descricao="Suco de maracujá gelado, cremoso, docinho"
                preco="13,97"
              />
              <FoodCard
                img={autunno}
                nome="Tè d'autunno"
                descricao="Chá de anis, canela e limão. Sinta o outono italiano"
                preco="19,97"
              />
              <FoodCard
                img={maracuja}
                nome="Suco de maracujá"
                descricao="Suco de maracujá gelado, cremoso, docinho"
                preco="13,97"
              />
              <FoodCard
                img={autunno}
                nome="Tè d'autunno"
                descricao="Chá de anis, canela e limão. Sinta o outono italiano"
                preco="19,97"
              />
              <FoodCard
                img={maracuja}
                nome="Suco de maracujá"
                descricao="Suco de maracujá gelado, cremoso, docinho"
                preco="13,97"
              />
              <FoodCard
                img={autunno}
                nome="Tè d'autunno"
                descricao="Chá de anis, canela e limão. Sinta o outono italiano"
                preco="19,97"
              />
              <FoodCard
                img={maracuja}
                nome="Suco de maracujá"
                descricao="Suco de maracujá gelado, cremoso, docinho"
                preco="13,97"
              />
              <FoodCard
                img={autunno}
                nome="Tè d'autunno"
                descricao="Chá de anis, canela e limão. Sinta o outono italiano"
                preco="19,97"
              />
            </CardCarousel>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
