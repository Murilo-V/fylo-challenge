import React from 'react';
import {Container} from './styles';
import Logo from '../../assets/logo.svg'
import iconLocation from '../../assets/icon-location.svg'

const Footer = () => {
    return (
        <Container>
            <img className="logo" src={Logo} alt="Fylo Logo" />

            <div className="footer-container">
                
                <div className="location">
                    <img src={iconLocation} alt="Fylo Logo" />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
            </div>
        </Container>

    )
}

export default Footer;