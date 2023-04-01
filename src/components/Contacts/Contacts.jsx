import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContactsList, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux/';

const Contacts = () => {
  const dispatch = useDispatch();

  const contactsList = useSelector(getContactsList);
  const filterQuery = useSelector(getFilter);

  const normalizedFilter = filterQuery.toLowerCase();
  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              type="button"
              style={{
                fontSize: '20px',
                padding: '5px 20px',
                borderRadius: '10px',
                backgroundColor: 'white',
                color: 'blue',
                border: '2px solid blue',
                marginLeft: '25px',
              }}
              onClick={() => deleteContacts(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
