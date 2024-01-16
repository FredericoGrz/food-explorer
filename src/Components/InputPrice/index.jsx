import Proptypes from "prop-types";

export function InputPrice({ label, id, value, onChange, ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-light-400"
        >
          {label}
        </label>
      )}
      <div className="w-full flex items-center p-3 gap-2 bg-dark-900 rounded-md">
        <p className={value.length > 0 ? "text-light-100" : "text-light-500"}>
          R$
        </p>
        <input
          id={id}
          name={id}
          className="bg-transparent w-full text-light-100 outline-none placeholder:text-light-500"
          type="number"
          placeholder="00,00"
          value={value}
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  );
}

InputPrice.propTypes = {
  label: Proptypes.string,
  id: Proptypes.string,
  value: Proptypes.string,
  onChange: Proptypes.func,
};
