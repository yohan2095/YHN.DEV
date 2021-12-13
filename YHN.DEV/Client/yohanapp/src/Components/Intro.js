import React from "react";

import "./Intro.css";
import react from "../Images/icons/react.svg";
import node from "../Images/icons/node.svg";
import express from "../Images/icons/express.svg";
import mongodb from "../Images/icons/mongodb.svg";
import firebase from "../Images/icons/firebase.svg";
import html from "../Images/icons/html.svg";
import javascript from "../Images/icons/javascript.svg";
import css from "../Images/icons/css.svg";
import profilepic from "../Images/yohan.profile.png";
import location from "../Images/icons/location.svg";

function Intro() {
  return (
    <div className='intro'>
      {/* Left */}
      <div className='intro_left'>
      <h1 className='intro_title'>
          <span className='intro_index'>01. </span>Intro
        </h1>

        <p className='intro_description'>
          As you could see above, My name is Yohan Arejouane. I have passion for
          technology and aviation. I am currently working for EL AL Israel
          Airlines. Since 2016 I got interested in web development and I used to
          create websites with wordpress. During the first year of the pandemic
          I had plenty of time and I started to learn real coding. Then I
          decided that I want to take it to the next level so I fullfiled
          Full-Stack Development studies at the Technion | Israel Institute of
          Technology.
          <br /> <br />
          Today, I am a certified developer and I am working on personal
          projects. I keep learning every day as this field is continuously
          evolving.
          <br />
          Here's some of the technologies that i'm mostly using for development
          :
          <br />
          <div className='intro_stack'>
            <img src={react} alt='react' className='intro_descriptionReact' />
            <img src={node} alt='node' className='intro_descriptionNode' />
            <img
              src={express}
              alt='express'
              className='intro_descriptionExpress'
            />
            <img
              src={mongodb}
              alt='mongodb'
              className='intro_descriptionMongodb'
            />
            <img
              src={firebase}
              alt='firebase'
              className='intro_descriptionFirebase'
            />
            <img src={html} alt='html' className='intro_descriptionHtml' />
            <img
              src={javascript}
              alt='javascript'
              className='intro_descriptionJavascript'
            />
            <img src={css} alt='css' className='intro_descriptionCss' />
          </div>
        </p>
      </div>

      {/* Right */}
      <div className="intro_right">
      <img
        src={profilepic}
        alt='me'
        className='intro_profilepic'
      />{" "}
      <br />
      <img
        src={location}
        alt='location'
        className='intro_profileLocation'
      />{" "}
      <br />
      <span className='intro_profileLocationText'>
        Israel<span className='blink'>_</span>
      </span>
      </div>
    </div>
  );
}

export default Intro;
