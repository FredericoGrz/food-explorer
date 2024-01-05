import icon from "../../assets/icon.svg";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

function SignIn() {
  return (
    <div className="min-w-full min-h-screen bg-dark-400 pt-36 px-12 lg:px-28">
      <div
        id="content"
        className="flex flex-col lg:flex-row lg:justify-between xl:justify-around"
      >
        <div
          id="logo"
          className="flex gap-2 items-center"
        >
          <img
            src={icon}
            alt="Logo do app"
            className="w-11 h-11"
          />
          <h1 className="text-white text-4xl font-bold">Food Explorer</h1>
        </div>
        <form className="pt-16 flex flex-col gap-8 lg:p-16 lg:w-[475px] lg:bg-dark-700 lg:rounded-2xl">
          <h2 className="hidden lg:block text-white text-3xl text-center font-medium">
            Faça Login
          </h2>
          <Input
            placeholder="exemplo@exemplo.com.br"
            id="email"
            label="Email"
            type="email"
          />
          <Input
            placeholder="No mínimo 6 caracteres"
            id="password"
            label="Senha"
            type="password"
          />
          <Button title="Entrar" />
          <a
            href="#"
            className="text-white text-center text-sm"
          >
            Criar uma conta
          </a>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
