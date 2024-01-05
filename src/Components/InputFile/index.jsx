import Proptypes from "prop-types";
import { MdOutlineFileUpload } from "react-icons/md";

export function InputFile({ label, id, ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-white">{label}</label>}
      <div className="w-full flex items-center p-3 gap-3 bg-dark-900 rounded-md">
        <label
          htmlFor={id}
          className="text-light-100 flex gap-2 items-center cursor-pointer"
        >
          <MdOutlineFileUpload className=" text-2xl" /> Selecione uma imagem
        </label>
        <input
          id={id}
          className="hidden"
          type="file"
          name={id}
          accept="image/*"
          {...rest}
        />
      </div>
    </div>
  );
}

InputFile.propTypes = {
  label: Proptypes.string,
  id: Proptypes.string,
};
