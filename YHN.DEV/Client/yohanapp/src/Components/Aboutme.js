import profilepic from '../Images/yohan.profile.png';
import location from '../Images/icons/location.svg';
import certificate from '../Images/certificate.png'

import { Col, Row } from 'react-grid-system';
import line from '../Images/line.png'

function AboutmeComp() {
    return (
      <div className="App">

          <div style={{ color : "white" }} >
              <h1>About me</h1>

              <img src={line} alt="line" style={{ height : 'auto', width : '90%', margin : '2%' }} ></img>

              <Row>
                  <Col md={4}>
                  <img src={profilepic} alt="me" style={{  height : '100%', width : 'auto', borderRadius : '50%'}} />
                  </Col>
                  <Col md={4}>
                      <h2>Yohan Arejouane</h2>
                      <h2>Full Stack Developer</h2>
                  </Col>
                  <Col md={4}>
                    <img src={location} /> <br/>
                    <h2>Israel</h2>
                  </Col>
              </Row>

              <Row>
                  <Col md={6} style={{ padding : '5%' }}>
                      <h2>Bio</h2>
                      <p style={{ fontSize : '24px' }} >Tourism Management B.A Graduate from Ashkelon Academic College, I am currently working in the Air Transport Industry
                          for EL AL Israel Airlines. During the last few years i developed a passion for Web Developement and in 2020 I decided to take it to the next level. <br/>
                          Today, I am a certified Full-Stack Web Developer from the Technion | Israel institute of Technology and I decided to take the first steps as a freelancer.
                          With the large range of skills that I acquired during my studies at the Technion, I am developing Websites, Web Apps, & Web Porgrams for companies around 
                          the world. I also design Logos and Digital Campaigns for small buisnesses and freelancers.
                      </p>
                  </Col>
                  <Col md={6} style={{ padding : '5%' }}>
                      <h2>Certificate</h2>
                      <img id="icons" src={certificate} alt="certificate" />
                  </Col>
              </Row>
          </div>

          <br/>



            
            
      </div>
    );
  }
  
  export default AboutmeComp;