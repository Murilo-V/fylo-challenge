import React from 'react';
import { IntroStyle, FeaturesStyle, Comments, GetStartedDiv, GetStartedForm } from './styles';
import IllustrationIntro from '../../assets/illustration-intro.png';
import iconAccessAnywhere from '../../assets/icon-access-anywhere.svg';
import iconSecurity from '../../assets/icon-security.svg';
import iconCollaboration from '../../assets/icon-collaboration.svg';
import iconAnyFile from '../../assets/icon-any-file.svg';
import IllustrationStayProductive from '../../assets/illustration-stay-productive.png';
import { Link } from 'react-router-dom';
import Comment from '../../components/Comment';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const Landing = () => {
  return (
    <>
    <IntroStyle>
            <img src={IllustrationIntro} alt="IllustrationIntro" />
            
                <h1>All your files in one secure location, acessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure location. </p>
                <p>Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        
                <Button btnText="Get Started" />
    </IntroStyle>

    <FeaturesStyle>
          <div className="access-security">
            <div>
              <img src={iconAccessAnywhere} alt="iconAccessAnywhere" />
              <h3>Access your files, anywhere</h3>
              <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
            
            <div>
              <img src={iconSecurity} alt="iconSecurity" />
              <h3>Security you can trust</h3>
              <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
            </div>
          </div>
          
          <div className="real-time-store">
            <div>
              <img src={iconCollaboration} alt="iconCollaboration" />
              <h3>Real-time collaboration</h3>
              <p> Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            </div>
            <div>
              <img src={iconAnyFile} alt="iconAnyFile" />
              <h3>Store any type of file</h3>
              <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
            </div>
          </div>

          <div className="stay-productive">
            <img src={IllustrationStayProductive} alt="IllustrationStayProductive" />
            <div>
              <h2>Stay productive, wherever you are</h2>
              <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
              <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
              <Link to={Landing}>See how Fylo works <div></div> </Link>
            </div>
          </div>
    </FeaturesStyle>

      <Comments>
          <Comment 
            profileImage="https://github.com/Murilo-V/fylo-challenge/blob/main/src/assets/profile-1.jpg?raw=true"
            profileName="Satish Patel"
          />
          <Comment 
            profileImage="https://github.com/Murilo-V/fylo-challenge/blob/main/src/assets/profile-2.jpg?raw=true"
            profileName="Bruce McKenzie"
          />
          <Comment 
            profileImage="https://github.com/Murilo-V/fylo-challenge/blob/main/src/assets/profile-3.jpg?raw=true"
            profileName="Iva Boyd"
          />
      </Comments>


      <GetStartedDiv>
          <h4>Get early access today</h4>
          <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      </GetStartedDiv>

      <GetStartedForm>
        <form>
          <input type="email" placeholder="email@example.com" required/>
          <Button btnText="Get Started For Free" type="submit"/>
        </form>
      </GetStartedForm>
      
      <Footer />
    </>
  );
};

export default Landing;