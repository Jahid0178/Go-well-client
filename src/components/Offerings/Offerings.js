import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Row, Button, Container, Col, CardGroup } from "react-bootstrap";
import Rating from "react-rating";
import { useHistory } from "react-router";
import "./Offerings.css";

const Offerings = () => {
  const [offers, setOffers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const url = "https://morning-citadel-34200.herokuapp.com/booking";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);

  const handleBooking = (id) => {
    history.push(`/checkOut/${id}`);
  };

  return (
    <div>
      <Container>
        <h1 className="text-center py-3 offer-title">Our Offer</h1>
        <Row className="g-3">
          {offers.map((offer) => (
            <Col lg={4} md={6} sm={12} key={offer._id}>
              <CardGroup>
                <Card className="card-container mb-3">
                  <Card.Img variant="top" src={offer.img} />
                  <Card.Body className="c-body">
                    <Card.Title>{offer.name}</Card.Title>
                    <Card.Text>{offer.package}</Card.Text>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="places-text">
                        {offer.places}
                      </Card.Text>
                      <p className="d-inline">
                        Rating:{" "}
                        <Rating
                          initialRating={offer.rank}
                          emptySymbol="far fa-star"
                          fullSymbol="fas fa-star"
                          readonly
                        />
                      </p>
                    </div>
                    <p className="country-name">{offer.country}</p>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between border-0">
                    <Button onClick={() => handleBooking(offer._id)}>
                      View Details
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

export default Offerings;
