import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import { IoClose, IoSearch } from "react-icons/io5";
import { Input } from "../../Components/Input";
import { useAuth } from "../../hooks/auth";

function Menu() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const isAdmin = Boolean(user.isAdmin);
  return (
    <div className="min-w-full min-h-screen bg-dark-1000 flex flex-col  ">
      <header className="h-24 bg-dark-700 w-full pl-6">
        <div className="flex gap-3 text-white items-center mt-10">
          <button
            onClick={() => navigate(-1)}
            className="text-3xl hover:scale-125 transition-transform"
          >
            <IoClose />
          </button>
          <h1 className="text-2xl">Menu</h1>
        </div>
      </header>
      <div className="flex-1 px-7 pt-9 flex flex-col gap-9">
        <Input
          icon={IoSearch}
          placeholder="Busque por pratos ou ingredientes"
        />
        <div className="flex flex-col gap-3">
          {isAdmin && (
            <Link
              to="/prato"
              className="text-light-300 text-2xl"
            >
              Novo Prato
            </Link>
          )}
          <button
            onClick={signOut}
            className="text-light-300 w-fit text-2xl"
          >
            Sair
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;