import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useParams } from "react-router";
import "./CheckOut.css";

const CheckOut = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState({});

  useEffect(() => {
    const url = `http://localhost:4000/booking/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

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
                <p>Rank: {orders.rank}</p>
              </Card.Text>
              <Button variant="primary">Booking</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default CheckOut;
