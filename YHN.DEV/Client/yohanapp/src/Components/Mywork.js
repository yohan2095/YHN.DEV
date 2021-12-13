import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Mywork.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Link } from "react-router-dom";

function Mywork() {
  return (
    <div className='mywork'>
      <h1 className='mywork_title'>
        <span className='mywork_index'>02. </span>My Work
      </h1>

      <div className='mywork_projects'>
        <Row className='mywork_projectsRow1'>
          {/* Project 1 */}
          <Col className='mywork_project' md={4}>
            <h5>YHN Livechat (Whatsapp clone)</h5>
            <br />
            <p className='mywork_projectDescription'>
              Fully functional chat including firestore database. You can create
              rooms or write into a public one. Whole thing connected to a
              Firebase server.
            </p>
            <p className='mywork_projectStack'>React, Firebase, Firestore </p>
            <div className='mywork_button'>
              <Link
                target='_blank'
                to={{
                  pathname: "https://github.com/yohan2095/YHN-Livechat-React",
                }}
              >
                <GitHubIcon className='mywork_buttonGithub' />
              </Link>
              <Link
                target='_blank'
                to={{ pathname: "https://yhnlivechat.web.app/" }}
              >
                <InsertLinkIcon className='mywork_buttonLink' />
              </Link>
            </div>
          </Col>
          {/* Project 2 */}
          <Col className='mywork_project' md={4}>
            <h5>Tinder-Swipe clone</h5>
            <br />
            <p className='mywork_projectDescription'>
              Tinder app design clone including swipe function with users
              connected to a server stored in a mongodb databse.
            </p>
            <p className='mywork_projectStack'>
              <br />
              React, Mongodb, Node, Express{" "}
            </p>
            <div className='mywork_button'>
              <Link
                target='_blank'
                to={{
                  pathname: "https://github.com/yohan2095/Tinder-clone-MERN",
                }}
              >
                <GitHubIcon className='mywork_buttonGithub' />
              </Link>
              <Link
                target='_blank'
                to={{ pathname: "https://yhn-tinderclone.web.app/" }}
              >
                <InsertLinkIcon className='mywork_buttonLink' />
              </Link>
            </div>
          </Col>
          {/* Project 3 */}
          <Col className='mywork_project' md={4}>
            <h5>Movie Subscribtion Platform</h5>
            <br />
            <p className='mywork_projectDescription'>
              Web Program that allows users to subscribe and unsubscribe to
              movies. Admin with login can edit, post and delete movies with
              forms. All that stored in mongodb databse.
            </p>
            <p className='mywork_projectStack'>
              React, Mongodb, Node, Express{" "}
            </p>
            <div className='mywork_button'>
              <Link
                target='_blank'
                to={{
                  pathname:
                    "https://github.com/yohan2095/Streaming-Platform-App",
                }}
              >
                <GitHubIcon className='mywork_buttonGithub' />
              </Link>
            </div>
          </Col>
        </Row>
        {/* Row 2 */}
        {/* Project 4 */}
        <Row className='mywork_projectsRow2'>
          <Col className='mywork_project' md={4}>
            <h5>Task Manager</h5>
            <br />
            <p className='mywork_projectDescription'>
              Web app made for managing tasks and posts includ all crud
              operation function. It allows the user to create, edit, delete and
              read tasks and posts.
            </p>
            <p className='mywork_projectStack'>
              Angular, Mongodb, Node, Express{" "}
            </p>
            <div className='mywork_button'>
              <Link
                target='_blank'
                to={{
                  pathname: "https://github.com/yohan2095/Task-Manager-App",
                }}
              >
                <GitHubIcon className='mywork_buttonGithub' />
              </Link>
            </div>
          </Col>
          {/* Project 5 */}
          <Col className='mywork_project' md={4}>
            <h5>Factory Staff Management system</h5>
            <br />
            <p className='mywork_projectDescription'>
              Full-Stack Web Program used for managing factory employees and
              departments. Login in as an admin, you can manage employees shift,
              add employees or edit them.
            </p>
            <p className='mywork_projectStack'>
              Angular, Mongodb, Node, Express{" "}
            </p>
            <div className='mywork_button'>
              <Link
                target='_blank'
                to={{
                  pathname:
                    "https://github.com/yohan2095/Factory-Management-System",
                }}
              >
                <GitHubIcon className='mywork_buttonGithub' />
              </Link>
            </div>
          </Col>
          {/* Project 6 */}
          <Col className='mywork_project' md={4}>
            <h5>Flight Finder</h5>
            <br />
            <p className='mywork_projectDescription'>
              Flight booking system that allows the user to book a virtual
              flight including classes and prices. He can also pass a payment
              with a virtual credit card. (currently coding).
            </p>
            <p className='mywork_projectStack'>
              React, Mongodb, Node, Express{" "}
            </p>
            <div className='mywork_button'>
              <Link
                target='_blank'
                to={{
                  pathname: "https://github.com/yohan2095/Flight-Finder-MERN",
                }}
              >
                <GitHubIcon className='mywork_buttonGithub' />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Mywork;
