import PropTypes from 'prop-types';
import css from './Paragraph.module.scss';

const Paragraph = function ({ text }) {
  return <p className={css.text}>{text}</p>;
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Paragraph;
