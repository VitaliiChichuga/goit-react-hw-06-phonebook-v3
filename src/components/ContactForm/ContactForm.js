/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { IoIosPersonAdd } from 'react-icons/io';
import s from './ContactForm.module.css';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/actions';
import { getContactsList } from '../../redux/contacts/contacts-selectors';

const ContactForm = () => {
  const contactList = useSelector(getContactsList);
  const dispatch = useDispatch();

  // const nameInputId = uuid();
  const numberInputId = uuid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: uuid(),
      name: name,
      number: number,
    };

    const renderedNames = contactList.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase(),
    );
    if (renderedNames) {
      alert(`${newContact.name} is already on contacts`);
      setName('');
      setNumber('');
      return;
    }
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          value={number}
          id={numberInputId}
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        <IoIosPersonAdd size={50} />
      </button>
    </form>
  );
};
export default ContactForm;
