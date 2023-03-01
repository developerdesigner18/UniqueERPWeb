import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBNavLink,
  MDBFooter,
  MDBListGroup,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";
import { Divider, Menu, MenuItem, Typography } from "@mui/material";
import { Button, Modal } from "react-bootstrap";

export default function NavigationBar({
  userEmail,
  candidateId,
  handleLogout,
  setlogOutModal,
  logOutModal,
  handleLogoutConform,
}) {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navBarHome">
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img
              src={require("./file.png")}
              height="30"
              alt=""
              loading="lazy"
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav
              style={{
                justifyContent: "space-between",
                width: "90%",
              }}
            >
              <MDBNavbarNav>
                <MDBNavbarItem>
                  <MDBNavbarLink>
                    <Link to="/home">Home</Link>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink>
                    <Link to="/referrals"> Referrals</Link>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink>
                    <Link to="/invite">Invite</Link>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
              <div>
                <MDBNavbarItem>
                  <MDBNavbarLink onClick={handleClick}>
                    <Link>Profile</Link>
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  // anchorOrigin={{
                  //   vertical: "top",
                  //   horizontal: "left",
                  // }}
                  // transformOrigin={{
                  //   vertical: "top",
                  //   horizontal: "left",
                  // }}
                >
                  <MenuItem onClick={handleClose}>Email : {userEmail}</MenuItem>
                  <MenuItem onClick={handleClose}>
                    CandidateId : {candidateId}
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={() => {
                      handleLogout();
                      setAnchorEl(null);
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {/* <MDBRow style={{ textAlign: "left" }}>
        <MDBCol size="md"></MDBCol>
        <MDBCol size="sm">
          <h5>Email-Id:{userEmail}</h5>
        </MDBCol>
        <MDBCol size="sm">
          <h5>CandidateId:{candidateId}</h5>
        </MDBCol>
      </MDBRow> */}

      <Modal show={logOutModal} onHide={() => setlogOutModal(false)}>
        <div className="p-4">
          <h3 className="mb-3">Do you want to logout?</h3>
          <Button
            className="m-3"
            variant="secondary"
            onClick={() => setlogOutModal(false)}
          >
            No
          </Button>
          <Button className="m-3" onClick={handleLogoutConform}>
            Yes
          </Button>
        </div>
      </Modal>
    </div>
  );
}
