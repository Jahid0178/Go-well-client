import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import login from "../../images/login.svg";
import "./LogIn.css";
import { useHistory, useLocation } from "react-router";

const LogIn = () => {
  const { signInUsingGoogle, setUser, setError, isLoading, setIsLoading } =
    useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    setIsLoading(true);
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.push(redirect_url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
  return (
    <div className="login-container">
      <Container>
        <div className="login-content">
          <Row className="d-flex align-items-center">
            <Col lg={6}>
              <img
                className="img-fluid"
                src={login}
                style={{ width: 750 }}
                alt=""
              />
            </Col>
            <Col lg={6}>
              <div className="form-content">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="form-container"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("Email", { required: true, maxLength: 20 })}
                  />
                  <input
                    placeholder="Enter your password"
                    type="password"
                    {...register("Password")}
                  />

                  <input type="submit" />
                </form>
                <Button className="mt-2" onClick={handleGoogleLogin}>
                  {googleIcon} Google Log In
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LogIn;
