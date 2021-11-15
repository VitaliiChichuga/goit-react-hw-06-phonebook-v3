import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from './Filter';
import { getContactsList } from '../redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';

const App = () => {
  const contactList = useSelector(getContactsList);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contactList.length > 0 ? (
        <ContactList />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </Container>
  );
};
export default App;
