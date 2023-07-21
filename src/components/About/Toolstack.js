import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
} from "react-icons/si";
import {
  DiWindows,
  
} from "react-icons/di";
import {
  AiOutlineChrome,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillLinkedin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineChrome />
      </Col>
    </Row>
  );
}

export default Toolstack;
