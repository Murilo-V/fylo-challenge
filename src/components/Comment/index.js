import React from 'react';
import { Container } from './styles';

const Comment = (props) => {
  return (
    <Container>
      <div className="container-comment">
        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        
        <div className="profile">
          <img src={props.profileImage} alt={props.profileName}/>

           <div>
            <strong>{props.profileName}</strong>
            <small>Founder & CEO, Huddle</small>
          </div> 
        </div>
      </div>
    </Container>
  );
};

export default Comment;
