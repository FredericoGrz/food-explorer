import { useEffect, useState } from "react";
import { ButtonBack } from "../../Components/ButtonBack";
import { Header } from "../../Components/Header";
import { FaPlus } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { api } from "../../services/api";
import { useAlertBox } from "../../hooks/AlertBox";
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea";
import { Button } from "../../Components/Button";

function Categoria() {
  const { showAlertBox } = useAlertBox();
  const [isNewCategory, setIsNewCategory] = useState(false);
  const [updateId, setUpdateId] = useState(0);
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleCategoryClick(id, name, description) {
    setUpdateId(id);
    setName(name);
    setDescription(description);
    setIsNewCategory(true);
  }

  function handleCategoriasClick() {
    setUpdateId(0);
    setName("");
    setDescription("");
    setIsNewCategory(false);
  }

  async function fetchCategories() {
    try {
      const response = await api.get("/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
      showAlertBox({
        message: "Erro ao carregar as categorias",
        type: "warning",
      });
    }
  }

  async function handleSave() {
    if (name !== "") {
      try {
        if (updateId > 0) {
          const response = await api.put(`/categories/${updateId}`, {
            name,
            description,
          });

          if (response.status === 200) {
            showAlertBox({ message: "Categoria alterada com sucesso" });
            fetchCategories();
            handleCategoriasClick();
          }
        } else {
          const response = await api.post("/categories", { name, description });

          if (response.status === 201) {
            showAlertBox({ message: "Categoria incluída com sucesso" });
            fetchCategories();
            handleCategoriasClick();
          }
        }
      } catch (error) {
        console.log(error);
        showAlertBox({
          message: "Preencha todos os campos obrigatórios",
          type: "warning",
        });
      }
    } else showAlertBox({ message: "Preencha todos os campos obrigatórios" });
  }

  async function handleDelete() {
    try {
      const response = await api.delete(`/categories/${updateId}`);

      if (response.status === 200) {
        showAlertBox({
          message: "Categoria excluída com sucesso",
        });
        fetchCategories();
        handleCategoriasClick();
      }
    } catch (error) {
      console.log(error);
      showAlertBox({
        message: "Nao foi possível excluir a categoria",
        type: "warning",
      });
    }
  }

  useEffect(() => {
    fetchCategories();
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
          <div className="flex gap-2 items-center">
            <button
              className={`flex gap-1 items-center text-light-100 p-3 rounded hover:scale-110 transition-all ${
                !isNewCategory ? "bg-tomato-200 font-bold" : "bg-tomato-400"
              }`}
              onClick={handleCategoriasClick}
            >
              <IoMenu />
              Categorias
            </button>
            <button
              className={`flex gap-1 items-center text-light-100 p-3 rounded hover:scale-110 transition-all ${
                isNewCategory ? "bg-tomato-200 font-bold" : "bg-tomato-400"
              }`}
              onClick={() => setIsNewCategory(true)}
            >
              <FaPlus />
              {updateId === 0 ? "Nova Categoria" : "Atualizar Categoria"}
            </button>
          </div>
        </div>
        {!isNewCategory && categories && (
          <div
            id="categorias"
            className="animate-fadeIn"
          >
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-5">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="w-full lg:w-4/12 h-32 lg:h-36 p-3 text-light-300 bg-dark-900 flex flex-col justify-between lg:justify-normal lg:gap-4 rounded"
                  onClick={() =>
                    handleCategoryClick(
                      category.id,
                      category.name,
                      category.description
                    )
                  }
                >
                  <p className="text-xl lg:text-3xl">{category.name}</p>
                  <p className="text-sm lg:text-base line-clamp-3 text-start">
                    {category.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
        {isNewCategory && (
          <form className="flex flex-col gap-6 lg:gap-8 animate-fadeIn">
            <Input
              id="nome"
              label="Nome"
              placeholder="Ex: Bebidas"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="w-full h-52">
              <TextArea
                label="Descrição"
                id="descricao"
                placeholder="Fale brevemente sobre a categoria"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div
              id="actions"
              className={`flex gap-6 self-end w-full ${
                updateId > 0 ? "lg:w-4/12" : "lg:w-2/12"
              }`}
            >
              {updateId !== 0 && (
                <button
                  type="button"
                  className="w-full px-6 py-3 text-white rounded bg-dark-800"
                  onClick={handleDelete}
                >
                  Excluir Categoria
                </button>
              )}
              <Button
                title={updateId > 0 ? "Salvar Atualizações" : "Criar Categoria"}
                isLight
                onClick={handleSave}
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Categoria;
