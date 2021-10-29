import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./Footer.css";
import footerLogo from "../../images/footer-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const angleIcon = (
    <FontAwesomeIcon className="iconColor" icon={faAngleDoubleRight} />
  );
  return (
    <div className="footer-container py-4">
      <Container>
        <Row>
          <Col>
            <img className="py-1" src={footerLogo} alt="" />
            <p className="text-white">
              choose any of the available demo's fully responsive, organized
              folder structure, fully customizable...
            </p>
            <h4 className="text-white">Social Icon</h4>
          </Col>
          <Col>
            <h4 className="text-white">Popular Tour Palaces</h4>
            <ul className="text-white">
              <li>{angleIcon} Canada Navy City</li>
              <li>{angleIcon} Watican Flower Park</li>
              <li>{angleIcon} Paris Effil Tower</li>
              <li>{angleIcon} London Stone Bridges</li>
              <li>{angleIcon} Best Summer Camps</li>
            </ul>
          </Col>
          <Col>
            <h4 className="text-white">Useful Link</h4>
            <ul className="text-white">
              <li>{angleIcon} Our Team</li>
              <li>{angleIcon} Contact US</li>
              <li>{angleIcon} About US</li>
              <li>{angleIcon} Recent News</li>
              <li>{angleIcon} Teams and Services</li>
            </ul>
          </Col>
          <Col>
            <h4 className="text-white">Get In Touch</h4>
            <ul className="text-white">
              <li>{angleIcon} New York, NY 10012, US-52014</li>
              <li>{angleIcon} info1213@gowell.com</li>
              <li>{angleIcon} + 01 234 567 88, + 01 234 567 88</li>
              <li>{angleIcon} + 01 234 567 89, + 01 234 567 89</li>
            </ul>
          </Col>
        </Row>
        <div className="p-3">
          <p className="text-white text-center">
            Copyright &#169; 2021{" "}
            <span className="footer-logo-text">GoWell</span>. All rights
            reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
