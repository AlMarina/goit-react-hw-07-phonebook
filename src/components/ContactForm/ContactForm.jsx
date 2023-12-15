import { useDispatch, useSelector } from 'react-redux';
import { BtnForm, Form, InputForm, Label } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contactStore.contacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    // const { name, number } = evt.target.elements;
    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;

    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number, id: nanoid() }));
    evt.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <InputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number
        <InputForm
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <BtnForm type="submit">Add contact</BtnForm>
    </Form>
  );
};
