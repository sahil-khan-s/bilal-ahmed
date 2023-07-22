import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import frow from "../../Assets/Projects/frow.png";
import project1 from "../../Assets/Projects/project1.jpeg";
import project2 from "../../Assets/Projects/project2.jpeg";
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
              imgPath={project2}
              isBlog={false}
              title="POWERS"
              description="Serving San Diego For Over 100 Years
              Since 1914, Powers Plumbing has been on a mission to provide exceptional high quality plumbing services for the San Diego communities we serve. We are deeply connected to our historic Mission Hills community and are proud to serve multiple generations of families throughout San Diego"
              ghLink="https://github.com/sahil-khan-s/powers.git"
              demoLink="https://powers.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="HAIR_SALON"
              description="SAN DIEGO HAIR SALON
              Wild Honey Salons in Bankers Hill, San Diego CA (formerly Fox and Jane) is the premier salon for beautiful haircuts, hair color, balayage, highlights, hair painting, color correction, scissor/razor cuts, and blowouts. Our stylists make this the most requested hair salon in the Bankers Hill and Hillcrest area.
             "
              ghLink="https://github.com/sahil-khan-s/powers.git"
              demoLink="https://powers.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              style={{ padding: "30px" }}
              imgPath={stellarstack}
              isBlog={false}
              title="STELLARSTACK"
              description="StellarStack is a 
               IT and Marketing Industry.
               Enables clients to manage digital
              identity by providing them eminent services
              Since 2018, and has been helping organizations
              worldwide get reliable websites without any fuss. Businesses, Software firms, Design Studios and Countless customers have
              experienced  StellarStack can help "
              demoLink="https://www.stellarstack.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={growthware}
              isBlog={false}
              title="GROWTHWARE"
              description="The Growthware platform provides all essential tools to build a powerful funnel that will drive leads to being loyal customers. It focuses on 'growth', to quickly identify and address areas where more business can be gained and it allows you to stay ahead of competitors while transforming prospects into repeat buyers..
              Innovating for Small Business"
              demoLink="https://growthware.com/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pureh2o}
              isBlog={false}
              title="FYP PURE H2O"
              description="In the culmination of my BS in Computer Science, we spearheaded the creation of an innovative B2B E-commerce platform. Our solution provided water product companies with a dynamic stage to showcase and sell their offerings, forging seamless interactions between sellers and buyers. The project delved into marketplace dynamics, seller onboarding, product catalog management, and the buyer experience, aiming to unlock opportunities and overcome challenges in the water industry."
              ghLink=""
              demoLink="https://pure-h2o.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frow}
              isBlog={false}
              title="Frow"
              description="Frow.live is a dynamic and innovative website that fosters creative expression and connection. Embracing a community-driven approach, Frow.live serves as a virtual canvas where users can share their artistic talents in real-time with others worldwide. Engage in collaborative art projects,, and immerse yourself in a vibrant space ."
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
