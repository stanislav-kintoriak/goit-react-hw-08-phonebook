import PropTypes from 'prop-types';
import css from './ListItem.module.css';
import { useDispatch } from 'react-redux';
import { getContactsThunk, deleteContactThunk } from '../../../redux/phonebookThunk';

export const ListItem = ({ giveContact: { name, number,id } }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div>
        <p>
          {name}: <span>{number}</span>
        </p>
        <button
          className={css.listItem__button}
          type="button"
          onClick={() => {dispatch(deleteContactThunk(id));dispatch(getContactsThunk())}}
          key={id}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  giveContact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
