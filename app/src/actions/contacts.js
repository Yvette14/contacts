export const fetchContacts = (contacts) =>{
  return {
    type: 'FETCH_CONTACTS',
    contacts
  }
};