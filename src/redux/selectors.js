export const getContacts = state => state.contacts.contacts.items;
export const getFilterValue = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.contacts.isLoading;
export const getError = state => state.contacts.contacts.error;