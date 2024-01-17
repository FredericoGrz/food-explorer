import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { InputFile } from "../../Components/InputFile";
import { Input } from "../../Components/Input";
import { InputTag } from "../../Components/InputTag";
import { InputPrice } from "../../Components/InputPrice";
import { InputSelect } from "../../Components/Select";
import { TextArea } from "../../Components/TextArea";
import { Button } from "../../Components/Button";
import { ButtonBack } from "../../Components/ButtonBack";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAlertBox } from "../../hooks/AlertBox";
import { useNavigate, useParams } from "react-router-dom";

function Prato() {
  const { id } = useParams();
  const isUpdate = id !== undefined;
  const navigate = useNavigate();
  const { showAlertBox } = useAlertBox();
  const [imagem, setImagem] = useState("");
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [ingredientes, setIngredientes] = useState([]);
  const [preco, setPreco] = useState("");
  const [description, setDescription] = useState("");

  function verifyData() {
    let allRequiredDataAvailable = true;
    if (!imagem || !name || !category || !preco)
      allRequiredDataAvailable = false;

    return allRequiredDataAvailable;
  }

  async function handleSave() {
    if (!verifyData())
      return showAlertBox({
        message: "Preencha todas as informações necessárias",
        type: "warning",
      });

    try {
      const response = await api.post("/pratos", {
        imagem,
        name,
        description,
        category_id: category,
        ingredientes,
        preco,
      });

      if (response.status === 201)
        showAlertBox({
          message: "Prato incluído com sucesso",
          type: "success",
        });

      navigate("/");
    } catch (error) {
      showAlertBox({ message: error.response.data.message, type: "warning" });
    }
  }

  useEffect(() => {
    async function fetchCategoria() {
      try {
        const response = await api.get("categories");
        setCategories(response.data);
      } catch (error) {
        showAlertBox({ message: error.response.data.message, type: "warning" });
      }
    }

    fetchCategoria();
  }, []);

  return (
    <div className="min-h-screen w-full bg-dark-400">
      <Header />
      <div
        id="container"
        className="px-8 lg:px-28 pt-2 lg:pt-10 pb-14 flex flex-col gap-8"
      >
        <div className="flex flex-col gap-6 text-light-300">
          <ButtonBack />
          <h1 className="font-medium text-3xl">
            {isUpdate ? "Alterar Prato" : "Novo Prato"}
          </h1>
        </div>
        <form className="flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
            <div className="lg:w-1/4">
              <InputFile
                id="imagem"
                label="Imagem do prato"
                onChange={(file) => setImagem(file)}
              />
            </div>
            <div className="lg:w-2/4">
              <Input
                id="nome"
                label="Nome"
                placeholder="Ex: Salada Ceasar"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="lg:w-1/4">
              <InputSelect
                label="Categoria"
                id="categoria"
                options={categories}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 lg:items-center">
            <div className="lg:w-3/4">
              <InputTag
                label="Ingredientes"
                id="ingrediente"
                onChange={(tags) => setIngredientes(tags)}
              />
            </div>
            <div className="lg:w-1/4">
              <InputPrice
                id="preco"
                label="Preço"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full h-52">
            <TextArea
              label="Descrição"
              id="descricao"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div
            className={`${
              isUpdate ? "lg:w-2/5" : "lg:w-1/5"
            } lg:self-end flex gap-8`}
          >
            {isUpdate && (
              <button
                type="button"
                className="w-full px-6 py-3 text-white rounded bg-dark-800"
              >
                Excluir Prato
              </button>
            )}
            <Button
              title={isUpdate ? "Salvar Alterações" : "Criar Prato"}
              isLight
              onClick={handleSave}
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Prato;
