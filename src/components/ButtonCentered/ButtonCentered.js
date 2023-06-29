import css from './ButtonCentered.module.scss';
import PropTypes from 'prop-types';

const ButtonAuthForm = function ({ type, text, handler, children }) {
  return (
    <button className={css.button} type={type} onClick={handler}>
      {children}
      {text}
    </button>
  );
};

ButtonAuthForm.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  text: PropTypes.string.isRequired,
  handler: PropTypes.func,
};

export default ButtonAuthForm;
