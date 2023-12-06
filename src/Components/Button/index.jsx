import PropTypes from "prop-types";

export function Button({ title, disabled = false }) {
  return (
    <button
      disabled={disabled}
      className="w-full px-6 py-3 text-white rounded bg-tomato-100 hover:bg-tomato-200 disabled:bg-tomato-400 disabled:cursor-not-allowed"
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
};
