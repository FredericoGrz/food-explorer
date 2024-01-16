import PropTypes from "prop-types";

export function Button({
  title,
  disabled = false,
  isLight = false,
  isLoading,
  ...rest
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`w-full px-6 py-3 text-white rounded flex gap-2 items-center justify-center ${
        isLight ? "bg-tomato-400" : "bg-tomato-100"
      } hover:bg-tomato-200 disabled:bg-tomato-400 disabled:cursor-not-allowed`}
      {...rest}
    >
      {isLoading && (
        <div className="w-5 h-5 rounded-full border-2 border-light-300 border-t-white animate-spin"></div>
      )}
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  isLight: PropTypes.bool,
  isLoading: PropTypes.bool,
};
