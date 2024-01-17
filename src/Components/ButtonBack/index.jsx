import { GrPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export function ButtonBack() {
  const navigate = useNavigate();

  function handleButtonBack() {
    navigate(-1);
  }
  return (
    <button
      onClick={handleButtonBack}
      className="w-fit flex gap-1 items-center text-light-300 hover:scale-125 transition-transform"
    >
      <GrPrevious className="lg:text-2xl" />
      <p className="lg:font-bold lg:text-2xl">Voltar</p>
    </button>
  );
}
