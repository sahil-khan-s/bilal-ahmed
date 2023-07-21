import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import frow from "../../Assets/Projects/frow.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import stellarstack from "../../Assets/Projects/stellarstack.jpeg";
import growthware from "../../Assets/Projects/growthware.png";
import pureh2o from "../../Assets/Projects/pureh2o.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
            style={{padding:"30px"}}
              imgPath={stellarstack}
              isBlog={false}
              title="StellarStack"
              description="StellarStack is a growing leader in.
              the IT and Marketing Industry.
              StellarStack enables clients to manage digital
identity by providing them eminent services
Since 2018, StellarStack has been helping organizations
worldwide get reliable websites without any fuss."
              ghLink=""
              demoLink="https://www.stellarstack.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={growthware}
              isBlog={false}
              title="growthware"
              description="The Growthware platform provides all essential tools to build a powerful funnel that will drive leads to being loyal customers. It focuses on 'growth', to quickly identify and address areas where more business can be gained and it allows you to stay ahead of competitors while transforming prospects into repeat buyers..
              Innovating for Small Business"
              ghLink=""
              demoLink="https://growthware.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pureh2o}
              isBlog={false}
              title="FYP Pure H2O"
              description="In the culmination of my BS in Computer Science, I spearheaded the creation of an innovative B2B E-commerce platform. Our solution provided water product companies with a dynamic stage to showcase and sell their offerings, forging seamless interactions between sellers and buyers. The project delved into marketplace dynamics, seller onboarding, product catalog management, and the buyer experience, aiming to unlock opportunities and overcome challenges in the water industry."
              ghLink=""
              demoLink=""
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frow}
              isBlog={false}
              title="Frow"
              description="Frow.live is a dynamic and innovative website that fosters creative expression and connection. Embracing a community-driven approach, Frow.live serves as a virtual canvas where users can share their artistic talents in real-time with others worldwide. Engage in collaborative art projects, showcase your skills, and immerse yourself in a vibrant space where imagination knows no bounds. Join Frow.live today to unleash your creativity and be part of a global community celebrating the power of art."
              ghLink=""
              demoLink="https://frow.live/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
