export const selectContactsList = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.contacts.filter;

export const selectedContacts = state => {
  const contactsList = selectContactsList(state);
  const filter = selectFilter(state);
  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return filteredContacts;
};
