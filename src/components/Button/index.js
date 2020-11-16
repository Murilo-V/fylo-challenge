import React from 'react';
import { Container } from './styles';

const Button = (props) => {
  return (
    <Container>
      {props.btnText}
    </Container>
  );
};

export default Button;