import Proptypes from "prop-types";
import { GrPrevious, GrNext } from "react-icons/gr";

export function CardCarousel({ children }) {
  return (
    <div className="relative overflow-hidden">
      <div className="hidden lg:block w-2/12 absolute left-0 z-10 h-full bg-gradient-to-r from-dark-300 via-dark-300/50 to-dark-300/5">
        <button className="absolute left-5 top-1/2 z-20">
          <GrPrevious className="text-white text-3xl hover:text-4xl" />
        </button>
      </div>
      <div className="hidden lg:block w-2/12 absolute right-0 z-10 h-full bg-gradient-to-l from-dark-300 via-dark-300/50 to-dark-300/5">
        <button className="absolute right-5 top-1/2 z-20">
          <GrNext className="text-white text-3xl hover:text-4xl" />
        </button>
      </div>
      <div className=" min-w-full flex gap-4 lg:gap-7">{children}</div>
    </div>
  );
}

CardCarousel.propTypes = {
  children: Proptypes.node,
};
