import html from '../Images/icons/html.svg'
import css from '../Images/icons/css.svg'
import javascript from '../Images/icons/javascript.svg'
import typescript from '../Images/icons/typescript.svg'
import react from '../Images/icons/react.svg'
import angular from '../Images/icons/angular.svg'
import csharp from '../Images/icons/c-sharp.svg'
import express from '../Images/icons/express.svg'
import dotnet from '../Images/icons/dotnet.svg'
import node from '../Images/icons/node.svg'
import graphql from '../Images/icons/graphql.svg'
import mongodb from '../Images/icons/mongodb.svg'
import sql from '../Images/icons/sql.svg'
import firebase from '../Images/icons/firebase.svg'
import fiverr from '../Images/icons/fiverr.svg'

import line from '../Images/line.png'
import fsd from '../Images/icons/full-stack-developer.svg'

import { Col, Row } from 'react-grid-system';



function ProfileComp() {


    return (
      <div className="App" style={{ backgroundColor : 'transparent' }} >

         <div class="container" style={{ backgroundColor : 'transparent', opacity : '1' }}>
           <br/>
              <Row>
                  <Col md={12}>
                      <div id="HeaderCont">
                        <div class="container">
                            <h1  style={{ fontSize : '5vw' }}>Yohan Arejouane, Full Stack Developer</h1>
                        </div></div>
                      
                  </Col>
              </Row>

              <Row>

              <Col md={6}>
                  <img style={{ height : '350px', width : 'auto'}} src={fsd}></img>
                </Col>

                <Col md={6}>
                  <div id="ContentCont" style={{ height : '350px', width : 'auto' }} >
                    <br/>
                    <p style={{ fontSize : '24px' }}>Technion Certified Full Stack Developer, I create Web Sites and Web Apps from scratch using the most advanced technologies like "React" and "Angular". <br/>
                    You can find me on Fiverr <br/>
                    </p>

                    <a href="https://www.fiverr.com/yhn_dev"><img id="icons" src={fiverr} style={{ width : '105px', height : 'auto' }} /></a>
                    <br/>
                  </div>
                </Col>

                
              
                

              </Row>
                <Col md={12}>
                  <div id="ContentCont" style={{ height : '102%' }} >
                  <h1>My Stack</h1>
                  <br/>
                  <img id="icons" src={html} alt="Stack Client Logo" /> 
                  <img id="icons" style={{ paddingLeft : '30px'}} src={css} alt="Stack Client Logo" /> 
                  <img id="icons" style={{ paddingLeft : '30px'}} src={javascript} alt="Stack Client Logo" /> 
                  <img id="icons" style={{ paddingLeft : '30px'}} src={typescript} alt="Stack Client Logo" /> 
                  <img id="icons" style={{ paddingLeft : '30px'}} src={react} alt="Stack Client Logo" /> 
                  <img id="icons" style={{ paddingLeft : '30px'}} src={angular} alt="Stack Client Logo" /> 
                  <img id="icons" style={{ paddingLeft : '30px'}} src={csharp} alt="Stack Client Logo" /> 
                  <img id="icons" style={{ paddingLeft : '30px'}} src={node} alt="Stack Client Logo" />
                  <img id="icons" style={{ paddingLeft : '30px'}} src={graphql} alt="Stack Client Logo" />
                  <img id="icons" style={{ paddingLeft : '30px'}} src={express} alt="Stack Client Logo" />
                  <img id="icons" style={{ paddingLeft : '30px'}} src={dotnet} alt="Stack Client Logo" /> 
                  <img id="icons" style={{ paddingLeft : '30px'}} src={sql} alt="Stack Client Logo" />
                  <img id="icons" style={{ paddingLeft : '30px'}} src={mongodb} alt="Stack Client Logo" />
                  <img id="icons" style={{ paddingLeft : '30px'}} src={firebase} alt="Stack Client Logo" /></div>
                </Col>
              <Row>
                
              </Row>

              <img src={line} alt="line" style={{ height : 'auto', width : '90%', margin : '2%' }} ></img>
          </div>


          
          

      </div>
    );
  }
  
  export default ProfileComp;
  