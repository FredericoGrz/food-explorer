import { GrPrevious } from "react-icons/gr";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { InputFile } from "../../Components/InputFile";
import { Input } from "../../Components/Input";
import { InputSelect } from "../../Components/Select";
import { InputTag } from "../../Components/InputTag";
import { InputPrice } from "../../Components/InputPrice";
import { TextArea } from "../../Components/TextArea";
import { Button } from "../../Components/Button";

function Prato() {
  return (
    <div className="min-h-screen w-full bg-dark-400">
      <Header />
      <div
        id="container"
        className="px-8 lg:px-28 pt-2 lg:pt-10 pb-14 flex flex-col gap-8"
      >
        <div className="flex flex-col gap-6 text-light-300">
          <button className="flex gap-1 items-center">
            <GrPrevious className="lg:text-2xl" />
            <p className="lg:font-bold lg:text-2xl">Voltar</p>
          </button>
          <h1 className="font-medium text-3xl">Novo Prato</h1>
        </div>
        <form className="flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
            <div className="lg:w-1/4">
              <InputFile
                id="imagem"
                label="Imagem do prato"
              />
            </div>
            <div className="lg:w-2/4">
              <Input
                id="nome"
                label="Nome"
                placeholder="Ex: Salada Ceasar"
              />
            </div>
            <div className="lg:w-1/4">
              <InputSelect
                label="Categoria"
                id="categoria"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 lg:items-center">
            <div className="lg:w-3/4">
              <InputTag
                label="Ingredientes"
                id="ingrediente"
              />
            </div>
            <div className="lg:w-1/4">
              <InputPrice
                id="preco"
                label="Preço"
              />
            </div>
          </div>
          <div className="w-full h-52">
            <TextArea
              label="Descrição"
              id="descricao"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </div>
          <div className="lg:w-1/5 lg:self-end">
            <Button
              title="Salvar Alterações"
              isLight
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Prato;
