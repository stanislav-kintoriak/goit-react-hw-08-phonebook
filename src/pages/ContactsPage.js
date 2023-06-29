import ContactForm from 'components/ContactForm/ContactForm';
import Heading from 'components/Heading/Heading';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

const ContactsPage = function () {
  return (
    <div>
      <Heading text="Contacts" />
      <ContactForm />
      <Heading tag="h2" text="Contacts List" />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
