import Proptypes from "prop-types";
import { MdMenu } from "react-icons/md";
import { IoSearch, IoExitOutline } from "react-icons/io5";
import { PiReceiptLight } from "react-icons/pi";
import icon from "../../assets/icon.svg";
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";

export function Header({ onSearchChange }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const { signOut, user } = useAuth();
  const isAdmin = Boolean(user.isAdmin);

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <header className="w-full h-[114px] px-12 py-6 bg-dark-600">
      <div className="flex justify-between items-center h-full ">
        <Link
          to="/menu"
          className="lg:hidden"
        >
          <MdMenu className="text-white text-xl lg:text-3xl" />
        </Link>
        <div
          className={`flex gap-2 justify-center items-center ${
            isAdmin && "mx-auto lg:mx-0"
          }`}
        >
          <img
            src={icon}
            alt="Teste"
          />
          <div className="flex gap-2 items-center lg:relative">
            <h2 className="text-white font-bold">Food Explorer</h2>
            {isAdmin && (
              <p className="text-cake-200 text-xs lg:absolute lg:-bottom-3 lg:right-0">
                Admin
              </p>
            )}
          </div>
        </div>
        <div className="hidden lg:block w-2/5">
          {isHome && (
            <Input
              icon={IoSearch}
              placeholder="Busque por pratos ou ingredientes"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          )}
        </div>
        <div className="flex gap-10 w-fit lg:w-1/4 items-center">
          {!isAdmin && (
            <button className="lg:hidden relative h-fit">
              <PiReceiptLight className="text-white text-xl" />
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-tomato-200 absolute -top-1 -right-1 flex justify-center items-center">
                <p className="text-white text-xs lg:text-sm font-semibold">0</p>
              </div>
            </button>
          )}
          {!isAdmin && (
            <Link
              to="/favoritos"
              className="hidden lg:block text-light-300"
            >
              Meus Favoritos
            </Link>
          )}
          {!isAdmin && (
            <button className="hidden lg:flex h-fit items-center gap-2 bg-tomato-200 py-3 px-8 rounded-md">
              <PiReceiptLight className="text-white text-2xl" />
              <p className="text-white text-sm">Pedidos (0)</p>
            </button>
          )}
          {isAdmin && isHome && (
            <Link
              to="/categoria"
              className="hidden lg:flex h-fit items-center gap-2 bg-tomato-200 py-3 px-8 rounded-md xl:-ml-24 text-white text-md"
            >
              Nova Categoria
            </Link>
          )}
          {isAdmin && isHome && (
            <Link
              to="/prato"
              className="hidden lg:flex h-fit items-center gap-2 bg-tomato-200 py-3 px-8 rounded-md xl:-ml-24 text-white text-md"
            >
              Novo Prato
            </Link>
          )}
        </div>
        <button
          className="hidden lg:flex"
          onClick={handleSignOut}
        >
          <IoExitOutline className="text-white text-2xl" />
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  onSearchChange: Proptypes.func,
};
