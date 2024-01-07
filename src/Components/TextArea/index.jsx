import Proptypes from "prop-types";

export function TextArea({ label, id, ...rest }) {
  return (
    <div className="flex h-full flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-light-400"
        >
          {label}
        </label>
      )}
      <div className="w-full h-full p-3 bg-dark-900 rounded-md">
        <textarea
          id={id}
          name={id}
          className="bg-transparent w-full h-full text-light-100 outline-none placeholder:text-light-500 resize-none"
          {...rest}
        />
      </div>
    </div>
  );
}

TextArea.propTypes = {
  label: Proptypes.string,
  id: Proptypes.string,
};
