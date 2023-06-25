import css from './ButtonBig.module';
import PropTypes from 'prop-types';

const ButtonBig = function ({ type, text, handler, children }) {
  return (
    <button className={css.button} type={type} onClick={handler}>
      {children}
      {text}
    </button>
  );
};

ButtonBig.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  text: PropTypes.string.isRequired,
  handler: PropTypes.func,
};

export default ButtonBig;