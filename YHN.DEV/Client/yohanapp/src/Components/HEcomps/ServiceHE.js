import { Col, Row } from 'react-grid-system';
import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import * as ReactBootStrap from 'react-bootstrap';

import responsive from '../../Images/icons/responsive.svg'
import ux from '../../Images/icons/ux.svg'
import secured from '../../Images/icons/secured.svg'
import fast from '../../Images/icons/fast.svg'
import writeme from '../../Images/icons/writeme.svg'
import offer from '../../Images/icons/offer.svg'
import ProfileHEComp from './ProfileHE';





function ServiceHEComp() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    

    return (
      <div className="App">
          <div id="scrollShow" style={{ height : '100vh', width : 'auto', overflow : 'auto' }}>
             

              <ProfileHEComp />

              <br/>


          <div data-aos="fade-up-right" class="container" style={{ color : 'whitesmoke', backgroundColor : 'rgb(36,36,36)', opacity : '0.9' }}>
              <Row>
                  <Col md={12} style={{ display : 'flex', justifyContent : 'center', alignItems : 'center',  direction : 'rtl' }}>
                  <p style={{fontSize : '140%', margin : '5%' }}>
                      <h1>מה אני מפתח ?</h1>
                      אני מפתח אתרים ויישומים אינטרנטיים מאפס תוך כדי שימוש בטכנולוגיות העדכניות ביותר.
                      אני יכול ליצור יישומים ואתרים אינטרנטיים במלוא הרכיבים הדרושים לכך מתוכם מבנה בסיס מידע, צד שרת וצד לקוח.
                      היישומים הללו יכולים להיות מאוד יעילים לכמעט כל סוג של עסק. הם יכולים לפתור אינספור בעיות, לענות לצרכים ספציפיים 
                      על מנת להפוך את החיים לקלים יותר או אפילו להוות כלי שיווק בשביל העסק שלך</p></Col>
              </Row>
           </div>

           <br/>

           <div class="container" style={{ color : 'whitesmoke', backgroundColor : 'rgb(36,36,36)', opacity : '0.9' }}>
               <Row>
                   <Col sm={3}>
                       <h3>רספונסיבי</h3>
                       <img src={responsive} alt="responsive" style={{ margin : '2%' }} />
                   </Col>
                   <Col sm={3}>
                       <h3>מאובטח</h3>
                       <img src={secured} alt="responsive" style={{ margin : '2%' }} />
                   </Col>
                   <Col sm={3}>
                       <h3>מהיר</h3>
                       <img src={fast} alt="responsive" style={{ margin : '2%' }} />
                   </Col>
                   <Col sm={3}>
                       <h3>ידידותי למשתמש</h3>
                       <img src={ux} alt="responsive" style={{ margin : '2%' }} />
                   </Col>
               </Row>
           </div>

           <br/>

           <div data-aos="fade-up-left" class="container" style={{ color : 'whitesmoke', backgroundColor : 'rgb(36,36,36)', opacity : '0.9' }}>
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

           <div class="container" style={{ color : 'whitesmoke', backgroundColor : 'rgb(36,36,36)', opacity : '0.9' }}>
               <Row>
                   <Col sm={4} data-aos="fade-up-right">
                   <h2>תתאר לי את הצורך שלך</h2>
                   <img src={writeme} alt="responsive" style={{ margin : '2%' }} />
                   </Col>
                   <Col sm={4} data-aos="flip-up">
                   <h2>חכה לטיפול בפנייה</h2>
                   <br/>
                   <h3>24H</h3>
                   <ReactBootStrap.Spinner animation="border" size="xl" />
                   </Col>
                   <Col sm={4} data-aos="fade-up-left">
                   <h2>קבל הצעה מפורטת</h2>
                   <img src={offer} alt="responsive" style={{ margin : '2%' }} />
                   </Col>
               </Row>
           </div>

           <br/>
           
          </div>
          
      </div>
    );
  }
  
  export default ServiceHEComp;