import { FaRegHeart } from "react-icons/fa";
import { Counter } from "../Counter";
import Proptypes from "prop-types";

export function FoodCard({ img, nome, descricao, preco }) {
  return (
    <div className="w-52 lg:w-72 h-72 lg:h-[440px] p-6 bg-dark-200 border border-dark-300 rounded-lg relative flex flex-col gap-3 justify-center items-center ">
      <FaRegHeart className="text-white text-3xl absolute top-4 right-4 cursor-pointer" />
      <img
        src={img}
        alt={`imagem de um(a) ${nome}`}
        className="w-24 lg:w-44 h-24 lg:h-44 "
      />
      <p className="text-white font-semibold lg:text-xl xl:text-2xl">{nome}</p>

      <p className="hidden lg:line-clamp-1 lg:h-5 xl:line-clamp-2 xl:h-9 text-xs text-light-400 text-center">
        {descricao}
      </p>

      <p className="text-cake-200 text-lg lg:text-xl ">{`R$ ${preco}`}</p>
      <div className="w-full flex flex-col lg:flex-row lg:mt-2 gap-4 justify-center items-center ">
        <Counter />
        <button className="text-white font-semibold w-full px-6 py-2 bg-tomato-100 rounded hover:bg-tomato-200">
          Incluir
        </button>
      </div>
    </div>
  );
}

FoodCard.propTypes = {
  img: Proptypes.string.isRequired,
  nome: Proptypes.string.isRequired,
  descricao: Proptypes.string.isRequired,
  preco: Proptypes.string.isRequired,
};
