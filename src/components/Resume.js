// src/components/Resume.js
import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Resume = () => {
  const proficiencies = [
    'JavaScript',
    'React',
    'TypeScript',
    'Node.js',
    'CSS',
    'HTML',
    // Add more proficiencies as needed
  ];

  return (
    <section className="resume" id="resume">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Resume</h2>
                  <p>Click the button below to download my resume</p>
                  <Tab.Container id="resume-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Download Resume</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Proficiencies</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          <Col size={12}>
                            <a href="https://profile.indeed.com/p/rileyk-fvzvqu6" className="btn btn-primary" download>Download Resume</a>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <Col size={12}>
                            <ul>
                              {proficiencies.map((proficiency, index) => (
                                <li key={index}>{proficiency}</li>
                              ))}
                            </ul>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
