import React from 'react';
import { Container } from './styles';
import IllustrationIntro from '../../assets/illustration-intro.png'

const Landing = () => {
  return (
    <Container>
        <div className="container-intro">
            <img src={IllustrationIntro} alt="Fylo Logo" />
            
                <h1>All your files in one secure location, acessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure location. </p>
                <p>Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        
                <button>Get Started</button>
        </div>
    </Container>
  );
};

export default Landing;
