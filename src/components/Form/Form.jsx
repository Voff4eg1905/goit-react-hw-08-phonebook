import { useState } from 'react';
import { addContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { selectContactsList } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import css from 'components/Form/Form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contactsList = useSelector(selectContactsList);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const onFormSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  const onSubmit = ({ name, number }) => {
    const contact = { id: nanoid(), name, phone: number };

    const contactExists = contactsList.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    contactExists
      ? alert(`${name} is already in your contact list`)
      : dispatch(addContacts(contact));
  };

  return (
    <form onSubmit={onFormSubmit} className={css.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <button type="submit" className={css.submitButton}>
        Add contact
      </button>
    </form>
  );
}
