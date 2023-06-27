import css from './Input.module.scss';
import PropTypes from 'prop-types';

const Input = function ({
  label,
  type,
  value,
  handler,
  pattern,
  title,
  required,
  name,
}) {
  return (
    <label className={css.label}>
      {label}
      <input
        className={css.input}
        type={type}
        value={value}
        pattern={pattern}
        title={title}
        required={required}
        onChange={handler}
        name={name}
      />
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'tel', 'email', 'password']).isRequired,
  value: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
