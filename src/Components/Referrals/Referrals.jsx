import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
// import Table from "react-bootstrap/Table";
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
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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
      <div style={{ minHeight: "85vh" }}>
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
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer className="scroller-table">
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ background: "#f1f1f1" }}>S.NO</TableCell>
                      <TableCell sx={{ background: "#f1f1f1" }}>
                        First Name
                      </TableCell>
                      <TableCell sx={{ background: "#f1f1f1" }}>
                        Last Name
                      </TableCell>
                      <TableCell sx={{ background: "#f1f1f1" }}>
                        Email ID
                      </TableCell>
                      <TableCell sx={{ background: "#f1f1f1" }}>
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {candidates.length > 0 &&
                      candidates.map((candidate, index) => {
                        return (
                          <TableRow
                            key={index}
                            hover
                            sx={{ background: "#ffffff" }}
                          >
                            <TableCell>{index}</TableCell>
                            <TableCell>{candidate.firstName}</TableCell>
                            <TableCell>{candidate.lastName}</TableCell>
                            <TableCell>{candidate.emailId}</TableCell>
                            <TableCell>{candidate.status}</TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Col>
          <Col md={5} xs={12} lg={4}>
            <MDBCard border="10px solid red">
              <Row
                style={{
                  width: "100%",
                  // marginBottom: "10px",
                  textAlign: "center",
                  background: "#f1f1f1",
                  margin: "auto",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h5 className="m-0 p-0">Referral Bonus Details </h5>
              </Row>
              <div className="p-4">
                <Row>
                  <Col md={9} sm={9} xs={8}>
                    Number of Consultants Referred
                  </Col>
                  <Col>
                    {bonusDetails.length > 0 && bonusDetails[0].creditValue}
                  </Col>
                </Row>
                <Row>
                  <Col md={9} sm={9} xs={8}>
                    Referral Credits
                  </Col>
                  <Col>
                    {bonusDetails.length > 0 && bonusDetails[2].creditValue}
                  </Col>
                </Row>
                <Row>
                  <Col md={9} sm={9} xs={8}>
                    Interview Credits
                  </Col>
                  <Col>
                    {bonusDetails.length > 0 && bonusDetails[3].creditValue}
                  </Col>
                </Row>
                <Row>
                  <Col md={9} sm={9} xs={8}>
                    Credits Paid
                  </Col>
                  <Col>
                    {bonusDetails.length > 0 && bonusDetails[1].creditValue}
                  </Col>
                </Row>
              </div>
            </MDBCard>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
