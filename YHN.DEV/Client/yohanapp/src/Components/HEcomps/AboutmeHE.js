import profilepic from '../../Images/yohan.profile.png';
import location from '../../Images/icons/location.svg';
import certificate from '../../Images/certificate.png'

import { Col, Row } from 'react-grid-system';
import line from '../../Images/line.png'

function AboutmeHEComp() {
    return (
      <div className="App">

          <div style={{ color : "white" }} >
              <h1>אודות</h1>

              <img src={line} alt="line" style={{ height : 'auto', width : '90%', margin : '2%' }} ></img>

              <Row>
                  <Col md={4}>
                  <img src={profilepic} alt="me" style={{  height : '100%', width : 'auto', borderRadius : '50%'}} />
                  </Col>
                  <Col md={4}>
                      <h2>יואן ארג׳ואן</h2>
                      <h2>מפתח פול-סטאק</h2>
                  </Col>
                  <Col md={4}>
                    <img src={location} /> <br/>
                    <h2>ישראל</h2>
                  </Col>
              </Row>

              <Row>
                  <Col md={6} style={{ padding : '5%' }}>
                      <h2>קצת עליי</h2>
                      <p style={{ fontSize : '24px' }} >בוגר תואר ראשון בניהול תיירות מטעם המכללה האקדמית אשקלון, אני כרגע עובד בתחום התעופה בחברת  אלעל.
                      בשנים האחרונות פיתחתי תשוקה לפיתוח ווב ובשנת 2020 החלטתי לקחת את זה צעד אחד קדימה. כיום לאחר שעברתי הכשרה אינטנסיבית בתחום, אני מוסמך על ידי הטכניון | מכון טכנולוגי לישראל. 
                      את הצעדים הראשונים שלי החלטתי לקחת כפרילנסר. בעזרת מגוון הכלים הרחב שרכשתי בעת ההכשרה שלי, אני מפתח אתרי אינטרנט, תוכנות ויישומים אינטרנטיים עבור בעלי עסק בכל רחבי העולם.
                      בנוסף אני מעצב קמפיינים ולוגו עבור בעלי עסק קטנים.
                      </p>
                  </Col>
                  <Col md={6} style={{ padding : '5%' }}>
                      <h2>תעודה</h2>
                      <img id="icons" src={certificate} alt="certificate" />
                  </Col>
              </Row>
          </div>

          <br/>



            
            
      </div>
    );
  }
  
  export default AboutmeHEComp;