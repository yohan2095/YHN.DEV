import { Col, Row } from 'react-grid-system';
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import * as ReactBootStrap from 'react-bootstrap';

import responsive from '../Images/icons/responsive.svg'
import ux from '../Images/icons/ux.svg'
import secured from '../Images/icons/secured.svg'
import fast from '../Images/icons/fast.svg'
import writeme from '../Images/icons/writeme.svg'
import offer from '../Images/icons/offer.svg'
import ProfileComp from './Profile';





function ServiceComp() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    

    return (
      <div className="App">
          <div id="scrollShow" style={{ height : '100vh', width : 'auto', overflow : 'auto' }}>
             

              <ProfileComp />

              <br/>


          <div data-aos="fade-up-right" class="container" style={{ color : 'whitesmoke', backgroundColor : 'rgb(36,36,36)', opacity : '0.9' }}>
              <Row>
                  <Col md={12} style={{ display : 'flex', justifyContent : 'center', alignItems : 'center' }}>
                  <p style={{fontSize : '140%', margin : '5%' }}>
                      <h1>What am i developing ?</h1>
                      I am developing Web Sites and Web Apps from scratch using the most recent technologies.
                  I can create Full Stack Web Apps and Web Sites including Data Base Structure, Server and Client.
                  These Web Apps can be very helpful for almost any type of business. It can allow you to solve problems,
                  fill a specific need that can make your life much easier, or even be used as a marketing tool for your business.</p></Col>
              </Row>
           </div>

           <br/>

           <div class="container" style={{ color : 'whitesmoke', backgroundColor : 'rgb(36,36,36)', opacity : '0.9' }}>
               <Row>
                   <Col sm={3}>
                       <h3>Responsive</h3>
                       <img src={responsive} alt="responsive" style={{ margin : '2%' }} />
                   </Col>
                   <Col sm={3}>
                       <h3>Secured</h3>
                       <img src={secured} alt="responsive" style={{ margin : '2%' }} />
                   </Col>
                   <Col sm={3}>
                       <h3>Fast</h3>
                       <img src={fast} alt="responsive" style={{ margin : '2%' }} />
                   </Col>
                   <Col sm={3}>
                       <h3>User Friendly</h3>
                       <img src={ux} alt="responsive" style={{ margin : '2%' }} />
                   </Col>
               </Row>
           </div>

           <br/>

           <div data-aos="fade-up-left" class="container" style={{ color : 'whitesmoke', backgroundColor : 'rgb(36,36,36)', opacity : '0.9' }}>
           <Row>
                  <Col md={12} style={{ display : 'flex', justifyContent : 'center', alignItems : 'center' }}>
                  <p style={{fontSize : '140%', margin : '5%' }}>
                      <h1>Who needs a Full Stack Developer ?</h1>If you own a small business but you cannot afford a large engineering team to 
                  promote it or to solve some issues that can be solved with programmation, you need a Full Stack Developer for the simple reason 
                  that he has all the skills(Front-End, Backend, Data) to create what you need alone. Else if you already own an engineering
                  team, you can use the large range of skills of a Full Stack Developer to create a link between all the stack.
                  He could work with the Front-End developers as well as the Back-End developers.</p></Col>
              </Row>
           </div>

           <br/>

           <div class="container" style={{ color : 'whitesmoke', backgroundColor : 'rgb(36,36,36)', opacity : '0.9' }}>
               <Row>
                   <Col sm={4} data-aos="fade-up-right">
                   <h2>Tell me what you need</h2>
                   <img src={writeme} alt="responsive" style={{ margin : '2%' }} />
                   </Col>
                   <Col sm={4} data-aos="flip-up">
                   <h2>Wait until treatment</h2>
                   <br/>
                   <h3>24H</h3>
                   <ReactBootStrap.Spinner animation="border" size="xl" />
                   </Col>
                   <Col sm={4} data-aos="fade-up-left">
                   <h2>Receive a detailed offer</h2>
                   <img src={offer} alt="responsive" style={{ margin : '2%' }} />
                   </Col>
               </Row>
           </div>

           <br/>
           
          </div>
          
      </div>
    );
  }
  
  export default ServiceComp;