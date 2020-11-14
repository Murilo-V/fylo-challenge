import React from 'react';
import { Container } from './styles';
import profileOne  from '../../assets/profile-1.jpg';

const Comment = (props) => {
  return (
    <Container>
      <div className="container-comment">
        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        
        <div className="profile">
          <img src={props.profileImage} />

           <div>
            <strong>{props.name}</strong>
            <small>Founder & CEO, Huddle</small>
          </div> 
        </div>
      </div>
    </Container>
  );
};

export default Comment;
