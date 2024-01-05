import Proptypes from "prop-types";

export function InputSelect({ label, id, ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-light-100"
        >
          {label}
        </label>
      )}
      <div className="w-full flex items-center p-3 gap-3 bg-dark-900 rounded-md relative">
        <select
          id={id}
          name={id}
          className=" bg-transparent w-full text-light-100 outline-none placeholder:text-light-100"
          {...rest}
        >
          <option
            value="default"
            defaultValue
            className="bg-dark-900"
          >
            Selecione uma opção
          </option>
          <option
            value="Refeicao"
            className="bg-dark-900"
          >
            Refeição
          </option>
        </select>
      </div>
    </div>
  );
}

InputSelect.propTypes = {
  label: Proptypes.string,
  id: Proptypes.string,
};
