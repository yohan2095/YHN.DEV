import { Col, Row } from 'react-grid-system';
import * as ReactBootStrap from 'react-bootstrap';

import what from '../../Images/what.png';
import forwho from '../../Images/forwho.png';
import computer4 from '../../Images/computer4.jpeg';

import instagram from '../../Images/icons/instagram.svg';
import linkedin from '../../Images/icons/linkedin.svg';
import whatsapp from '../../Images/icons/whatsapp.svg';
import email from '../../Images/icons/email.svg';




function ServiceHEComp() {


    return (
      <div className="App">
          <div style={{ color : 'whitesmoke', backgroundColor : 'rgb(15, 19, 51)' }}>
              
            
              <Row>
                  <Col md={6}><img src={what} alt="Computer with code" style={{ borderRadius : '10%', width : '100%', height : 'auto', maxWidth : "700px" }} /></Col>

                  <Col md={6}>
                  <h2 style={{ maxWidth : "700px", direction : 'rtl' }} >מה אני מפתח ?</h2>
                  <p style={{fontSize : '140%', margin : '3%', maxWidth: "700px" }}>אני מפתח אתרים ויישומים אינטרנטיים מאפס תוך כדי שימוש בטכנולוגיות העדכניות ביותר. אני יכול ליצור 
                  יישומים ואתרים אינטרנטיים במלוא הרכיבים הדרושים לכך מתוכם מבנה בסיס מידע, צד שרת וצד לקוח. היישומים הללו יכולים להיות מאוד יעילים לכמעט כל סוג של עסק. הם יכולים לפתור אינספור
                  בעיות, לענות לצרכים ספציפיים על מנת להפוך את החיים לקלים יותר או אפילו להוות כלי שיווק בשביל העסק שלך</p></Col>
              </Row> <br/>

              <Row>
                  <Col md={6}><img src={forwho} alt="For who ?" style={{ borderRadius : '10%', width : '100%', height : 'auto', maxWidth : "700px", direction : 'rtl' }} /></Col>
                  <Col md={6}><h2 style={{ maxWidth : "700px", direction : 'rtl' }} >מי צריך מפתח פול סטאק ?</h2>
                  <p style={{fontSize : '140%', margin : '3%', maxWidth : "700px" }}>אם אתם בעלי עסק קטן ולא יכולים להרשות לעצמיכם להרכיב מערך מפתחים מלא על מנת להכניס את העסק שלכם
                  לעולם הדיגיטל או שאתם צריכים לענות על צורך מסויים בעזרת תכנות, אתם צריכים מפתח פול סטאק מהסיבה הפשוטה שיש לו את כל הכישורים(צד-שרת, צד-לקוח, מערכות מידע) בכדי ליצור מה שאתם צריכים לבד.
                  אחרת אם יש לכם כבר מערך פיתוח דיגיטלי, אתם יכולים להשתמש בסרגל הכלים הרחב של מפתח פול סטאק על מנת ליצור גשר בין כל רכיבי הפיתוח שלכם. הוא יכול לעבוד יחד עם מפתחי צד ההלקוח שלכם ובאותה מידה 
                  יכול לעבוד עם מפתחי צד השרת שלכם</p></Col>
              </Row>


              <div style={{ backgroundColor : '#152c5f' }}><br/>

              <Row>
                  <Col md={6}>
                      <img src={computer4} alt="Work" style={{ borderRadius : '4%', width : '70%', height : 'auto', maxWidth : "680px" }}  />
                  </Col>

                  <Col md={1}>
                  </Col>

                  <Col md={4}>
                      <br/>
                   <div style={{ color : 'black', maxWidth : "580px" }}>
                   <h2 style={{ color : 'whitesmoke' }} >אם אתם צריכים אותי</h2>
                   <ReactBootStrap.Card>
                    <ReactBootStrap.Card.Header>פנו אליי</ReactBootStrap.Card.Header>
                      <ReactBootStrap.Card.Body>
                        <ReactBootStrap.Card.Text>
                        <br/>
                        <img src={email} alt="email" id="icons"></img> yohan.arejouane@icloud.com
                        <br/><br/>
                        <a href="https://wa.me/972587197075?text=Welcome%20to%20my%20livechat"><img id="icons" src={whatsapp} alt="Whatsapp Logo" /></a>
                        <a href="https://www.linkedin.com/in/yohan-arejouane-62752b104/"><img id="icons" style={{paddingLeft : '30px'}} src={linkedin} alt="LinkedIn Logo" /></a>
                        <a href="https://www.instagram.com/yhn.dev/"><img id="icons" style={{paddingLeft : '30px'}} src={instagram} alt="Instagram Logo" /></a>
                        </ReactBootStrap.Card.Text>
                      </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                    </div> 
                  </Col>

                  <Col sm={1}>
                  </Col>
              </Row>

              <br/>

              
              
              </div>

              
          </div>
      </div>
    );
  }
  
  export default ServiceHEComp;