import { deleteContacts } from 'redux/operations';
import { selectedContacts, selectIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectedContacts);

  const deleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <ul>
      {isLoading === false &&
        filteredContacts.map(({ name, number, id }) => {
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
                onClick={() => deleteContact(id)}
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
