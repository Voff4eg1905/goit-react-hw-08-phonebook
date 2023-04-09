import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <TextField
      id="filled-basic"
      label="Search"
      variant="filled"
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      onChange={event =>
        dispatch(filterContacts(event.target.value.toLowerCase()))
      }
    />
  );
};

export default Filter;
