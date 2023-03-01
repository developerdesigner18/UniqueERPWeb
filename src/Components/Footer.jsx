import { MDBFooter } from "mdb-react-ui-kit";
import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        padding: "10px",
        boxShadow: "0px -3px 15px -10px rgba(0,0,0,0.75)",
        marginTop: "20px",
        backgroundColor: "#FBFBFB",
      }}
      className="text-center"
    >
      <h3 className="footer-titile">
        If you have any questions, please visit our
        <a href="https://contingentpros.com/faqs">FAQ</a>
      </h3>
    </div>
  );
}
