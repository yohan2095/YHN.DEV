import { Col, Row } from 'react-grid-system';
import Button from 'react-bootstrap/Button';
import fullstack from '../Images/fullstack.logo.png'
import meanstack from '../Images/meanstack.logo.png'
import mernstack from '../Images/mernstack.logo.png'
import line from '../Images/line.png'

function PortfolioComp() {
    return (
      <div className="App">

          <h1 style={{color : 'white'}}>Portfolio</h1>


          <br></br>

          <div class="container">
              <Row>
                  <Col lg={6}><img src={fullstack} alt="Full Stack Logo" /></Col>
                  <Col md={6} style={{color : 'white'}}>
                      <h4>Full Stack Project</h4>
                      <p>This is my first Full Stack Project. On this project I need to create 4 main pages which are: "Login", "Departments", "Employees" and "Shifts". We can manage data from the data base directly trough these pages using CRUD operations. This website is managed by users so we need to create a Login page in order for them to connect with a password. Each user has a limited number of actions per day and afterwards they are not allowed to connect for the next 24 hours. Once a user is logged-in, His name and number of actions available are shown on every page of the website. In addition to the CRUD operations on the employee page, we need to create a Search Box. This Search Box should be able to find an employee according his first name, last name or department.</p>
                      <a href='https://github.com/yohan2095/Factory-Management-System'>
                      <Button variant="light">Go to Github</Button>
                      </a>
                   </Col>  
              </Row>
              <img src={line} alt="line" style={{ height : 'auto', width : '90%', margin : '2%' }} ></img>
              <br></br>
              <Row>
              <Col lg={6}><img src={meanstack} alt="Mean Stack Logo" /></Col>
              <Col md={6} style={{color : 'white'}}>
              <h4>Mean-Stack Project</h4>
                  <p>This is my first MEAN Stack project made for my studies at the Technion. For this ptoject i am creating a Task Manager app using Angular as a client, Node.JS and Express as a Server and MongoDB as a DataBase. On this app we have users with personal details as Name, Email, Adress (City, Street, ZipCode). Every user has tasks and posts. Upside there is a search bar that allows us to find a user by his name or email. When a user is selected, his tasks and posts appears on the right side of the app. There we can manage the tasks and post. The user can mark a task as completed. If all his tasks are completed, his section will be colored in green, else it'll be red and it means he still have some tasks to achieve. When the mouse is over the "Other Data" section, it shows more details about the user. On the app there are Add buttons which are used to create new users, tasks or posts.</p>
                  <a href='https://github.com/yohan2095/Task-Manager-App'>
                      <Button variant="light">Go to Github</Button>
                      </a>
                  </Col>
              </Row>
              <img src={line} alt="line" style={{ height : 'auto', width : '90%', margin : '2%' }} ></img>
              <br></br>
              <Row>
                  <Col lg={6}><img src={mernstack} alt="Mern Stack Logo" /></Col>
                  <Col md={6} style={{color : 'white'}}>
                  <h4>Mean-Stack Project</h4>
                      <p>This is my first MERN Stack project which is also for my studies at the Technion. This the the last project i'm uploading that is related with my studies. For this project i have to create a Movie Streaming Platform (Not including any video player). This is a platform with movies references i took from https://www.tvmaze.com/api. As a member you can browse trough all the movies added to the DataBase, subscribe to the one you saw and also delete them. You can also modify your own details as a Member. As a 'User' you can delete members, create, delete, and edit Movies. There is a Log-In system included for Users with special allowance.

                      I will update about it soon...</p>
                      <a href='https://github.com/yohan2095/Streaming-Platform-App'>
                      <Button variant="light">Go to Github</Button>
                      </a>
                      </Col>
              </Row>

              <br></br> <br></br> <br></br> <br></br>
          </div>



          
            
            
      </div>
    );
  }
  
  export default PortfolioComp;