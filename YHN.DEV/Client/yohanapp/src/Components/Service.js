import { Col, Row } from 'react-grid-system';
import * as ReactBootStrap from 'react-bootstrap';

import availability from '../Images/computer1.jpeg';
import visibility from '../Images/computer2.jpeg';
import automation from '../Images/computer3.jpeg';
import computer4 from '../Images/computer4.jpeg';

import instagram from '../Images/icons/instagram.svg';
import linkedin from '../Images/icons/linkedin.svg';
import whatsapp from '../Images/icons/whatsapp.svg';
import email from '../Images/icons/email.svg';




function ServiceComp() {


    return (
      <div className="App">
          <div style={{ color : 'whitesmoke', backgroundColor : 'rgb(15, 19, 51)' }}>
              <h1>Why do you need me ?</h1>
              <br/><br/><br/>
              <Row>
                  <Col sm={6}>
                      <h3>Availability</h3>
                      <p style={{fontSize : '140%', margin : '5%', textAlign: 'left'}}>As we saw trough the covid-19 Pandemic, Owning an offline business can be critical during quarantines.
                          Most of the companies struggled providing their services and products trough that specific period and a big part of them 
                          have learnt from their mistakes. Being able to provid services at any moment and from anywhere is a big
                          boost for your business and for that you need a way for your customers to reach you at any time.
                      </p>
                  </Col>
                  <Col sm={6}>
                      <img src={availability} style={{ width : '70%', height : 'auto', borderRadius : '10%'}} />
                  </Col>
              </Row>

              <br/><br/><br/>

              <Row>
                  <Col sm={6}>
                      <img src={visibility} style={{ width : '70%', height : 'auto', borderRadius : '10%'}} />
                  </Col>
                  <Col md={6}>
                      <h3>Visibility</h3>
                      <p style={{fontSize : '140%', margin : '5%', textAlign: 'left'}}>You are looking for a specific product or service, what is the first thing that you do ? most of you will
                      just google it and look for it. It's not different for your potential cutomers, but if you are not online, well... You are just inexistant.
                      this is the point with having a Web Site or a Web App. Your business wil be displayed online and you could reach more customers.</p>
                  </Col>
              </Row>

              <br/><br/><br/>

              <Row>
                  <Col md={6}>
                      <div id="one">
                      <h3>Automation</h3>
                      <p style={{fontSize : '140%', margin : '5%', textAlign: 'left'}}>Isn't that nice when tasks are being done without any effort ? this is something that a Web App can provide you. 
                      Selling products automatically, Filling all your appointments, Getting leads, and much more depending your needs. 
                      All of that is possible with a WebApp. It won't just give you more time for other tasks, it will make your business grow and reach
                      another level.</p>
                      </div>
                  </Col>
                  <Col sm={6}>
                      <div id="two">
                  <img src={automation} style={{ width : '70%', height : 'auto', borderRadius : '10%'}} />
                  </div>
                  </Col>
              </Row>

              <br/><br/><br/>

              <div style={{ backgroundColor : '#152c5f' }}><br/>
              <h1>Why hiring a Full Stack Developer and not a Web Designer ?</h1>

              <p style={{fontSize : '140%', margin : '3%' }}>Web Designers can only provide you a presentation. Of course you will get the visibility and customers could find you trough
                  the web but what about performance ? What about Automations ? Without any system you cannot sell products online, you cannot fill your 
                  appointments automatically and you will be very limited as it's just a  'Picture' of your business.
                  A Full Stack Developer can provide both Client Side, Server Side and Data Base. It gives you the flexibility to imagine whatever you want depending your business needs.
              </p>

              <Row>
                  <Col md={6}>
                      <img src={computer4} style={{ borderRadius : '10%', width : '70%', height : 'auto' }}  />
                  </Col>

                  <Col sm={1}>
                  </Col>

                  <Col md={4}>
                      <h1>Want to know more about it ?</h1>
                   <div style={{ color : 'black' }}>
                   <ReactBootStrap.Card>
                    <ReactBootStrap.Card.Header>Contact Me</ReactBootStrap.Card.Header>
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Text>
                        <br/>
                        <img src={email} id="icons"></img> yohan.arejouane@icloud.com
                        <br/><br/>
                        <a href="https://wa.me/972587197075?text=Welcome%20to%20my%20livechat"><img id="icons" src={whatsapp} alt="Whatsapp Logo" /></a>
                        <a href="https://www.linkedin.com/in/yohan-arejouane-62752b104/"><img id="icons" style={{paddingLeft : '30px'}} src={linkedin} alt="LinkedIn Logo" /></a>
                        <a href="https://www.instagram.com/yohan.77/"><img id="icons" style={{paddingLeft : '30px'}} src={instagram} alt="Instagram Logo" /></a>
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