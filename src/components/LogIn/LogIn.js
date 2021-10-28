import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import login from "../../images/login.svg";
import "./LogIn.css";

const LogIn = () => {
  const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
  return (
    <div className="login-container">
      <Container>
        <div className="login-content">
          <Row className="d-flex align-items-center">
            <Col>
              <img src={login} style={{ width: 550 }} alt="" />
            </Col>
            <Col>
              <Button>{googleIcon} Google Log In</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LogIn;
