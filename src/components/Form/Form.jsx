import { useState } from 'react';
import { addContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { selectContactsList } from 'redux/selectors';
import { useSelector } from 'react-redux';
import css from 'components/Form/Form.module.css';
import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';

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
    const contact = { name, number: number };

    const contactExists = contactsList.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    contactExists
      ? alert(`${name} is already in your contact list`)
      : dispatch(addContact(contact));
  };

  return (
    <form onSubmit={onFormSubmit} className={css.form}>
      <TextField
        id="filled-basic"
        label="Name"
        variant="filled"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="filled-basic"
        label="Number"
        variant="filled"
        margin="normal"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit" variant="contained">
        <PersonAddAltIcon sx={{ marginRight: 1 }} />
        Add contact
      </Button>
    </form>
  );
}
