import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Home from "../Home/Home";
import Invite from "../Invite/Invite";
import Referrals from "../Referrals/Referrals";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export default function Login({
  setUserEmail,
  setOTP,
  userEmail,
  OTP,
  requestOTP,
  login,
  loginDisable,
  successStatus,
  errorStatus,
}) {
  const [display, setDisplay] = useState("");
  const [displayContent, setDisplayContent] = useState();

  function changeUserEmail(event) {
    localStorage.setItem("userEmail", event.target.value);
    setUserEmail(event.target.value);
  }
  function changeOTP(event) {
    setOTP(event.target.value);
  }

  function changeDisplay(display) {
    setDisplay(display);
  }

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <MDBRow
        center
        className="d-flex justify-content-space-around align-items-center h-100"
      >
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <div className="text-center">
                <img
                  src={require("./file.png")}
                  style={{ width: "185px" }}
                  alt="My Business Image"
                />
                <h4
                  style={{ color: "rgb(65 120 201)" }}
                  className="mt-1 mb-5 pb-1"
                >
                  Referral Application
                </h4>
              </div>

              <MDBInput
                label="Enter registered email"
                wrapperClass="mb-4 w-100"
                id="typeEmail"
                required
                value={userEmail}
                onChange={changeUserEmail}
                type="email"
              />

              <MDBBtn size="lg" onClick={() => requestOTP()}>
                Request OTP
              </MDBBtn>
              {errorStatus && (
                <p className="text-danger mt-3">
                  This Email ID doesn't exists in our system
                </p>
              )}
              {successStatus && (
                <p className="text-success mt-3">OTP Sent Successfully</p>
              )}
              {!successStatus && !errorStatus ? <br /> : null}
              <MDBInput
                label="Enter received otp"
                wrapperClass="mb-4 w-100"
                id="enterOtp"
                required
                value={OTP}
                onChange={changeOTP}
                type="number"
                disabled={loginDisable}
              />

              <MDBBtn size="lg" onClick={() => login()} disabled={loginDisable}>
                Login
              </MDBBtn>

              <p className="text-white-50 mb-3"></p>
              <p className="text-white-50 mb-3"></p>

              <p className="mb-5 pb-lg-2">
                Don't have an account?{" "}
                <a
                  href="https://careers.contingentpros.com/candidateportal"
                  style={{ color: "rgb(65 120 201)" }}
                >
                  Register on our Candidate Portal
                </a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
