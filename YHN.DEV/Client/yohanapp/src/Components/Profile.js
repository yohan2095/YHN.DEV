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

import english from '../Images/icons/english.svg'
import french from '../Images/icons/french.svg'
import hebrew from '../Images/icons/hebrew.svg'

import profilepic from '../Images/yohan.profile.png'
import location from '../Images/icons/location.svg'
import technionlogo from '../Images/technion.logo.png'

import { Col, Row } from 'react-grid-system';
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";



function ProfileComp() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


    return (
      <div className="App" style={{ backgroundColor : 'transparent' }} >

         <div class="container" style={{ backgroundColor : 'rgb(36,36,36)', opacity : '0.9' }}>
           <br/>
              <Row>
                  <Col md={5} data-aos="fade-up-right" >
                      <img id="profilePic" className="App" src={profilepic} alt="Me" />
                      <h3 style={{color : 'white'}}>Yohan Arejouane</h3>
                      <h4 style={{color : 'white'}}>Full Stack Developer</h4>
                      <img style={{  height : '10%', width : 'auto'}} src={location} alt="Location" />
                      <h4 style={{color : 'white'}}>Tel Aviv, Israel</h4> 
                  </Col>
                  


                  <Col md={7} data-aos="fade-up-left">
                      <div id="StackCont">
                        <div class="container" >
                            <h1>My Stack</h1> <br/>
                          <Row>
                            <Col md={12}>
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
                                <img id="icons" style={{ paddingLeft : '30px'}} src={firebase} alt="Stack Client Logo" />
                            </Col>
                          </Row><br/>
                        </div>
                        
                      </div>
                      <br></br>

                      
                      <div class="container">
                      <Row>

                              <Col md={7} id="StackCont">
                                  <h3>We can speak</h3>
                                  <br/>
                                  <img id="icons" style={{ height : '40%', width : 'auto' }} src={english} alt="Languages Logo" />
                                  <img id="icons" style={{ paddingLeft : '30px', height : '40%', width : 'auto'}} src={hebrew} alt="Languages Logo" />
                                  <img id="icons" style={{ paddingLeft : '30px', height : '40%', width : 'auto'}} src={french} alt="Languages Logo" />
                                  <br/>
                              </Col>

                              <Col sm={1}>
                                  <br/>
                              </Col>
                              
                          
                              <Col sm={4}  id="StackCont">
                                  <h3>Certified by</h3>
                                  <img src={technionlogo} alt="Technion Logo" style={{ width : '60%', height : 'auto'}} />
                              </Col>
                        
                       </Row>
                       <br/>
                       </div>
                  </Col>
              </Row>
          </div>


          
          

      </div>
    );
  }
  
  export default ProfileComp;
  