import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import css from 'components/Form/Form.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={e => dispatch(filterContacts(e.target.value))}
        className={css.input}
      ></input>
    </label>
  );
};

export default Filter;
