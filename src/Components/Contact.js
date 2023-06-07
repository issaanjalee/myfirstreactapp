import React from 'react';

function Contact({ name, email, onDelete }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <button onClick={onDelete} color='red'>Delete</button>
    </div>
  );
}

export default Contact;
