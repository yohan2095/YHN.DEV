import { Col, Row } from 'react-grid-system';
import israelflag from '../Images/icons/israel.flag.svg'
import scrolldown from '../Images/icons/scrolldown.png'

function WelcomeComp() {

    

    return (
      <div className="App">
          <div id="welcome">

              
              <Row>
                  <Col lg={12}>
                  <h1 style={{fontSize : '300%'}}>Yohan Arejouane,</h1>
                  
                  <h1>Full Stack Developer</h1>
                  <h3>From</h3>
                  <img src={israelflag} style={{borderRadius : '15%' , height : '15%', width : 'auto'}} />
                  </Col>
              </Row>
              </div>


              <div class="sub_div">
              <a class="nav-link" href="#scrollspyHeading"><img style={{ color : 'whitesmoke'}} class="scrollD" src={scrolldown} /></a>

              <br />

              <div id="scrollspyHeading"></div>
              </div>
              

      </div>
    );
  }
  
  export default WelcomeComp;