import { Col, Row } from 'react-grid-system';
import scrolldown from '../../Images/icons/scrolldown.png';
import YHN300 from '../../Images/YHN300.png';

function WelcomeHEComp() {

    

    return (
      <div className="App">
          <div id="welcome">

              
              <Row>
                  <Col lg={12}>
                  <h1 style={{fontSize : '300%'}}>יואן ארג׳ואן</h1>
                  
                  <h1>מפתח פול סטאק</h1>
                  
                  <img src={YHN300} alt="YHN Logo" />
                  </Col>
              </Row>
              </div>


              <div class="sub_div">
              <a class="nav-link" href="#scrollspyHeading"><img style={{ color : 'whitesmoke'}} alt="arrow down" class="scrollD" src={scrolldown} /></a>

              <br />

              <div id="scrollspyHeading"></div>
              </div>
              

      </div>
    );
  }
  
  export default WelcomeHEComp;