import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import Rating from "react-rating";
import { useParams } from "react-router";
import "./CheckOut.css";

const CheckOut = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState({});

  useEffect(() => {
    const url = `https://morning-citadel-34200.herokuapp.com/booking/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleOrders = ({ _id, ...rest }) => {
    const url = "https://morning-citadel-34200.herokuapp.com/orders";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rest),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("Booking Added Successfully");
        }
      });
  };

  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center my-3">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={orders.img} />
            <Card.Body>
              <Card.Title>{orders.name}</Card.Title>
              <Card.Text>
                <h5>Country: {orders.country}</h5>
                <p>Package: {orders.package}</p>
                <p>Description: {orders.description}</p>
                <p>Places: {orders.places}</p>
                <p>
                  Rank:{" "}
                  <Rating
                    initialRating={orders.rank}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly
                  />
                </p>
              </Card.Text>
              <Button onClick={() => handleOrders(orders)} variant="primary">
                Booking Now
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default CheckOut;
