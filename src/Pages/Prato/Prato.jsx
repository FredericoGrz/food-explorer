import { GrPrevious } from "react-icons/gr";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { InputFile } from "../../Components/InputFile";
import { Input } from "../../Components/Input";
import { InputSelect } from "../../Components/Select";
import { InputTag } from "../../Components/InputTag";

function Prato() {
  return (
    <div className="h-screen w-full bg-dark-400">
      <Header />
      <div
        id="container"
        className="px-8 pt-2 pb-14 flex flex-col gap-8"
      >
        <div className="flex flex-col gap-6 text-light-300">
          <button className="flex gap-1 items-center">
            <GrPrevious />
            Voltar
          </button>
          <h1 className="font-medium text-3xl">Novo Prato</h1>
        </div>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <InputFile
              id="imagem"
              label="Imagem do prato"
            />
            <div className="lg:w-2/4">
              <Input
                id="nome"
                label="Nome"
                placeholder="Ex: Salada Ceasar"
              />
            </div>
            <InputSelect
              label="Categoria"
              id="categoria"
            />
          </div>
          <div>
            <InputTag
              label="Ingredientes"
              id="ingrediente"
            />
          </div>
          <div></div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Prato;
