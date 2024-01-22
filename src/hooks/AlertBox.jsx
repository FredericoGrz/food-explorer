import { createContext, useContext, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImWarning } from "react-icons/im";
import Proptypes from "prop-types";

const AlertBoxContext = createContext({});

function AlertBoxProvider({ children }) {
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const iconMap = {
    success: (
      <BsFillCheckCircleFill className="text-light-300 text-xl lg:text-2xl" />
    ),
    warning: <ImWarning className="text-light-300 text-xl lg:text-2xl" />,
  };

  function renderIcon() {
    if (alertType in iconMap) return iconMap[alertType];

    return null;
  }

  function showAlertBox({ message = "", type = "success" }) {
    setMessage(message);
    setAlertType(type);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }

  return (
    <AlertBoxContext.Provider value={{ showAlertBox }}>
      {children}
      {isVisible && (
        <div
          className={`flex items-center p-2 rounded-xl gap-2 w-fit ${
            alertType === "warning" ? "bg-tomato-400" : "bg-cake-100"
          } border-2 border-light-300 absolute z-40 top-8 right-0 left-0 mx-auto animate-fadeInOut`}
        >
          {renderIcon()}
          {message && (
            <span className="text-light-300 font-bold lg:text-xl">
              {message}
            </span>
          )}
        </div>
      )}
    </AlertBoxContext.Provider>
  );
}

AlertBoxProvider.propTypes = {
  children: Proptypes.node,
};

function useAlertBox() {
  const context = useContext(AlertBoxContext);

  return context;
}

export { AlertBoxProvider, useAlertBox };
