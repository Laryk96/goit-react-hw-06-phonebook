import { useSelector } from 'react-redux';

import Contact from 'components/ContactItem/ContactItem';
import contactsFiltration from 'services/contactsFiltration';

import { ContactsList, LabelItem } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const toFilter = useSelector(getFilter);
  const filteredContacts = contactsFiltration(contacts, toFilter);
  console.log(filteredContacts);

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
