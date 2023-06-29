import PropTypes from 'prop-types';
import css from './ListItem.module.scss';
import { useDispatch } from 'react-redux';
import {
  getContactsThunk,
  editContactThunk,
  deleteContactThunk,
} from '../../redux/phonebook/phonebookThunk';
import ButtonSmall from '../ButtonSmall/ButtonSmall';
import { useState } from 'react';
import  Modal  from '../../components/Modal/Modal';

const ListItem = function ({ name, number, id }) {
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedNumber, setUpdatedNumber] = useState(number);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handlerCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlerSubmitChangeInForm = event => {
    event.preventDefault();
    setIsModalOpen(false);

    const editedContact = {
      name: updatedName,
      number: updatedNumber,
    };
    dispatch(editContactThunk({ id, editedContact }));
  };

  const handlerInputChange = event => {
    if (event.target.name === 'name') {
      setUpdatedName(event.target.value);
    }
    if (event.target.name === 'number') {
      setUpdatedNumber(event.target.value);
    }
  };

  return (
    <>
      <li className={css.contactItem}>
        <p className={css.contactText}>{name}</p>
        <p className={css.phoneText}>{number}</p>
        <ButtonSmall
          type="button"
          text="Edit"
          id={id}
          handler={() => {
            setIsModalOpen(true);
          }}
        />
        <ButtonSmall
          type="button"
          text="Delete"
          id={id}
          handler={() => {
            dispatch(deleteContactThunk(id));
            dispatch(getContactsThunk());
          }}
        />
      </li>
      {isModalOpen && (
        <Modal
          currentName={updatedName}
          currentNumber={updatedNumber}
          handlerInputChange={handlerInputChange}
          handlerSubmit={handlerSubmitChangeInForm}
          closeModal={handlerCloseModal}
        />
      )}
    </>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ListItem;
