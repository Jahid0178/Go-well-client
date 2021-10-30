import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import "./UpdateService.css";

const UpdateService = () => {
  const { id } = useParams();
  const [update, setUpdate] = useState([]);
  const [updated, setUpdated] = useState({
    name: "",
    package: "",
    description: "",
    places: "",
    img: "",
    rank: "",
    country: "",
  });
  useEffect(() => {
    const url = `http://localhost:4000/booking/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUpdate(data);
        setUpdated({
          name: data.name,
          package: data.package,
          description: data.description,
          places: data.places,
          img: data.img,
          rank: data.rank,
          country: data.country,
        });
      });
  }, []);

  const handleUpdateService = (e) => {
    const url = `https://morning-citadel-34200.herokuapp.com/booking/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updated),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successfully");
        }
      });
    e.preventDefault();
  };

  return (
    <div className="my-3">
      <Container>
        <h5>ID No: {id}</h5>
        <Form onSubmit={handleUpdateService}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={updated.name || ""}
                onChange={(e) =>
                  setUpdated({ ...updated, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Package</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Package Details"
                value={updated.package || ""}
                onChange={(e) =>
                  setUpdated({ ...updated, package: e.target.value })
                }
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
                  value={updated.description || ""}
                  onChange={(e) =>
                    setUpdated({ ...updated, description: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Places</Form.Label>
                <Form.Control
                  placeholder="Enter Places Duration"
                  value={updated.places || ""}
                  onChange={(e) =>
                    setUpdated({ ...updated, places: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Image URL"
                  value={updated.img}
                  onChange={(e) =>
                    setUpdated({ ...updated, img: e.target.value })
                  }
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                value={updated.rank || ""}
                onChange={(e) =>
                  setUpdated({ ...updated, rank: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Country Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Country Name"
                value={updated.country || ""}
                onChange={(e) =>
                  setUpdated({ ...updated, country: e.target.value })
                }
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
