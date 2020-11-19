import React from 'react';
import {Container} from './styles';
import Logo from '../../assets/logo.svg'
import iconLocation from '../../assets/icon-location.svg'
import iconPhone from '../../assets/icon-phone.svg'
import iconEmail from '../../assets/icon-email.svg'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container>
            <img className="logo" src={Logo} alt="Fylo Logo" />

            <div className="footer-container">
                
                <div className="location">
                    <img src={iconLocation} alt="iconLocation" />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>

                <div className="contact">
                    <p><img src={iconPhone} alt="iconPhone" /> +1-543-123-4567</p>
                    <p><img src={iconEmail} alt="iconEmail" /> example@fylo.com</p>
                </div>

                <div className="footer-nav">
                    <ul>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>
                    <ul>
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>

                <div className="social-media">
                    <FaFacebookF/>
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>
        </Container>
    )
}

export default Footer;