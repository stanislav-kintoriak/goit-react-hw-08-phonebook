import  ListItem  from '../ListItem/ListItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContactsThunk } from '../../redux/phonebook/phonebookThunk';
import css from './ContactsList.module.scss';
import {
  filteredContactsSelector,
  isLoadingSelector,
  errorSelector,
} from 'redux/phonebook/phonebookSelectors';
import ErrorNotification from 'components/ErrorNotification/ErrorNotification';
import Loader from 'components/Loader/Loader';

const ContactsList = function () {
  const filteredContacts = useSelector(filteredContactsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const errorMessage = useSelector(errorSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      {errorMessage ? (
        <ErrorNotification message={errorMessage} />
      ) : filteredContacts.length > 0 ? (
        <ul className={css.contactsList}>
          {filteredContacts.map(({ id, name, number }) => {
            return <ListItem key={id} name={name} number={number} id={id} />;
          })}
        </ul>
      ) : (
        <ErrorNotification message={'There is no contacts matching your request'} />
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default ContactsList;
