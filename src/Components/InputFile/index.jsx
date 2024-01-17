import Proptypes from "prop-types";
import { useEffect, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { api } from "../../services/api";

export function InputFile({ label, id, onChange, ...rest }) {
  const [inputImg, setInputImg] = useState(null);
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

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-light-400">{label}</label>}
      <div className="w-full flex items-center p-3 gap-3 bg-dark-900 rounded-md">
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
    </div>
  );
}

InputFile.propTypes = {
  label: Proptypes.string,
  id: Proptypes.string,
  onChange: Proptypes.func,
};
