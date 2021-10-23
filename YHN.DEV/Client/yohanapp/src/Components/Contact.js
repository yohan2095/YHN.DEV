
import * as ReactBootStrap from 'react-bootstrap';

import instagram from '../Images/icons/instagram.svg';
import linkedin from '../Images/icons/linkedin.svg';
import whatsapp from '../Images/icons/whatsapp.svg';
import email from '../Images/icons/email.svg';


function ContactComp() {
    return (
      <div className="App">
        
          <div class="container">
     <div>
     <h2 style={{ color : 'whitesmoke' }} >If you need me</h2>
     <ReactBootStrap.Card>
      <ReactBootStrap.Card.Header>Contact Me</ReactBootStrap.Card.Header>
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Text>
          <br/>
          <img src={email} alt="email" id="icons"></img> <p style={{ fontSize : '30px', color : 'steelblue' }} >yohan@yhn.dev</p>
          <br/><br/>
          <a href="https://wa.me/972587197075?text=Welcome%20to%20my%20livechat"><img id="icons" src={whatsapp} alt="Whatsapp Logo" /></a>
          <a href="https://www.linkedin.com/in/yohan-arejouane-62752b104/"><img id="icons" style={{paddingLeft : '30px'}} src={linkedin} alt="LinkedIn Logo" /></a>
          <a href="https://www.instagram.com/yhn.dev/"><img id="icons" style={{paddingLeft : '30px'}} src={instagram} alt="Instagram Logo" /></a>
          </ReactBootStrap.Card.Text>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
      </div> 


<br/>



</div>
      </div>
    );
  }
  
  export default ContactComp;
  