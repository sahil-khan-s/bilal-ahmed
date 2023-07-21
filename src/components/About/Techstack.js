import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiHtml5,
  DiSass,
  DiGithubBadge,
  DiBootstrap,
  DiResponsive,
} from "react-icons/di";
import {
  SiTailwindcss,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="">JS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="">TS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="">Next</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="">CSS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="">AntD</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span className="">MUI</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiResponsive />
      </Col>
    </Row>
  );
}

export default Techstack;
