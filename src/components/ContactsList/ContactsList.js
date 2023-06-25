import { ListItem } from '../ListItem/ListItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {  filteredContactsSelect } from 'redux/selectors';
import { getContactsThunk } from 'redux/phonebookThunk';

import css from './ContactsList.module.css';

export const ContactList = () => {
  
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const renderList = useSelector(filteredContactsSelect);

  return (
    <ul className={css.contact__list}>
      {renderList.map(renderedItem => (
        <ListItem key={renderedItem.id} giveContact={renderedItem} />
      ))}
    </ul>
  );
};
