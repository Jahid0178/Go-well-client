import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import "./UpdateService.css";

const UpdateService = () => {
  const { id } = useParams();
  const [update, setUpdate] = useState([]);
  useEffect(() => {
    const url = `http://localhost:4000/booking/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  }, []);

  return (
    <div className="my-3">
      <Container>
        <h5>ID No: {id}</h5>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={update.name}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Package</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Package Details"
                value={update.package}
              />
            </Form.Group>
          </Row>

          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Description"
                  rows={3}
                  value={update.description}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Places</Form.Label>
                <Form.Control
                  placeholder="Enter Places Duration"
                  value={update.places}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Image URL"
                  value={update.img}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Rating</Form.Label>
              <Form.Control type="number" value={update.rank} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Country Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Country Name"
                value={update.country}
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default UpdateService;
