import { useDispatch, useSelector } from 'react-redux';
import { BtnDelete, ListItem } from './ContactList.syled';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactStore.contacts);
  const filter = useSelector(state => state.filterStore.filter);
  const dispatch = useDispatch();
  if (!contacts) return;

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filterContact.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
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
