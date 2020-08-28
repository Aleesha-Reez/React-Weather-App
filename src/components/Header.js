import React from "react";
import Logo from "../images/favicon.png";
import { Row, Col } from "reactstrap";

export default function Header() {
  return (
    <Row className="header py-4 px-3 fixed">
      <Col md={1} sm={2} xs={3}>
        <img src={Logo} alt="Logo" className="headerLogo" />
      </Col>
    </Row>
  );
}
