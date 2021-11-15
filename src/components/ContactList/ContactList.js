import React from 'react';
import PropTypes from 'prop-types';
import { BsFillFileEarmarkExcelFill } from 'react-icons/bs';
import s from './ContactList.module.css';
import { deleteContact } from '../../redux/contacts/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsList } from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const getVisibleContact = (arrOfContacts, filter) => {
    return arrOfContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const visibleContacts = getVisibleContact(
    useSelector(getContactsList),
    useSelector(getFilter),
  );
  return (
    <ul className={s.list}>
      {visibleContacts.map(({ name, id, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{name}:</p>
          <span>{number}</span>
          <button
            className={s.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            <BsFillFileEarmarkExcelFill className={s.button} />
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propType = {
  clickOnBtn: PropTypes.func,
};
export default ContactList;
