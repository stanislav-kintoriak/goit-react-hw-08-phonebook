import css from './ErrorNotification.module.scss';
import PropTypes from 'prop-types';

const ErrorNotification = function ({ message }) {
  return (
    <div className={css.error_container}>
      <p className={css.error_notification}>{message}</p>
    </div>
  );
};

ErrorNotification.propTypes = {
  message: PropTypes.string,
};

export default ErrorNotification;
