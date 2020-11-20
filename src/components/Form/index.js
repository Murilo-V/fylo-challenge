import React, { useState } from 'react';

import { Container } from './styles';

const Form = () => {

  const [email, setEmail] = useState('');

  function validateEmail() {
    const invalidEmail = document.querySelector('#invalidEmail');

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      alert('Email subscribed, thanks for sending')
      invalidEmail.style.display = 'none';

    } else {
      
      invalidEmail.style.display = 'block';
    }
  }

  return (
    <Container>
        <form>
          <input type="text" placeholder="email@example.com" onChange={e => setEmail(e.target.value)} />
          <button onClick={validateEmail} type="button">Get Started For Free</button>
          <p id="invalidEmail">Please enter a valid email address</p>
        </form>
    </Container>
  );
};

export default Form;
