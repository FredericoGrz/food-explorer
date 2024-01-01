import logo from "../../assets/uncolored-logo.svg";
export function Footer() {
  return (
    <footer className="w-full bg-dark-600 p-6 flex items-center justify-between lg:px-32">
      <div className="flex gap-1 lg:gap-3 items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[22px] h-[18px] lg:w-[30px] lg:h-[30px]"
        />
        <p className="text-light-700 font-bold text-base lg:text-2xl">
          Food Explorer
        </p>
      </div>
      <p className="text-light-200 text-xs lg:text-sm">
        © 2023 - Todos os direitos reservados.
      </p>
    </footer>
  );
}
