import React from "react";
import "./Contact.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  return (
    <div className='contact'>
      <h1 className='contact_title'>
        <span className='contact_index'>04. </span>Contact
      </h1>

      <p className='contact_header'>
        You have a project for me ? You want to give a feedback ? If you need
        me, you can contact me at:{" "}
      </p>
      <div className='contact_mail'>
        <MailOutlineIcon className='contact_icon' /> yohan@yhn.dev
      </div>
      <div className='contact_phone'>
        <WhatsAppIcon className='contact_icon' /> (+972) 058-7197075
      </div>
      <div className='contact_insta'>
        <InstagramIcon className='contact_icon' /> @yhn.dev
      </div>
    </div>
  );
}

export default Contact;
