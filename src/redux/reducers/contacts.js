const initialContacts = {
  contacts: [ {name: 'Venkatesh', phoneNumber: '1234512345', email: 'mogilivenkatesh3@gmail.com'} ],
  contact: {},
};
export const contactsReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case 'GET_ALL_CONTACTS':
      return {...state};
    case 'ADD_CONTACT': {
      let contacts = [ ...state.contacts ];
      contacts.push(action.payload);
      return {...state, contacts};
    }
    case 'EDIT_CONTACT': {
      let contacts = [ ...state.contacts ];
      contacts[action.id] = action.payload;
      return {...state, contacts};
    }
    case 'DELETE_CONTACT': {
      let contacts = [ ...state.contacts ];
      contacts.splice(action.id, 1);
      return {...state, contacts};
    }
    case 'GET_SINGLE_CONTACT':
      return {...state, contact: {...state.contacts[action.index], id: action.index}};
    case 'FILTER_CONTACTS': {
      let contacts = [ ...state.contacts ];
      let filteredContacts = contacts.filter(
        (contact) => contact.name.toLowerCase().indexOf(action.searchInput.toLowerCase()) !== -1,
      );
      return {...state, contacts: filteredContacts};
    }
    default:
      return state;
  }
};
