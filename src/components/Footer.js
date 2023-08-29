import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Made  by  Bilal Ahmad</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} BA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* <li className="social-icons">
              <a
                href="https://github.com/sahil-khan-s"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li> */}
            <li className="social-icons">
                <a
                style={{textDecoration:"none" ,color: "white"  }}
                href="bilalahmadmadakhail@gmail.com"
                  target="_blank"
                  rel=" noopener noreferrer"
                  className=""
                >
                 <span style={{fontSize:"16px" , fontWeight:"700", }} className=" ">G </span>
                </a>
              </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/bilal-ahmad-3815a8250"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
           
          
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
