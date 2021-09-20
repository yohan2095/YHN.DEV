import { Container, Row, Col } from 'react-grid-system';
import FooterComp from './Footer';
import NavBarComp from './Navbar';

function MainPageComp() {
    return (
      <div className="App">

        <NavBarComp />

        <FooterComp />

      </div>
    );
  }
  
  export default MainPageComp;