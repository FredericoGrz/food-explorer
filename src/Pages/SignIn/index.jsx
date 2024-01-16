import icon from "../../assets/icon.svg";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useAlertBox } from "../../hooks/AlertBox";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showAlertBox } = useAlertBox();

  const { signIn } = useAuth();

  function handleSignIn() {
    if (!email || !password)
      return showAlertBox({
        message: "Preencha todos os campos necessários",
        type: "warning",
      });

    signIn({ email, password });
  }

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="No mínimo 6 caracteres"
            id="password"
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            title="Entrar"
            onClick={handleSignIn}
          />
          <Link
            className="text-white text-center text-sm"
            to="/signup"
          >
            Criar uma conta
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
