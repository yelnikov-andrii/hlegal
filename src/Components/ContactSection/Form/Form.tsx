import classNames from 'classnames';
import React from 'react';
import { Button } from '../../../UI/Button/Button';

export const Form: React.FC = () => {
  const [name, setName] = React.useState('');
  const [errorName, setErrorName] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [errorPhone, setErrorPhone] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const submit = () => {
    if (name === '') {
      setErrorName(true);
    } else {
      setErrorName(false);
    }

    const PHONE_REGEX = /((\+38)?\(?\d{3}\)?[\s.-]?(\d{7}|\d{3}[\s.-]\d{2}[\s.-]\d{2}|\d{3}-\d{4}))/g;
    const EMAIL_REGEX = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
    const testPhone = PHONE_REGEX.test(phone);
    const testEmail = EMAIL_REGEX.test(email);

    if (testPhone) {
      setErrorPhone(false);
    } else {
      setErrorPhone(true);
    }

    if (email) {
      if (testEmail) {
        setErrorEmail(false);
      } else {
        setErrorEmail(true);
      }
    } else {
      setErrorEmail(false);
    }

    if (email) {
      if (testEmail && name && testPhone) {
        console.log(phone, name, email);
        setPhone('');
        setName('');
        setEmail('');
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setSent(true);
        }, 2000);

        setTimeout(() => {
          setSent(false);
        }, 3000);
      } else {
        return;
      }
    } else {
      if (name && testPhone) {
        console.log(phone, name);
        setPhone('');
        setName('');
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setSent(true);
        }, 1000);
        setTimeout(() => {
          setSent(false);
        }, 3000);
      } else {
        return;
      }
    }
  }

  return (
    <form className='form' onSubmit={(event) => {
      event.preventDefault();
      submit();
    }}>
      <input
        className={classNames('form__input', {
          'form__input--error': errorName === true
        })}
        placeholder='Name'
        type="text"
        value={name}
        onChange={(e) => {
          setErrorName(false);
          setName(e.target.value)
        }}
        disabled={isLoading ? true : sent ? true : false}
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
        className={classNames('form__input', {
          'form__input--error': errorPhone === true
        })}
        placeholder="Phone number"
        type="tel" 
        value={phone}
        onChange={(event) => {
          setErrorPhone(false);
          setPhone(event.target.value);
        }}
        disabled={isLoading ? true : sent ? true : false}
      />
      <input 
        className={classNames('form__input', {
          'form__input--error': errorEmail === true
        })}
        placeholder="Email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (event.target.value === '') {
            setErrorEmail(false);
          }
        }}
        disabled={isLoading ? true : sent ? true : false}
      />
      <Button className={isLoading ? 'button--isLoading' : sent ? 'button--sent' : ''}>
        {isLoading ? '' : sent ? 'sent' : 'Send message'}
      </Button>
    </form>
  );
};

