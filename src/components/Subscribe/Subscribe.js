import React from "react";
import { Container, FormControl, InputGroup, Button } from "react-bootstrap";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="py-5 subscribe-container">
      <Container>
        <div className="text-center">
          <h2 className="subscribe-title">Subscribe</h2>
          <h3 style={{ color: "#4F4B8B" }}>Our Newsletter</h3>
          <p style={{ color: "#a1a0bb" }}>
            It is a long established fact that a reader will be distracted by
            the readable
          </p>
          <InputGroup className="mb-3 w-50 mx-auto">
            <FormControl
              className="subscribe-input"
              placeholder="Enter your email"
            />
            <Button variant="btn subscribe-btn">Subscribe</Button>
          </InputGroup>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
