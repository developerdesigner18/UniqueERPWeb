import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardGroup,
  MDBCardText,
  MDBListGroup,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import NavigationBar from "../Navbar";

export default function Home({
  userEmail,
  candidateId,
  handleLogout,
  setlogOutModal,
  logOutModal,
  handleLogoutConform,
}) {
  return (
    <React.Fragment>
      <NavigationBar
        userEmail={userEmail}
        candidateId={candidateId}
        handleLogout={handleLogout}
        setlogOutModal={setlogOutModal}
        logOutModal={logOutModal}
        handleLogoutConform={handleLogoutConform}
      />
      <MDBListGroup
        style={{ width: "70%", margin: "0 auto" }}
        className="homemdlistgroup"
      >
        <MDBCard
          style={{ zIndex: 1 }}
          border="10px solid red"
          className="mx-auto w-100 mb-3"
        >
          <MDBRow className="d-flex justify-content-center align-items-center g-0">
            <MDBCol md="4" className="square bg-primary rounded-pill">
              <MDBCardImage
                src={require("./Referral Program Picture.png")}
                alt="Refer your Friends"
                fluid
              />
            </MDBCol>
            <MDBCol md="8" className="square rounded-9">
              <MDBCardBody>
                <MDBCardTitle>
                  Refer Your Friends, Colleagues and Earn Continuously
                </MDBCardTitle>
                <MDBCardText>
                  You can invite your Friends and professional colleagues from
                  Invite tab to register on this platform. Once they register
                  they can access all opportunities on this platform and earn
                  better billing rates. You keep earning every hour your
                  referred candidate works through Unique ERP Inc. As long as
                  your profile is active and referred candidates working through
                  Unique ERP, you keep earning. We will make quarterly payments
                  based on the credits accumulated and payments received for
                  your referred candidates
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>

        <MDBCard
          style={{ zIndex: 2 }}
          border="10px solid red"
          className="mx-auto w-100 mb-3"
        >
          <MDBRow className="d-flex justify-content-center align-items-center g-0">
            <MDBCol md="8" className="square rounded-9">
              <MDBCardBody>
                <MDBCardTitle>Interview and Earn</MDBCardTitle>
                <MDBCardText>
                  The key to the success is to find the right candidate for the
                  given opportunity. Interview is the key step to achieve the
                  success. You have strong interviewing skills then Join our
                  interview panel and earn when the candidate you interviewed
                  gets selected to a project or the job opportunity. Your
                  account will be credited with credits based on job country for
                  every successful candidate onboarded to a project or a job. We
                  will make
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md="4">
              <MDBCardImage
                src={require("./Interview Picture.jpg")}
                alt="Interview and Earn"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCard>

        <MDBCard style={{ zIndex: 3 }}>
          <MDBRow className="d-flex justify-content-center align-items-center g-0">
            <MDBCol md="4">
              <MDBCardImage
                src={require("./Business Lead.jpg")}
                alt="My Business Image"
                fluid
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle>Generate Business Leads and Earn</MDBCardTitle>
                <MDBCardText>
                  You know a project or resourcing opportunities within your
                  network, You can bringing those opportunities to this platform
                  and earn income. You will earn continuous income for first
                  year on the revenue generated by you using your connections.
                  Why wait, Contact us to discuss further on the leads you have
                  and how you can benefit from these leads. Only the first one
                  who bring opportunity get’s the credits. We cannot have more
                  than one candidate referring the same opportunity. Drop us a
                  note at <a>candidate_leads@contingentpros.com </a>with the
                  details of the lead you have and we will connect with you.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBListGroup>
    </React.Fragment>
  );
}