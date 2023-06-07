import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, email };
    onAddContact(contact);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Input
            fluid
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" color='green'>Add</Button>
      </Form>
    </div>
  );
}

export default ContactForm;
