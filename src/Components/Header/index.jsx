import { MdMenu } from "react-icons/md";
import { IoSearch, IoExitOutline } from "react-icons/io5";
import { PiReceiptLight } from "react-icons/pi";
import icon from "../../assets/icon.svg";
import { Input } from "../Input";

export function Header() {
  return (
    <header className="w-full h-[114px] px-12 py-6 bg-dark-600">
      <div className="flex justify-between items-center h-full">
        <button className="lg:hidden">
          <MdMenu className="text-white text-xl lg:text-3xl" />
        </button>
        <div className="flex gap-2 justify-center items-center">
          <img
            src={icon}
            alt="Teste"
          />
          <div className="flex gap-2 items-center lg:relative">
            <h2 className="text-white font-bold">Food Explorer</h2>
            <p className="text-cake-200 text-xs lg:absolute lg:-bottom-3 lg:right-0">
              Admin
            </p>
          </div>
        </div>
        <div className="hidden lg:block w-1/2">
          <Input
            icon={IoSearch}
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>
        <button className="lg:hidden relative h-fit">
          <PiReceiptLight className="text-white text-xl" />
          <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-tomato-200 absolute -top-1 -right-1 flex justify-center items-center">
            <p className="text-white text-xs lg:text-sm font-semibold">0</p>
          </div>
        </button>
        <button className="hidden lg:flex h-fit items-center gap-2 bg-tomato-200 py-3 px-8 rounded-md xl:-ml-24">
          <PiReceiptLight className="text-white text-2xl" />
          <p className="text-white text-sm">Pedidos (0)</p>
        </button>
        <button className="hidden lg:flex">
          <IoExitOutline className="text-white text-2xl" />
        </button>
      </div>
    </header>
  );
}
