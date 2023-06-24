export const contactsSelect = state => state.phonebook.contacts.items;

export const filteredContactsSelect = state => {


const filteredContacts = state.phonebook.contacts.items.filter(contact => 

        contact.name.toLowerCase().includes(state.phonebook.filter.toLowerCase())
)

return filteredContacts;
};


export const filterSelect = state => state.phonebook.filter;

export const isLoadingSelect = state => state.phonebook.contacts.isLoading;

export const errorSelect = state => state.phonebook.contacts.error;