import { useEffect, useState } from "react";
import { ButtonBack } from "../../Components/ButtonBack";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Image } from "../../Components/Image";
import { FaRegStar } from "react-icons/fa";
import { useAlertBox } from "../../hooks/AlertBox";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

function Favoritos() {
  const { showAlertBox } = useAlertBox();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  async function handleRemoveFavorite(prato_id) {
    try {
      const response = await api.post("favorites", {
        prato_id,
        favorite: false,
      });

      if (response.status === 200) {
        setFavorites((prev) =>
          prev.filter((favorite) => favorite.prato_id !== prato_id)
        );
        showAlertBox({ message: "Prato removido dos favoritos" });
      }
    } catch (error) {
      showAlertBox({
        message: "Erro remover favorito",
        type: "warning",
      });
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const response = await api.get("favorites");
        if (response.data) setFavorites(response.data);
      } catch (error) {
        showAlertBox({
          message: "Erro ao carregar os favoritos",
          type: "warning",
        });
        console.log(error);
      }
    }

    fetchFavorites();
  }, []);
  return (
    <div className="relative min-h-screen w-full bg-dark-400 pb-10">
      <Header />
      <div
        id="container"
        className="px-8 lg:px-28 pt-2 lg:pt-10 pb-14 flex flex-col gap-8"
      >
        <div className="flex flex-col gap-6 text-light-300">
          <ButtonBack />
          <h2 className="font-medium text-3xl">Meus Favoritos</h2>
        </div>
        {favorites.length > 0 && (
          <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:gap-9">
            {favorites.map((favorite) => (
              <div
                key={favorite.prato.id}
                className="py-4 flex gap-5 items-center w-fit lg:min-w-[275px]"
              >
                <div className="w-20 h-20">
                  <Image imgUrl={favorite.prato.imagem} />
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <button
                    onClick={() =>
                      navigate(`/pratodetalhes/${favorite.prato_id}`)
                    }
                    className="text-light-100 text-xl hover:scale-110 transition-transform"
                  >
                    {favorite.prato.name}
                  </button>
                  <button
                    onClick={() => handleRemoveFavorite(favorite.prato_id)}
                    className="text-tomato-400 text-xs transition-all hover:font-bold"
                  >
                    Remover dos favoritos
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {favorites.length === 0 && (
          <div className="border border-light-300 border-dashed p-4 w-fit">
            <h2 className="text-light-300 text-xl flex gap-2 items-center">
              <FaRegStar className="text2x" />
              Você não possui pratos favoritos ainda!
            </h2>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Favoritos;
