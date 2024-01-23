import { Header } from "../../Components/Header";
import fruits from "../../assets/fruits.svg";
import { FoodCard } from "../../Components/FoodCard";
import { CardCarousel } from "../../Components/Carousel";
import { Footer } from "../../Components/Footer";
import { useEffect, useState } from "react";
import { useAlertBox } from "../../hooks/AlertBox";
import { api } from "../../services/api";

function Home() {
  const { showAlertBox } = useAlertBox();
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      try {
        let response = await api.get("categories?includePratos=true");
        setCategories(response.data);
        setFilteredCategories(response.data);
      } catch (error) {
        showAlertBox({
          message: "Nao foi possível carregar a pagina",
          type: "warning",
        });
        console.log(error);
      }
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    if (search !== "") {
      const categoriesFiltered = categories.map((category) => ({
        ...category,
        pratos: category.pratos.filter((prato) =>
          prato.name.toLowerCase().includes(search.toLowerCase())
        ),
      }));
      setFilteredCategories(categoriesFiltered);
    } else {
      setFilteredCategories(categories);
    }
  }, [search, categories]);

  return (
    <div className="min-w-full min-h-screen bg-dark-400 relative">
      <Header onSearchChange={(value) => setSearch(value)} />
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
          {filteredCategories &&
            filteredCategories.map((category, index) => (
              <div
                key={String(index)}
                className="flex flex-col w-full gap-6"
              >
                <h2 className="text-white text-2xl font-semibold lg:text-3xl">
                  {category.name}
                </h2>
                <CardCarousel>
                  {category.pratos &&
                    category.pratos.map((prato) => (
                      <FoodCard
                        key={String(prato.id)}
                        id={String(prato.id)}
                        img={prato.imagem}
                        nome={prato.name}
                        preco={prato.preco.toString()}
                        descricao={prato.description}
                      />
                    ))}
                </CardCarousel>
              </div>
            ))}
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
