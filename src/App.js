import "./App.css";
import {
  BrowserRouter,
  Routes,
  useNavigate,
  Navigate,
  Route,
} from "react-router-dom";

import Home from "./Components/Home/Home";
import Invite from "./Components/Invite/Invite";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout";
import { useState, useEffect } from "react";
import Referrals from "./Components/Referrals/Referrals";
import ProtectedRoute from "./Components/GuardedRouter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Typography } from "@mui/material";
import { Button } from "react-bootstrap";

function App() {
  // return (
  //   <div className="App">
  //     <Login />
  //   </div>
  // );
  const [userLoggedin, setUserLoggedin] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  const [display, setDisplay] = useState("");
  const [displayContent, setDisplayContent] = useState();
  const [userEmail, setUserEmail] = useState(
    localStorage.getItem("userEmail") || ""
  );
  const [OTP, setOTP] = useState();
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState(null);
  //const [userLoggedin, setUserLoggedin] = useState(false);
  const [candidateId, setCandidateId] = useState(
    localStorage.getItem("userId") || ""
  );
  const [loginDisable, setloginDisable] = useState(true);
  const [logOutModal, setlogOutModal] = useState(false);
  const [errorStatus, seterrorStatus] = useState(false);
  const [successStatus, setsuccessStatus] = useState(false);
  function requestOTP() {
    fetch("https://www.contingentpro.com/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userEmail,
      }),
    })
      .then((res) => {
        if (res.status == 422) {
          seterrorStatus(true);
          setsuccessStatus(false);
          // toast.error("This Email ID doesn't exists in our system");
          console.log(res);
        } else {
          setloginDisable(false);
          seterrorStatus(false);
          setsuccessStatus(true);
          // toast.success("OTP Sent Successfully");
          console.log(res);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function login() {
    // history("/home");
    await fetch("https://www.contingentpro.com/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, otp: OTP }),
    })
      .then((resp) => resp.json())
      .then((res) => {
        //var x = res;

        if (res.candidateId) {
          setCandidateId(res.candidateId);
          localStorage.setItem("userId", res.candidateId);
          setUserLoggedin(true);
          navigate("/home");
          setAlertMessage("Login successful!");
        }
      })
      .catch((error) => console.error(error));
  }

  const handleLogout = () => {
    // alert("You are currently logging out");
    setlogOutModal(true);
  };
  const handleLogoutConform = () => {
    setUserLoggedin(false);
    setLoggedOut(true);
    setUserEmail("");
    setOTP("");
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    setlogOutModal(false);
    navigate("/");
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              errorStatus={errorStatus}
              successStatus={successStatus}
              setUserEmail={setUserEmail}
              setOTP={setOTP}
              OTP={OTP}
              requestOTP={requestOTP}
              login={login}
              loginDisable={loginDisable}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <ProtectedRoute user={userLoggedin}>
              <Home
                handleLogoutConform={handleLogoutConform}
                setlogOutModal={setlogOutModal}
                logOutModal={logOutModal}
                userEmail={userEmail}
                candidateId={candidateId}
                handleLogout={handleLogout}
              />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/invite"
          element={
            <ProtectedRoute user={userLoggedin}>
              <Invite
                handleLogoutConform={handleLogoutConform}
                setlogOutModal={setlogOutModal}
                logOutModal={logOutModal}
                userEmail={userEmail}
                candidateId={candidateId}
                handleLogout={handleLogout}
              />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/referrals"
          element={
            <ProtectedRoute user={userLoggedin}>
              <Referrals
                handleLogoutConform={handleLogoutConform}
                setlogOutModal={setlogOutModal}
                logOutModal={logOutModal}
                emailId={userEmail}
                candidateId={candidateId}
                handleLogout={handleLogout}
              />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/logout"
          element={
            <ProtectedRoute user={loggedOut}>
              <Logout />
            </ProtectedRoute>
          }
        />
        {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
