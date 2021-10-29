import React from "react";
import "./Works.css";
import register from "../../images/works/clipboard.png";
import logIn from "../../images/works/login.png";
import addTour from "../../images/works/contact-form.png";
import donate from "../../images/works/coin.png";
import { Col, Row } from "react-bootstrap";

const Works = () => {
  return (
    <div className="py-3 my-5">
      <div className="text-center">
        <h5 className="works-title">How</h5>
        <h3 style={{ color: "#4F4B8B" }}>It Works</h3>
        <p style={{ color: "#A1A0BB" }}>How we works for you</p>
      </div>
      <div className="d-flex align-items-center py-3">
        <Row>
          <Col lg={3} md={6} sm={12}>
            <div className="d-flex justify-content-center align-items-center reg-bg">
              <img
                style={{
                  width: "50px",
                }}
                className="img-fluid"
                src={register}
                alt=""
              />
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="d-flex justify-content-center align-items-center login-bg">
              <img
                style={{
                  width: "50px",
                }}
                className="img-fluid"
                src={logIn}
                alt=""
              />
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="d-flex justify-content-center align-items-center addTour-bg">
              <img
                style={{
                  width: "50px",
                }}
                className="img-fluid"
                src={addTour}
                alt=""
              />
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="d-flex justify-content-center align-items-center donate-bg">
              <img
                style={{
                  width: "50px",
                }}
                className="img-fluid"
                src={donate}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Works;
