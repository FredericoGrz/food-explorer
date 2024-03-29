import Proptypes from "prop-types";
import { useEffect, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { api } from "../../services/api";
import { useAlertBox } from "../../hooks/AlertBox";

export function InputFile({ label, id, imagem, onChange, ...rest }) {
  const { showAlertBox } = useAlertBox();

  const [inputImg, setInputImg] = useState(null);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [fileName, setFileName] = useState("");

  function handleImgUpload(e) {
    const file = e.target.files[0];
    if (file !== undefined) {
      setInputImg(file);
      setFileName(file.name);
    } else {
      setInputImg(null);
      setFileName("");
      setIsLoading(false);
      setIsUploaded(false);
    }
  }

  function renderIsLoading() {
    return (
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full border-2 border-light-300 border-t-white animate-spin"></div>
        <p>{fileName}</p>
      </div>
    );
  }
  function renderIsUploaded() {
    return (
      <div className="flex items-center gap-3 animate-fadeIn">
        <FaCheck />
        <p className="hover:scale-110 transition-transform">{fileName}</p>
      </div>
    );
  }

  useEffect(() => {
    async function uploadImg() {
      setIsUploaded(false);
      setIsLoading(true);
      const formData = new FormData();
      formData.append("image", inputImg);

      try {
        const response = await api.post("/upload", formData);

        setImage(null);
        setIsLoading(false);
        setIsUploaded(true);
        if (onChange) onChange(response.data.file);
      } catch (error) {
        console.error("Erro ao enviar imagem:", error);
        setIsLoading(false);
        setIsUploaded(false);
      }
    }
    if (inputImg !== null) uploadImg();
  }, [inputImg]);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await api.get(`/files/${imagem}`, {
          responseType: "arraybuffer",
        });
        const imgFormat = imagem.split(".")[1];

        const blob = new Blob([response.data], { type: `image/${imgFormat}` });

        setImage(URL.createObjectURL(blob));
        setFileName("Imagem carregada");
        setIsUploaded(true);
      } catch (error) {
        showAlertBox({
          message: "Nao foi possível carregar a imagem",
          type: "warning",
        });
      }
    }
    if (imagem) {
      fetchImage();
    }
  }, [imagem]);

  return (
    <div className="flex flex-col gap-2 relative group">
      {label && <label className="text-light-400">{label}</label>}
      <div className="w-full flex items-center p-3 gap-3 bg-dark-900 rounded-md hover:">
        <label
          htmlFor={id}
          className="text-light-100 flex gap-2 items-center cursor-pointer"
        >
          {isLoading && renderIsLoading()}
          {isUploaded && renderIsUploaded()}
          {!isLoading && !isUploaded && (
            <div className="flex items-center gap-3">
              <MdOutlineFileUpload className=" text-2xl" />
              <p>Selecione uma imagem</p>
            </div>
          )}
        </label>
        <input
          id={id}
          className="hidden"
          type="file"
          name={id}
          accept="image/*"
          onChange={handleImgUpload}
          {...rest}
        />
      </div>
      {isUploaded && (
        <img
          className="w-20 h-20 lg:w-32 lg:h-32 object-cover absolute -top-10 lg:-top-20 right-0 animate-fadeIn hidden group-hover:block"
          src={image !== null ? image : URL.createObjectURL(inputImg)}
        />
      )}
    </div>
  );
}

InputFile.propTypes = {
  label: Proptypes.string,
  id: Proptypes.string,
  onChange: Proptypes.func,
  imagem: Proptypes.string,
};
