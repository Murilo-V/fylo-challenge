import React from 'react';
import Logo from '../../assets/logo.svg'
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <header>
        <img src={Logo} alt="Fylo Logo" />

        <nav>
          <ul>
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
          </ul>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
