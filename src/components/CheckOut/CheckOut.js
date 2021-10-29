import React from "react";
import { useParams } from "react-router";
import "./CheckOut.css";

const CheckOut = () => {
  const id = useParams();
  console.log(id);
  return (
    <div>
      <h2>This is checkout</h2>
    </div>
  );
};

export default CheckOut;
