import Proptypes from "prop-types";
import { useEffect, useState } from "react";
import { useAlertBox } from "../../hooks/AlertBox";
import { api } from "../../services/api";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export function Favorite({ prato_id }) {
  const { showAlertBox } = useAlertBox();
  const [isFavorite, setIsFavorite] = useState(false);

  async function handleFavoriteClick() {
    try {
      const response = await api.post("favorites", {
        prato_id,
        favorite: !isFavorite,
      });
      if (response.status === 200) setIsFavorite((prev) => !prev);
    } catch (error) {
      showAlertBox({
        message: "Nao foi possível favoritar o prato",
        type: "warning",
      });
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchFavorite() {
      try {
        const response = await api.get(`favorites?prato_id=${prato_id}`);
        setIsFavorite(response.data !== "");
      } catch (error) {
        showAlertBox({
          message: "Nao foi possível carregar favoritos",
          type: "warning",
        });
        console.log(error);
      }
    }
    if (prato_id !== undefined) fetchFavorite();
  }, []);
  return (
    <button onClick={handleFavoriteClick}>
      {isFavorite && (
        <FaHeart className="text-white text-2xl lg:text-3xl absolute top-4 right-4 cursor-pointer z-30 hover:scale-150 transition-transform" />
      )}
      {!isFavorite && (
        <FaRegHeart className="text-white text-2xl lg:text-3xl absolute top-4 right-4 cursor-pointer z-30 hover:scale-150 transition-transform" />
      )}
    </button>
  );
}

Favorite.propTypes = {
  prato_id: Proptypes.number,
};
