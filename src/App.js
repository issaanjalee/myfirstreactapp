import React, { useState, useEffect } from 'react';
import ContactList from './Components/ContactList';
import ContactForm from './Components/ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCurrentTime(timeString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAddContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const handleDeleteContact = (contactIndex) => {
    const updatedContacts = contacts.filter((_, index) => index !== contactIndex);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Contact Book</h1>
      <h2>Current Time: {currentTime}</h2>
      <ContactForm onAddContact={handleAddContact} />
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;
