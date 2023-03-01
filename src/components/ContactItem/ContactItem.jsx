import { useDispatch } from 'react-redux';
import { delateContact } from 'redux/contactsSlice';
import { Button, ContactItem, ContactName } from './ContactItem.styled';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <ContactName>
        <span> {name}:</span> <span>{number}</span>
      </ContactName>
      <Button
        type="button"
        aria-label="Delete"
        onClick={() => dispatch(delateContact(id))}
      >
        Delete
      </Button>
    </ContactItem>
  );
};

export default Contact;
