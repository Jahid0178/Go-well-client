import React from "react";
import { useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import "./AddNewService.css";

const AddNewService = () => {
  const [name, setName] = useState("");
  const [packages, setPackages] = useState("");
  const [description, setDescription] = useState("");
  const [places, setPlaces] = useState("");
  const [ranking, setRanking] = useState("");
  const [country, setCountry] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddService = () => {
    const booking = {
      name,
      packages,
      description,
      places,
      imageUrl,
      ranking,
      country,
    };

    fetch("http://localhost:4000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added Successfully");
          setName("");
          setPackages("");
          setDescription("");
          setPlaces("");
          setRanking("");
          setCountry("");
          setImageUrl("");
        }
      });
  };
  return (
    <div>
      <div className="new-service-title py-5 text-white">
        <h2 className="text-center">Add an new service</h2>
      </div>
      <div className="my-3">
        <Container>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Enter Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Package</Form.Label>
                <Form.Control
                  onChange={(e) => setPackages(e.target.value)}
                  value={packages}
                  type="text"
                  placeholder="Enter Package"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Row>
                <Col>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="Enter Description"
                    as="textarea"
                    rows={3}
                  />
                </Col>
                <Col>
                  <Form.Label>Places</Form.Label>
                  <Form.Control
                    onChange={(e) => setPlaces(e.target.value)}
                    value={places}
                    placeholder="Enter Places Duration"
                  />
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      className="mt-2"
                      onChange={(e) => setImageUrl(e.target.value)}
                      value={imageUrl}
                      type="text"
                      placeholder="Image URL"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  onChange={(e) => setRanking(e.target.value)}
                  value={ranking}
                  type="number"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Country Name</Form.Label>
                <Form.Control
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                  type="text"
                  placeholder="Enter Country Name"
                />
              </Form.Group>
            </Row>

            <Button onClick={handleAddService} variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default AddNewService;
