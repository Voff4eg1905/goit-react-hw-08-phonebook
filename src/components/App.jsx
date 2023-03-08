import { Component } from 'react'
import Form from 'components/Form/Form'
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid'

export class App  extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  };

  onFormSubmit = ({name, number}) => {
    this.state.contacts.find(contact => contact.name === name || contact.number === number) ? alert(`${name} is already in your contact list`) : this.setState(prevState => ({contacts: [...prevState.contacts, {name, number, id: nanoid() }]}))
  }

  filterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  }
  
  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {

    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
          <Form onSubmit = {this.onFormSubmit} />
          <h2>Contacts</h2>
          <Filter value = {this.state.filter} filter = {this.filterContacts}/>
        <Contacts list = {filteredContacts} deleteContact={this.deleteContacts} />
      </div>
    );
  }
 
};
