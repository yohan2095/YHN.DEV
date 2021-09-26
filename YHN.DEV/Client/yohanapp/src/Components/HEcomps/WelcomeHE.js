import { Col, Row } from 'react-grid-system';
import scrolldown from '../../Images/icons/scrolldown.svg';
import YHNl from '../../Images/YHN.L.logo.png';

function WelcomeHEComp() {

    

    return (
      <div className="App">
          <div id="welcome">

              
              <Row>
                  <Col lg={12}>
                  <h1 style={{fontSize : '300%'}}>,יואן ארג׳ואן</h1>
                  
                  <h1>מפתח פול סטאק</h1>
                  
                  <img style={{ height : "30vh", width : 'auto' }} src={YHNl} alt="YHN Logo" />
                  </Col>
              </Row>
              </div>


              <div class="sub_div">
              <a class="nav-link" href="#scroll"><img style={{ color : 'whitesmoke'}} alt="arrow down" class="scrollD" src={scrolldown} /></a>

              <br />

              <div id="scroll"></div>
              </div>
              

      </div>
    );
  }
  
  export default WelcomeHEComp;