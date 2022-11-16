import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';

export const ContactSection: React.FC = () => {
  return (
    <section className='contact'>
      <div className="container">
        <div className='contact__block'>
          <ContactList />
          <div className='contact__form'>
            <h1 className='contact__header'>
              We would like to help you
            </h1>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

