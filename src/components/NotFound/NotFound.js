import React from "react";
import "./NotFound.css";
import image from "../../images/404 error.svg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <div className="error-container">
      <div>
        <div>
          <img className="error-img" src={image} alt="" />
        </div>
        <Link className="nav-link text-center d-block" to="/home">
          <Button>Back To Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
