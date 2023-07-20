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
          <h3>Made with ❤️ by Muhammad Ismaeel</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MI</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/sahil-khan-s"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
                <a
                style={{textDecoration:"none" ,color: "white"  }}
                href="mailto:muhammad.ismaeel5162@gmail.com"
                  target="_blank"
                  rel=" noopener noreferrer"
                  className=""
                >
                 <span style={{fontSize:"16px" , fontWeight:"700", }} className=" ">G </span>
                </a>
              </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/muhammad-ismaeel-461355251"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ism_ail_449"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
                <a
                 style={{ color: "white" }}
                  href="https://www.facebook.com/xtylish.awanxada.7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillFacebook />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
