import { Col, Row } from 'react-grid-system';
import * as ReactBootStrap from 'react-bootstrap';

import computer4 from '../../Images/computer4.jpeg';

import instagram from '../../Images/icons/instagram.svg';
import linkedin from '../../Images/icons/linkedin.svg';
import whatsapp from '../../Images/icons/whatsapp.svg';
import email from '../../Images/icons/email.svg';


function ContactHEComp() {
    return (
      <div className="App">
          <div class="container" style={{ backgroundColor : 'rgb(36, 36, 36)' }}><br/>

<Row>
    <Col md={6}>
        <img src={computer4} alt="Work" style={{ borderRadius : '4%', width : '70%', height : 'auto', maxWidth : "680px" }}  />
    </Col>

    <Col md={1}>
    </Col>

    <Col md={4}>
        <br/>
     <div style={{ color : 'black', maxWidth : "580px" }}>
     <h2 style={{ color : 'whitesmoke' }} >אם אתם צריכים אותי</h2>
     <ReactBootStrap.Card>
      <ReactBootStrap.Card.Header>פנו אליי</ReactBootStrap.Card.Header>
        <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Text>
          <br/>
          <img src={email} alt="email" id="icons"></img> yohan@yhn.dev
          <br/><br/>
          <a href="https://wa.me/972587197075?text=Welcome%20to%20my%20livechat"><img id="icons" src={whatsapp} alt="Whatsapp Logo" /></a>
          <a href="https://www.linkedin.com/in/yohan-arejouane-62752b104/"><img id="icons" style={{paddingLeft : '30px'}} src={linkedin} alt="LinkedIn Logo" /></a>
          <a href="https://www.instagram.com/yhn.dev/"><img id="icons" style={{paddingLeft : '30px'}} src={instagram} alt="Instagram Logo" /></a>
          </ReactBootStrap.Card.Text>
        </ReactBootStrap.Card.Body>
      </ReactBootStrap.Card>
      </div> 
    </Col>

    <Col sm={1}>
    </Col>
</Row>

<br/>



</div>
      </div>
    );
  }
  
  export default ContactHEComp;