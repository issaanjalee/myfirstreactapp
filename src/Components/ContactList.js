import React from 'react';
import { List, Button } from 'semantic-ui-react';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <div>
      <h2>Contact List</h2>
      <List divided relaxed>
        {contacts.map((contact, index) => (
          <List.Item key={index}>
            <List.Icon name="user" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header>{contact.name}</List.Header>
              <List.Description>{contact.email}</List.Description>
            </List.Content>
            <List.Content floated="right">
              <Button onClick={() => onDeleteContact(index)} color='red'>Delete</Button>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default ContactList;
