import { Col, Row } from 'react-grid-system';
import { useHistory } from "react-router-dom";
import english from '../Images/icons/english.svg';
import hebrew from '../Images/icons/hebrew.svg';
import YHN300 from '../Images/YHN300.png';

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

              <br/><br/><br/><br/><br/>


              <Row>
                  <Col xl={12}>
                       <h1><img src={YHN300} alt="YHN Logo" /></h1>
                  </Col>
              </Row>       
              
              <Row>
                  <Col sm={5}></Col>
                  <Col xl={1}>
                      <h1><img id="icons" src={english} alt="English" onClick={slctEN} /></h1>
                  </Col>

                  <Col xl={1}>
                       <h1><img id="icons" src={hebrew} alt="Hebrew" onClick={slctHE} /></h1>
                  </Col>
                  <Col sm={5}></Col>
              </Row>
              </div>     

      </div>
    );
  }
  
  export default LanguageSelectorComp;