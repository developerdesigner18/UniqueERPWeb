import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCard,
} from "mdb-react-ui-kit";
import NavigationBar from "../Navbar";
import Footer from "../Footer";

export default function Referrals({
  emailId: emailId,
  candidateId: candidateId,
  handleLogout,
  setlogOutModal,
  logOutModal,
  handleLogoutConform,
}) {
  const [candidates, setCandidates] = useState([]);
  const [bonusDetails, setBonusDetails] = useState([]);
  async function getCandidates() {
    await fetch("https://www.contingentpro.com/referralDetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailId, //"uniquecand4@gmail.com" emailId
        candidateId: candidateId, //"UN_11_CAND"  candidateId
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCandidates(data.referredCandidateDetails);
        setBonusDetails(data.referredBonusDetails);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getCandidates();
  }, [emailId, candidateId]);

  /*useEffect(() => {
    getBonusDetails();
  }, []);*/

  return (
    <div>
      <NavigationBar
        userEmail={emailId}
        candidateId={candidateId}
        handleLogout={handleLogout}
        setlogOutModal={setlogOutModal}
        logOutModal={logOutModal}
        handleLogoutConform={handleLogoutConform}
      />
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          border: "20px dark",
          padding: "15px",
        }}
      >
        <h4>Referred Candidates Details:</h4>
      </div>
      <Row style={{ width: "90%", margin: "0 auto" }}>
        <Col md={7} xs={12} lg={8}>
          <div className="scroller-table shadow-4">
            <MDBTable responsive lg={true} borderlessX hover>
              <MDBTableHead
                light
                style={{ color: "#3b71ca" }}
                className="sticky"
                sticky={true}
              >
                <tr>
                  <th>S.NO</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email ID</th>
                  <th>Status</th>
                </tr>
              </MDBTableHead>

              <MDBTableBody>
                {candidates.length > 0 &&
                  candidates.map((candidate, index) => {
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{candidate.firstName}</td>
                        <td>{candidate.lastName}</td>
                        <td>{candidate.emailId}</td>
                        <td>{candidate.status}</td>
                      </tr>
                    );
                  })}
              </MDBTableBody>
            </MDBTable>
          </div>
        </Col>
        <Col md={5} xs={12} lg={4}>
          <MDBCard border="10px solid red" className="p-4">
            <Row
              style={{
                width: "100%",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              <h5>Referral Bonus Details </h5>
            </Row>
            <Row>
              <Col md={9} sm={9} xs={8}>
                Number of Consultants Referred
              </Col>
              <Col>
                :{bonusDetails.length > 0 && bonusDetails[0].creditValue}
              </Col>
            </Row>
            <Row>
              <Col md={9} sm={9} xs={8}>
                Referral Credits
              </Col>
              <Col>
                :{bonusDetails.length > 0 && bonusDetails[2].creditValue}
              </Col>
            </Row>
            <Row>
              <Col md={9} sm={9} xs={8}>
                Interview Credits
              </Col>
              <Col>
                {" "}
                :{bonusDetails.length > 0 && bonusDetails[3].creditValue}
              </Col>
            </Row>
            <Row>
              <Col md={9} sm={9} xs={8}>
                Credits Paid
              </Col>
              <Col>
                :{bonusDetails.length > 0 && bonusDetails[1].creditValue}
              </Col>
            </Row>
          </MDBCard>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
