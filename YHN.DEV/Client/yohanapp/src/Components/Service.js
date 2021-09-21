import { Col, Row } from 'react-grid-system';
import * as ReactBootStrap from 'react-bootstrap';

import what from '../Images/what.png';
import forwho from '../Images/forwho.png';
import computer4 from '../Images/computer4.jpeg';

import instagram from '../Images/icons/instagram.svg';
import linkedin from '../Images/icons/linkedin.svg';
import whatsapp from '../Images/icons/whatsapp.svg';
import email from '../Images/icons/email.svg';




function ServiceComp() {


    return (
      <div className="App">
          <div style={{ color : 'whitesmoke', backgroundColor : 'rgb(15, 19, 51)' }}>
              
            
              <Row>
                  <Col md={6}><img src={what} alt="Computer with code" style={{ borderRadius : '10%', width : '100%', height : 'auto', maxWidth : "700px" }} /></Col>

                  <Col md={6}>
                  <h2 style={{ maxWidth : "700px" }} >What am i developing ?</h2>
                  <p style={{fontSize : '140%', margin : '3%', maxWidth: "700px" }}>I am developing Web Sites and Web Apps from scratch using the most recent technologies.
                  I can create Full Stack Web Apps and Web Sites including Data Base Structure, Server and Client.
                  These Web Apps can be very helpful for almost any type of business. It can allow you to solve problems,
                  fill a specific need that can make your life much easier, or even be used as a marketing tool for your business.</p></Col>
              </Row> <br/>

              <Row>
                  <Col md={6}><img src={forwho} alt="For who ?" style={{ borderRadius : '10%', width : '100%', height : 'auto', maxWidth : "700px" }} /></Col>
                  <Col md={6}><h2 style={{ maxWidth : "700px"  }} >Who needs a Full Stack Developer ?</h2>
                  <p style={{fontSize : '140%', margin : '3%', maxWidth : "700px" }}>If you own a small business but you cannot afford a large engineering team to 
                  promote it or to solve some issues that can be solved with programmation, you need a Full Stack Developer for the simple reason 
                  that he has all the skills(Front-End, Backend, Data) to create what you need alone. Else if you already own an engineering
                  team, you can use the large range of skills of a Full Stack Developer to create a link between all the stack.
                  He could work with the Front-End developers as well as the Back-End developers.</p></Col>
              </Row>


              <div style={{ backgroundColor : '#152c5f' }}><br/>

              <Row>
                  <Col md={6}>
                      <img src={computer4} alt="Work" style={{ borderRadius : '4%', width : '70%', height : 'auto', maxWidth : "680px" }}  />
                  </Col>

                  <Col md={1}>
                  </Col>

                  <Col md={4}>
                      <br/>
                   <div style={{ color : 'black', maxWidth : "580px" }}>
                   <h2 style={{ color : 'whitesmoke' }} >If you need me</h2>
                   <ReactBootStrap.Card>
                    <ReactBootStrap.Card.Header>Contact Me</ReactBootStrap.Card.Header>
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Text>
                        <br/>
                        <img src={email} alt="email" id="icons"></img> yohan.arejouane@icloud.com
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
      </div>
    );
  }
  
  export default ServiceComp;