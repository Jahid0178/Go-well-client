import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import "./BestTop.css";

const BestTop = () => {
  const [bestTop, setBestTop] = useState([]);
  useEffect(() => {
    fetch("https://morning-citadel-34200.herokuapp.com/best-top")
      .then((res) => res.json())
      .then((data) => setBestTop(data));
  }, []);
  return (
    <div>
      <Container>
        <div className="mb-3">
          <div className="text-center py-4 my-2">
            <span className="top-title">Best Top</span>
            <h2 className="best-rated">Rated Locations</h2>
            <p className="best-top-little-desc">
              You can choose our best top countries for travelling
            </p>
          </div>
          <Row>
            {bestTop.map((best) => (
              <Col lg={3} md={6} sm={12} key={best._id}>
                <Card className="bg-dark text-white img-overlay mb-3">
                  <Card.Img className="bt-img" src={best.img} />
                  <Card.ImgOverlay>
                    <div className="overlay-child">
                      <Card.Text>
                        <Rating
                          initialRating={best.rating}
                          emptySymbol="far fa-star"
                          fullSymbol="fas fa-star"
                          readonly
                        />
                      </Card.Text>
                      <Card.Title>{best.countryName}</Card.Title>
                      <Card.Text>
                        <div className="d-flex justify-content-between">
                          <span>{best.location}</span>
                          <span>{best.views}</span>
                        </div>
                      </Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BestTop;
