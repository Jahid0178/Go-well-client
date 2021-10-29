import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-banner">
        <Container>
          <h2 className="text-white">Contact</h2>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="my-4">
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Phone Number" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      placeholder="Message"
                      as="textarea"
                      rows={3}
                    />
                  </Form.Group>

                  <Button className="mt-3" variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="my-5 d-flex align-items-center">
                <div>
                  <h2 style={{ color: "#4F4B8B" }}>Contact</h2>
                  <p style={{ color: "#4F4B8B" }}>
                    Address: New York, NY 10012, US-52014
                  </p>
                  <p style={{ color: "#4F4B8B" }}>Mail: info1213@gowell.com</p>
                  <p style={{ color: "#4F4B8B" }}>
                    Phone: + 01 234 567 88, + 01 234 567 88
                  </p>
                  <p style={{ color: "#4F4B8B" }}>
                    Fax: + 01 234 567 89, + 01 234 567 89
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
