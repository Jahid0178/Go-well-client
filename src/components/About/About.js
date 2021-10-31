import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import aboutPerson from "../../images/about-person.png";
import Works from "../Works/Works";

const About = () => {
  return (
    <div>
      <div className="about-banner">
        <h2>About</h2>
      </div>
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <img className="img-fluid" src={aboutPerson} alt="" />
          </Col>
          <Col lg={8} md={6} sm={12}>
            <div className="mt-5">
              <h2>About US</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered by injected humour, or randomised
                words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum It is a long established
                fact that a reader will be distracted by the readable of a page
                when looking at its layout. as opposed to using 'Content here,
                content here', making it look like readable English.{" "}
              </p>
            </div>
          </Col>
        </Row>
        <Works></Works>
      </Container>
    </div>
  );
};

export default About;
