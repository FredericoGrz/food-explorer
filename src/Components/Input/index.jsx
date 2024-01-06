import Proptypes from "prop-types";

export function Input({ icon: Icon, label, id, ...rest }) {
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
      <div className="w-full flex items-center p-3 gap-3 bg-dark-900 rounded-md">
        {Icon && <Icon className="text-light-100 text-xl" />}
        <input
          id={id}
          name={id}
          className="bg-transparent w-full text-light-100 outline-none placeholder:text-light-100"
          {...rest}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  icon: Proptypes.func,
  label: Proptypes.string,
  id: Proptypes.string,
};
