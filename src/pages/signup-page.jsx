import { BsSpotify } from "react-icons/bs";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import React, { useState } from "react";
import LoginWithButton from "../component/Button/Button";
import { Link } from "react-router-dom";
import FormInput from "../component/Form/FormInput";
import FormRadio from "../component/Form/Radio";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = () => {
    console.log("Sign Up");
  };
  return (
    <>
      <Container>
        <Col className="p-0 m-0 d-flex flex-column justify-content-center align-items-center  ">
          <Link to="/" className="text-decoration-none">
            <div className="ps-2 pt-4 d-flex align-items-center mb-4 text-light text-light">
              <BsSpotify size={35} />
              <span className="ms-2 fw-bold fs-3">Spotify</span>
            </div>
          </Link>

          <Row className="p-0 m-0 mt-3 mb-4">
            <p className="p-0 m-0 fw-bold" style={{ fontSize: "1.8rem" }}>
              Sign up for free to start listening.
            </p>
          </Row>

          <Col className="mb-3">
            <LoginWithButton>
              <FcGoogle size={24} className="me-5" />
              <span className="fw-bold">Continue With Google</span>
            </LoginWithButton>
            <LoginWithButton>
              <FaFacebook size={24} className="me-5" fill="blue" />
              <span className="fw-bold">Continue With Facebook</span>
            </LoginWithButton>
          </Col>

          <div className="d-flex align-items-center">
            <div
              className="w-5 border border-secondary me-2"
              style={{ width: "180px", height: "0px" }}
            ></div>
            <div className="">or</div>
            <div
              className="w-5 border border-secondary ms-2"
              style={{ width: "180px", height: "0px" }}
            ></div>
          </div>

          <Row className="p-0 m-0 mt-3 mb-4">
            <p className="p-0 m-0 fw-bold" style={{ fontSize: "1.2rem" }}>
              Sign up for free to start listening.
            </p>
          </Row>

          <Container style={{ width: "29rem", maxWidth: "100%" }}>
            <Form>
              <FormInput
                name="email"
                type="email"
                placeholder="Enter your email."
                label="What's your email?"
                value={formData.email}
                onChange={handleChange}
              />
              <FormInput
                name="password"
                type="password"
                placeholder="Create a password."
                label="Create a password"
                value={formData.password}
                onChange={handleChange}
              />
              <FormInput
                name="username"
                type="text"
                placeholder="Enter a profile name."
                label="What's should we call you?"
                value={formData.username}
                onChange={handleChange}
              />

              <FormGroup>
                <Label className="fw-semibold mt-3">What's your gender?</Label>
                <br />
                <div className="d-flex ">
                  <FormRadio value="male" />
                  <FormRadio value="female" />
                  <FormRadio value="non-binary" />
                  <FormRadio value="other" />
                </div>

                <div className="d-flex justify-content-center">
                  <Button
                    onClick={handleSignUp}
                    className="rounded-5 mt-5 mb-3 btn-grow text-black py-3 px-5"
                  >
                    <span className="fw-semibold">Sign Up</span>
                  </Button>
                </div>
                <FormGroup check>
                  <Input
                    id="agree-terms"
                    name="agree-terms"
                    type="checkbox"
                    className="text-white bg-black border-secondary login-social-button"
                  />
                  <Label check for="other">
                    I agree to the{" "}
                    <span>
                      <a href="" style={{ color: "#1ed661 " }}>
                        Spotify Terms and Conditions of Use
                      </a>
                    </span>{" "}
                    and&nbsp;
                    <span>
                      <a href="" style={{ color: "#1ed661 " }}>
                        Privacy Policy.
                      </a>
                    </span>
                  </Label>
                </FormGroup>
              </FormGroup>
            </Form>

            <span className="d-flex justify-content-center text-secondary mb-5">
              Have an account?&nbsp;
              <Link to="/login" className="text-light fw-semibold">
                Log in.
              </Link>
            </span>
          </Container>
        </Col>
      </Container>
    </>
  );
};

export default SignUpPage;
