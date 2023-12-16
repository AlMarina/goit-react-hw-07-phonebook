import { useDispatch, useSelector } from 'react-redux';
import { BtnDelete, ListItem } from './ContactList.syled';
import { deleteContact } from '../../redux/contactsSlice';
import { selectContacts, selectFilter } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  if (!contacts) return;

  const filterContact = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter) ||
      contact.phone.includes(filter)
  );

  return (
    <ul>
      {filterContact.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.phone}
          <BtnDelete
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </BtnDelete>
        </ListItem>
      ))}
    </ul>
  );
};
