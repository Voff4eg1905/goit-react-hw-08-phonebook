import { useState, useEffect } from 'react';
import Form from 'components/Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
const contactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('phonebook')) ?? contactsList
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('phonebook', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = ({ name, number }) => {
    const contactExists = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    contactExists
      ? alert(`${name} is already in your contact list`)
      : setContacts(contacts => [...contacts, { name, number, id: nanoid() }]);
  };

  const filterContacts = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContacts = id => {
    // setContacts(contacts.filter(contact => contact.id !== id));
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };
  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Form onSubmit={onFormSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} filter={filterContacts} />
      <Contacts list={filteredContacts} deleteContact={deleteContacts} />
    </div>
  );
}
