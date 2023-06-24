import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.divSection}>
      <h1 className={css.section__title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contacts__title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
