import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, CardGroup, Col, Container, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./ManageService.css";

const ManageService = () => {
  const [manageService, setManageService] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const url = "http://localhost:4000/booking";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setManageService(data));
  }, []);

  const handleUpdateService = (id) => {
    history.push(`/updateService/${id}`);
  };

  return (
    <div className="pt-3">
      <Container>
        <Row>
          {manageService.map((manage) => (
            <Col lg={4} md={6} sm={12} key={manage._id}>
              <CardGroup>
                <Card className="my-2 manage-card-body">
                  <Card.Img variant="top" src={manage.img} />
                  <Card.Body>
                    <Card.Title>{manage.name}</Card.Title>
                    <Card.Text>
                      <p>{manage.package}</p>
                      <p>{manage.description}</p>
                      <p>{manage.places}</p>
                      <p>{manage.rank}</p>
                      <p>{manage.country}</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      className="btn btn-success"
                      onClick={() => handleUpdateService(manage._id)}
                    >
                      Update
                    </Button>
                    <Button className="ms-2 btn btn-danger">Delete</Button>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageService;
