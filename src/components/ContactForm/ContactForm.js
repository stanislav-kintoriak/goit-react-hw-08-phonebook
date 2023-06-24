import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelect } from '../../redux/selectors';
import { postContactThunk } from '../../redux/phonebookThunk';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

const contacts = useSelector(contactsSelect);
const dispatch = useDispatch();



  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const stateReset = () => {
    setName('');
    setNumber('');
  };


  const nameInTheList = () => {
    alert(`${name} is already there`);

    setName(name);
    setNumber(number);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
        nameInTheList();
      } else {
        dispatch(postContactThunk({ name, number }));

    stateReset();
  }
}


  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="form-name">Name</label>
      <input
        type="text"
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        id="form-name"
        onChange={handleChange}
        value={name}
        required
      />
      <label htmlFor="form-number">Number</label>
      <input
        type="tel"
        name="number"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        id="form-number"
        onChange={handleChange}
        value={number}
        required
      />
      <button type="submit" className={css.form__button}>
        Add contact
      </button>
    </form>
  );
};

