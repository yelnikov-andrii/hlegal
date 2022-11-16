import React from 'react';
import { Button } from '../../../UI/Button/Button';

export const Form: React.FC = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  return (
    <form className='form'>
      <input
        className='form__input'
        placeholder='Name'
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        required
      />
      <textarea 
        className='form__input'
        placeholder='Message'
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <span className='form__header'>
        How to answer you?
      </span>
      <input 
        className='form__input'
        placeholder="Phone number"
        type="tel" 
        pattern="[+]{1}[0-9]{11,14}" 
        required
      />
      <input 
        className='form__input'
        type="email"
        placeholder="Email"
      />
      <Button>
        Send message
      </Button>
    </form>
  );
};

