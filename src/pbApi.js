import axios from 'axios';

const BASE_URL = 'https://648db84d2de8d0ea11e82681.mockapi.io/contacts';

export const getContacts = async () => {
  const data = await axios.get(BASE_URL);

  return data;
};

export const postContact = async newContact => {
  const data = await axios.post(BASE_URL, newContact);
  return data;
};

export const deleteContact = async id => {
  const data = await axios.delete(`${BASE_URL}/${id}`);
  return data;
};
