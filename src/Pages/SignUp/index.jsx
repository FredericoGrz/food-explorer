import icon from "../../assets/icon.svg";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAlertBox } from "../../hooks/AlertBox";
import { api } from "../../services/api";

function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showAlertBox } = useAlertBox();
  const navigate = useNavigate();

  async function handleSignUp() {
    if (!name && !email && !password)
      return showAlertBox({
        message: "Preencha todos os campos",
        type: "warning",
      });
    try {
      const response = await api.post("/users", { name, email, password });
      if (response.status === 201)
        showAlertBox({ message: "Usuário criado com sucesso!" });
      navigate("/");
    } catch (error) {
      showAlertBox({ message: error.response.data.message, type: "warning" });
    }
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
            placeholder="Exemplo: Maria da Silva"
            id="nome"
            label="Seu Nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            title="Criar conta"
            onClick={handleSignUp}
          />
          <Link
            to="/"
            className="text-white text-center text-sm"
          >
            Já tenho uma conta
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
