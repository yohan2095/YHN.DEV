import { Col, Row } from 'react-grid-system';
import { useHistory } from "react-router-dom";
import * as ReactBootStrap from 'react-bootstrap';
import english from '../Images/icons/english.svg';
import hebrew from '../Images/icons/hebrew.svg';
import YHND from '../Images/YHN.logo.png';

function LanguageSelectorComp() {

    const history = useHistory();

    const slctEN = () =>
    {
        history.push('/en')
    }

    const slctHE = () =>
    {
        history.push('/he')
    }



    return (
      <div className="App">
          <div id="YHN">

              <br/>

              <Row>
                  <Col xl={12}>
                       <h1><img style={{ height : "auto", width : '50%' }} src={YHND} alt="YHN Logo" /></h1>
                  </Col>
              </Row>       
              
              <Row>
                  <Col sm={4}></Col>
                  <Col lg={2}>
                      <h2>English</h2>
                      <h1><img id="icons" src={english} alt="English" onClick={slctEN} /></h1>
                  </Col>

                  <Col lg={2}>
                      <h2>Hebrew</h2>
                       <h1><img id="icons" src={hebrew} alt="Hebrew" onClick={slctHE} /></h1>
                  </Col>
                  <Col sm={4}></Col>
              </Row>

              <br/>

              <Row>
                  <Col sm={12}>
                      <ReactBootStrap.Spinner animation="grow" size="sm" /> {" "}
                      <ReactBootStrap.Spinner animation="grow" size="sm" /> {" "}
                      <ReactBootStrap.Spinner animation="grow" size="sm" />
                  </Col>
              </Row>
              </div>     

      </div>
    );
  }
  
  export default LanguageSelectorComp;