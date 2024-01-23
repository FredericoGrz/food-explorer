import { FaRegHeart } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { Counter } from "../Counter";
import { Image } from "../Image";
import { useAuth } from "../../hooks/auth";
import Proptypes from "prop-types";
import { useNavigate } from "react-router-dom";

export function FoodCard({ id, img, nome, descricao, preco }) {
  const { user } = useAuth();
  const isAdmin = user.isAdmin;
  const navigate = useNavigate();

  function handleCardClick() {
    navigate(`/pratodetalhes/${id}`);
  }

  function handleEditClick(e) {
    e.stopPropagation();
    navigate(`/prato/${id}`);
  }

  return (
    <button
      onClick={handleCardClick}
      className="w-[208px] min-w-[208px] lg:w-[288px] lg:min-w-[288px] h-72 lg:h-[440px] p-6 bg-dark-200 border border-white rounded-lg relative flex flex-col flex-nowrap gap-3 justify-center items-center"
    >
      {isAdmin ? (
        <button onClick={handleEditClick}>
          <MdModeEdit className="text-white text-2xl lg:text-3xl absolute top-4 right-4 cursor-pointer z-30 hover:scale-150 transition-transform" />
        </button>
      ) : (
        <FaRegHeart className="text-white text-3xl absolute top-4 right-4 cursor-pointer z-30 hover:scale-150 transition-transform" />
      )}

      <div className="w-24 lg:w-44 h-24 lg:h-44">
        <Image imgUrl={img} />
      </div>
      <p className="text-white font-semibold lg:text-xl xl:text-2xl">{nome}</p>

      <p className="hidden lg:line-clamp-1 lg:h-5 xl:line-clamp-2 xl:h-9 text-xs text-light-400 text-center">
        {descricao}
      </p>

      <p className="text-cake-200 text-lg lg:text-xl ">{`R$ ${preco}`}</p>
      {!isAdmin && (
        <div className="w-full flex flex-col lg:flex-row lg:mt-2 gap-4 justify-center items-center z-40">
          <Counter />
          <button className="text-white font-semibold w-full px-6 py-2 bg-tomato-100 rounded hover:bg-tomato-200">
            Incluir
          </button>
        </div>
      )}
    </button>
  );
}

FoodCard.propTypes = {
  id: Proptypes.string,
  img: Proptypes.string.isRequired,
  nome: Proptypes.string.isRequired,
  descricao: Proptypes.string.isRequired,
  preco: Proptypes.string.isRequired,
};
