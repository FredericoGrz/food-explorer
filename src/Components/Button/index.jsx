import PropTypes from "prop-types";

export function Button({ title, disabled = false, isLight = false, ...rest }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`w-full px-6 py-3 text-white rounded ${
        isLight ? "bg-tomato-400" : "bg-tomato-100"
      } hover:bg-tomato-200 disabled:bg-tomato-400 disabled:cursor-not-allowed`}
      {...rest}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  isLight: PropTypes.bool,
};
