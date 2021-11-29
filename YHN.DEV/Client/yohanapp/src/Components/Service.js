import { Col, Row } from 'react-grid-system';

import responsive from '../Images/icons/responsive.svg'
import ux from '../Images/icons/ux.svg'
import secured from '../Images/icons/secured.svg'
import fast from '../Images/icons/fast.svg'
import writeme from '../Images/icons/writeme.svg'
import offer from '../Images/icons/offer.svg'
import ProfileComp from './Profile';
import wait from '../Images/icons/wait.svg'






function ServiceComp() {
    

    return (
      <div className="App">
          <div id="scrollShow">
             

              <ProfileComp />

           <h1 style={{ color : 'whitesmoke' }} >My Web Apps are:</h1>
              

           <br/>

           <div class="container" id="HeaderCont">
               <Row>
                   <Col sm={3}>
                       <h3 style={{ margin : '3%' }} >Responsive</h3>
                       <img src={responsive} alt="responsive" style={{ margin : '3%', height : 'auto', width : '10vw' }} />
                   </Col>
                   <Col sm={3}>
                       <h3>Secured</h3>
                       <img src={secured} alt="responsive" style={{ margin : '3%', height : 'auto', width : '10vw'}} />
                   </Col>
                   <Col sm={3}>
                       <h3>Fast</h3>
                       <img src={fast} alt="responsive" style={{ margin : '3%', height : 'auto', width : '10vw' }} />
                   </Col>
                   <Col sm={3}>
                       <h3>User Friendly</h3>
                       <img src={ux} alt="responsive" style={{ margin : '3%', height : 'auto', width : '10vw' }} />
                   </Col>
               </Row>
           </div>

           <br/>

           <div class="container" id="ContentCont">
           <Row>
                  <Col md={12} style={{ display : 'flex', justifyContent : 'center', alignItems : 'center' }}>
                  <p style={{fontSize : '140%', margin : '5%' }}>
                      <h1>Who needs a Full Stack Developer ?</h1>If you own a small business but you cannot afford a large engineering team to 
                  promote it or to solve some issues that can be solved with programmation, you need a Full Stack Developer for the simple reason 
                  that he has all the skills(Front-End, Backend, Data) to create what you need alone. Else if you already own an engineering
                  team, you can use the large range of skills of a Full Stack Developer to create a link between all the stack.
                  He could work with the Front-End developers as well as the Back-End developers.</p></Col>
              </Row>
           </div>

           <br/>

           <div class="container" id="HeaderCont">
               <Row>
                   <Col sm={4}>
                   <h2>Tell me what you need</h2>
                   <img src={writeme} alt="responsive" style={{ margin : '3%', height : 'auto', width : '10vw' }} />
                   </Col>
                   <Col sm={4}>
                   <h2>Wait until treatment</h2>
                   <img src={wait} alt="wait" style={{ margin : '3%', height : 'auto', width : '10vw' }} />
                   </Col>
                   <Col sm={4}>
                   <h2>Receive a detailed offer</h2>
                   <img src={offer} alt="responsive" style={{ margin : '3%', height : 'auto', width : '10vw' }} />
                   </Col>
               </Row>
           </div>

           <br/>
           
          </div>
          
      </div>
    );
  }
  
  export default ServiceComp;