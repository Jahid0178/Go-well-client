import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, CardGroup, Col, Container, Row, Button } from "react-bootstrap";
import Rating from "react-rating";
import { useHistory } from "react-router";
import "./ManageService.css";

const ManageService = () => {
  const [manageService, setManageService] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const url = "https://morning-citadel-34200.herokuapp.com/booking";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setManageService(data));
  }, []);

  const handleUpdateService = (id) => {
    history.push(`/updateService/${id}`);
  };

  const handleDeleteService = (id) => {
    const url = `https://morning-citadel-34200.herokuapp.com/booking/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          window.confirm("Are you sure you want to delete");
          const remainingService = manageService.filter(
            (manage) => manage._id !== id
          );
          setManageService(remainingService);
        }
      });
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
                    <Card.Title className="manage-service-title">
                      {manage.name}
                    </Card.Title>
                    <Card.Text>
                      <p>{manage.package}</p>
                      <p>{manage.description}</p>
                      <p>{manage.places}</p>
                      <Rating
                        initialRating={manage.rank}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly
                      />
                      <p>{manage.country}</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="border-0">
                    <Button
                      className="btn btn-success"
                      onClick={() => handleUpdateService(manage._id)}
                    >
                      Update
                    </Button>
                    <Button
                      className="ms-2 btn btn-danger"
                      onClick={() => handleDeleteService(manage._id)}
                    >
                      Delete
                    </Button>
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
