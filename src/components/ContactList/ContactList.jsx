import { useSelector } from 'react-redux';

import Contact from 'components/ContactItem/ContactItem';
import contactsFiltration from 'services/contactsFiltration';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/FilterSlice';
import { ContactsList, LabelItem } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const toFilter = useSelector(getFilter);
  console.log(contacts);
  const filteredContacts = contactsFiltration(contacts, toFilter);

  return (
    <ContactsList>
      {contacts[0] && (
        <LabelItem>
          <span>Name:</span>
          <span>Tell:</span>
        </LabelItem>
      )}
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ContactsList>
  );
};

export default ContactList;
