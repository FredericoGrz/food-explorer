import Proptypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

export function CardCarousel({ children }) {
  const containerRef = useRef(null);

  const [overflowDetected, setOverflowDetected] = useState(false);

  function handleScroll(direction) {
    const container = containerRef.current;
    if (direction === "left") container.scrollLeft -= 250;
    else if (direction === "right") container.scrollLeft += 250;
  }

  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;
      if (container.scrollWidth > container.clientWidth)
        setOverflowDetected(true);
      else setOverflowDetected(false);
    };
    // Adiciona o evento de redimensionamento ao carregar o componente
    window.addEventListener("resize", handleResize);

    // Remove o evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      {overflowDetected && (
        <div className=" lg:block w-1/12 absolute left-0 z-10 h-full bg-gradient-to-r from-dark-300 via-dark-300/50 to-dark-300/5">
          <button
            className="absolute left-5 top-1/2 z-20"
            onClick={() => handleScroll("left")}
          >
            <GrPrevious className="text-white text-3xl hover:text-4xl" />
          </button>
        </div>
      )}
      {overflowDetected && (
        <div className=" lg:block w-1/12 absolute right-0 z-10 h-full bg-gradient-to-l from-dark-300 via-dark-300/50 to-dark-300/5">
          <button
            className="absolute right-5 top-1/2 z-20"
            onClick={() => handleScroll("right")}
          >
            <GrNext className="text-white text-3xl hover:text-4xl" />
          </button>
        </div>
      )}
      <div
        ref={containerRef}
        className="min-w-full flex gap-4 lg:gap-7 overflow-hidden scroll-smooth"
      >
        {children}
      </div>
    </div>
  );
}

CardCarousel.propTypes = {
  children: Proptypes.node,
};
