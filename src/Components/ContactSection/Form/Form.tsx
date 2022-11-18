import classNames from 'classnames';
import React from 'react';
import { Button } from '../../../UI/Button/Button';

interface Props {
  formModal: boolean;
  click: (arg0: boolean) => void;
}

export const Form: React.FC <Props> = ({ formModal, click }) => {
  const [name, setName] = React.useState('');
  const [errorName, setErrorName] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [errorPhone, setErrorPhone] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const request = () => {
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
  }

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
        request();
        setEmail('');
      } else {
        return;
      }
    } else {
      if (name && testPhone) {
        request();
      } else {
        return;
      }
    }
  }

  return (
    <div className='contact__form'>
      {formModal ? (
        <div className='form__wrapper'>
          <h1 className='contact__header'>
            We would like to help you
          </h1>
          <button 
          className='form__close'
          onClick={() => {
            click(false);
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 7L25 25" stroke="#EC6F5D" stroke-width="2"/>
          <path d="M25 7L7 25" stroke="#EC6F5D" stroke-width="2"/>
        </svg>
        </button>
        </div>
        ) : (
          <h1 className='contact__header'>
            We would like to help you
          </h1>
        )}
    <form className={formModal ? 'form form--modal' : 'form'} onSubmit={(event) => {
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
        className='form__input form__textarea'
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
      <Button className={isLoading ? 'button--isLoading' : sent ? 'button--sent' : ''} click={() => {}}>
        {isLoading ? '' : sent ? 'Sent' : 'Send message'}
      </Button>
    </form>
    </div>
    
  );
};

