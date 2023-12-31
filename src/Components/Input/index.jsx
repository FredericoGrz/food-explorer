import Proptypes from "prop-types";

export function Input({ icon: Icon, label, id, ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-white"
        >
          {label}
        </label>
      )}
      <div className="w-full flex items-center p-3 gap-3 bg-dark-900 rounded-md">
        {Icon && <Icon className="text-white text-xl" />}
        <input
          id={id}
          className="bg-transparent w-full text-white outline-none"
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
