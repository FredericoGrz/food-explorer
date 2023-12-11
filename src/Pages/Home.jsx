import { Header } from "../Components/Header";
import fruits from "../assets/fruits.svg";

function Home() {
  return (
    <div className="w-screen h-screen bg-dark-400">
      <Header />
      <div className="">
        <div
          id="banner"
          className="py-11 pl-8 pr-4 lg:py-24 lg:px-32 cursor-pointer"
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
      </div>
    </div>
  );
}

export default Home;
