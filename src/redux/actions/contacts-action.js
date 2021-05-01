export const getAllContacts = () => {
  return {type: 'GET_ALL_CONTACTS'};
};
export const addContact = (contact) => {
  return {type: 'ADD_CONTACT', payload: contact};
};
export const editContact = (contact, id) => {
  return {type: 'EDIT_CONTACT', payload: contact, id};
};
export const deleteContact = (id) => {
  return {type: 'DELETE_CONTACT', id};
};
export const filterContacts = (searchInput) => {
  return {type: 'FILTER_CONTACTS', searchInput};
};
export const getSingleContact = (index) => {
  return {type: 'GET_SINGLE_CONTACT', index};
};
