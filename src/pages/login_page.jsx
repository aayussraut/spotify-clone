import { BsSpotify } from "react-icons/bs";
import {
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Navbar,
  NavbarBrand,
  Row,
} from "reactstrap";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import React, { useState } from "react";
import LoginWithButton from "../component/Button/Button";
import { Link } from "react-router-dom";
import FormInput from "../component/Form/FormInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    console.log(formData);
    console.log("Login");
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        console.log(errorCode);
      });
  };

  return (
    <>
      <Container fluid className="p-0">
        <Navbar color="black">
          <NavbarBrand href="/">
            <div className="ps-2 pt-4 d-flex align-items-center mb-4 text-light text-light">
              <BsSpotify size={35} />
              <span className="ms-2 fw-bold fs-3">Spotify</span>
            </div>
          </NavbarBrand>
        </Navbar>

        <Container
          color="black"
          className="mt-4"
          style={{ width: "46rem", maxWidth: "100%" }}
        >
          <Col className="p-0 m-0 d-flex flex-column justify-content-center align-items-center bg-black">
            <Row className="p-0 m-0 mt-5 mb-5">
              <p className="p-0 m-0 fw-bold" style={{ fontSize: "2.8rem" }}>
                Log in to Spotify
              </p>
            </Row>

            <Col className="mb-3">
              <Row>
                <LoginWithButton>
                  <FcGoogle size={24} className="me-5" />
                  <span>Continue with Google</span>
                </LoginWithButton>
              </Row>

              <Row>
                <LoginWithButton>
                  <FaFacebook size={24} className="me-5" fill="blue" />
                  <span>Continue with Facebook</span>
                </LoginWithButton>
              </Row>

              <Row>
                <LoginWithButton>
                  <FaApple size={24} className="me-5" />
                  <span>Continue with Apple</span>
                </LoginWithButton>
              </Row>
            </Col>

            <hr className="mt-3 border border-secondary col-8" />

            <Container style={{ width: "21rem", maxWidth: "100%" }}>
              <Form>
                <FormInput
                  label="Email or username"
                  name="email"
                  type="email"
                  placeholder="Email or username"
                  value={formData.email}
                  onChange={handleChange}
                />

                <FormInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <FormGroup className="mt-3">
                  <div className="form-check form-switch mt-3">
                    <Input
                      // defaultChecked
                      type="switch"
                      checked={false}
                      role="switch"
                      readOnly
                      // onChange={() => {
                      //   //   React.useState(!state);
                      // }}
                      className="bg-secondary "
                    />
                    <Label check>Remember me</Label>
                  </div>

                  <Button
                    onClick={handleLogin}
                    className="rounded-5 mt-5 w-100 mb-3 btn-grow text-black py-2"
                  >
                    <span className="fw-semibold">Log In</span>
                  </Button>

                  <span className="d-flex justify-content-center">
                    <a href="" className="text-light">
                      Forgot your password?
                    </a>
                  </span>
                </FormGroup>
              </Form>

              <hr className="mt-3 border border-secondary  col-8" />

              <span className="d-flex justify-content-center text-secondary mb-5">
                Don't have an account?&nbsp;
                <Link to="/signup" className="text-light fw-semibold">
                  Sign up for Spotify
                </Link>
              </span>
            </Container>
          </Col>
        </Container>
      </Container>
    </>
  );
};

export default LoginPage;
