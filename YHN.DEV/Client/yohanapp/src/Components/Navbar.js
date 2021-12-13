import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import "./Navbar.css";

function NavBarComp() {
  const gotoIntro = () => {
        const cHeight = window.innerHeight + 100;
        window.scrollTo(0, cHeight)
  };


  const gotoMywork = () => {
    if (window.innerWidth < 601) {
      const cHeight = window.innerHeight + 1100;
      window.scrollTo(0, cHeight);
    } else {
      const cHeight = window.innerHeight + 800;

      window.scrollTo(0, cHeight);
    }
  };

  const gotoService = () => {
    if (window.innerWidth < 601) {
      const cHeight = window.innerHeight + 2850;
      window.scrollTo(0, cHeight);
    } else {
      const cHeight = window.innerHeight + 1600;

      window.scrollTo(0, cHeight);
    }
  };
  const gotoContact = () => {
    const cHeight = window.innerHeight + 4000;

    window.scrollTo(0, cHeight);
  };

  return (
    <div className='navbar'>
      <ReactBootStrap.Navbar
        className='color-nav'
        expand='lg'
        sticky='top'
        variant='dark'
      >
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand style={{ color: "lightskyblue" }}>
            YHN.DEV
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls='basic-navbar-nav' />
          <ReactBootStrap.Navbar.Collapse id='basic-navbar-nav'>
            <ReactBootStrap.Nav className='me-auto'>
              <ReactBootStrap.Nav.Link onClick={gotoIntro}>
                <span style={{ color: "#ccff15" }}>01.</span>Intro_
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link onClick={gotoMywork}>
                <span style={{ color: "#ccff15" }}>02.</span>My work_
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link onClick={gotoService}>
                <span style={{ color: "#ccff15" }}>03.</span>Service_
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link onClick={gotoContact}>
                <span style={{ color: "#ccff15" }}>04.</span>Contact_
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default NavBarComp;
