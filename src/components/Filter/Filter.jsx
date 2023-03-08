import React from "react";
import css from 'components/Form/Form.module.css'

 const Filter = ({ value, filter }) => {
    return (
        <label>
          Find contacts by name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={filter}
            value={value}
            className = {css.input}
          ></input>
        </label>
    );
  };

  export default Filter;