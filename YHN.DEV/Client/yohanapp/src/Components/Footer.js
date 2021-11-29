import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import github from '../Images/icons/github.svg';
import instagram from '../Images/icons/instagram.svg';
import linkedin from '../Images/icons/linkedin.svg';
import whatsapp from '../Images/icons/whatsapp.svg';

function FooterComp() {
    return (
      <div className="App">

        <ReactBootStrap.Navbar variant="light" className="color-nav" sticky="bottom">
          <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand href="#" style={{ color : 'whitesmoke' }} >YHN.DEV</ReactBootStrap.Navbar.Brand>
            </ReactBootStrap.Container>
            <ReactBootStrap.Container>
            <ReactBootStrap.Nav.Link href="https://github.com/yohan2095"><img id="icons" src={github} alt="Github Logo" /></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="https://www.linkedin.com/in/yohan-arejouane-62752b104/"><img id="icons" src={linkedin} alt="LinkedIn Logo" /> </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="https://www.instagram.com/yhn.dev/"><img id="icons" src={instagram} alt="Instagram Logo" /> </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="https://wa.me/972587197075?text=Welcome%20to%20my%20livechat"><img id="icons" src={whatsapp} alt="Whatsapp Logo" /> </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
  
  export default FooterComp;