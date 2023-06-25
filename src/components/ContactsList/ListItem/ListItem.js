import PropTypes from 'prop-types';
import css from './ListItem.module.css';
import { useDispatch } from 'react-redux';
import {
  getContactsThunk,
  deleteContactThunk,
} from '../../../redux/phonebookThunk';

export const ListItem = ({ giveContact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <li>
     <p className={css.contactText}>{name}</p>
      <p className={css.phoneText}>{number}</p>
        <button
          className={css.button}
          type="button"
          onClick={() => {
            dispatch(deleteContactThunk(id));
            dispatch(getContactsThunk());
          }}
          key={id}
        >
          Delete
        </button>
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
