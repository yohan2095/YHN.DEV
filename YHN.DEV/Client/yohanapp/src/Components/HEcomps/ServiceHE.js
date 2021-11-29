import { Col, Row } from 'react-grid-system';
import * as ReactBootStrap from 'react-bootstrap';

import responsive from '../../Images/icons/responsive.svg'
import ux from '../../Images/icons/ux.svg'
import secured from '../../Images/icons/secured.svg'
import fast from '../../Images/icons/fast.svg'
import writeme from '../../Images/icons/writeme.svg'
import offer from '../../Images/icons/offer.svg'
import ProfileHEComp from './ProfileHE';
import wait from '../../Images/icons/wait.svg'





function ServiceHEComp() {
    

    return (
        <div className="App">
        <div id="scrollShow">
           

            <ProfileHEComp />

         <h1 style={{ color : 'whitesmoke' }} >היישומים האינטרנטיים שלי</h1>
            

         <br/>

         <div class="container" id="HeaderCont">
             <Row>
                 <Col sm={3}>
                     <h3 style={{ margin : '3%' }} >רספונסיביים</h3>
                     <img src={responsive} alt="responsive" style={{ margin : '3%', height : 'auto', width : '10vw' }} />
                 </Col>
                 <Col sm={3}>
                     <h3>מאובטחים</h3>
                     <img src={secured} alt="responsive" style={{ margin : '3%', height : 'auto', width : '10vw'}} />
                 </Col>
                 <Col sm={3}>
                     <h3>מהירים</h3>
                     <img src={fast} alt="responsive" style={{ margin : '3%', height : 'auto', width : '10vw' }} />
                 </Col>
                 <Col sm={3}>
                     <h3>ידידותיים למשתמש</h3>
                     <img src={ux} alt="responsive" style={{ margin : '3%', height : 'auto', width : '10vw' }} />
                 </Col>
             </Row>
         </div>

         <br/>

         <div class="container" id="ContentCont">
         <Row>
                <Col md={12} style={{ display : 'flex', justifyContent : 'center', alignItems : 'center', direction : 'rtl' }}>
                <p style={{fontSize : '140%', margin : '5%' }}>
                <h1>מי צריך מפתח פול סטאק ?</h1>אם אתם בעלי עסק קטן ולא יכולים להרשות לעצמיכם להרכיב מערך מפתחים
                      מלא על מנת להכניס את העסק שלכם לעולם הדיגיטל או שאתם צריכים לענות על צורך מסויים בעזרת תכנות, אתם צריכים מפתח פול סטאק מהסיבה הפשוטה
                      שיש לו את כל הכישורים(צד-שרת, צד-ךקוח, מערכות מידע) בכדי ליצור את מה שאתם צריכים לבד. אחרת אם יש לכם כבר מערך פיתוח דיגיטלי, אתם יכולים להשתמש
                      בסרגל הכלים הרחב של מפתח פול סטאק על מנת ליצור גשר בין כל רכיבי הפיתוח שלכם. הוא יוכל לעבוד יחד עם מפתחי צד הלקוח שלכם ובאותה מידה יכול לעבוד עם מפתחי צד השרת שלכם</p></Col>
            </Row>
         </div>

         <br/>

         <div class="container" id="HeaderCont">
             <Row>
                 <Col sm={4}>
                 <h2>תתאר לי את הצורך שלך</h2>
                 <img src={writeme} alt="responsive" style={{ margin : '3%', height : 'auto', width : '10vw' }} />
                 </Col>
                 <Col sm={4}>
                 <h2>המתן לטיפול בפנייה</h2>
                   <img src={wait} alt="wait" style={{ margin : '3%', height : 'auto', width : '10vw' }} />
                   </Col>
                 <Col sm={4}>
                 <h2>קבל הצעה מפורטת</h2>
                 <img src={offer} alt="responsive" style={{ margin : '3%', height : 'auto', width : '10vw' }} />
                 </Col>
             </Row>
         </div>

         <br/>
         
        </div>
        
    </div>
    );
  }
  
  export default ServiceHEComp;