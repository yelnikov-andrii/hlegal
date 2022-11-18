import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';

export const ContactSection: React.FC = () => {
  return (
    <section className='contact'>
      <div className="container">
        <div className='contact__block'>
          <ContactList />
          <Form formModal={false} click={() => {}} />
        </div>
      </div>
    </section>
  );
};

