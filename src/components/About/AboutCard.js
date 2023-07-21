import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad ismaeel </span>
            from <span className="purple"> Haripur kpk , Pakistan</span>
            <br /> I have done my bachler's Degree in Computer Science(CS) from  <a className="purple" href="https://aust.edu.pk/" target="_blank" rel="noopener noreferrer"> AUST .</a>
            <br />
           i have completed a 3-month internship and subsequently being hired as a Frontend Developer, <br /> <br />I have acquired 1+ year of valuable experience in frontend development. <br />My proficiency in crafting pixel-perfect and fully responsive frontend designs using technologies such as React, Next.js, and Typescript sets me apart as a capable and driven professional.
            <br /> <br />
            I possess in-depth knowledge of popular design libraries like Ant Design , MUI, CSS , Tailwind and Bootstrap etc allowing me to deliver intuitive and visually appealing user interfaces. Alongside my technical skills, I am well-versed in utilizing GitHub for version control, enabling smooth collaboration with team members to achieve common objectives
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Poetry
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "With a keyboard as my brush and a screen as my canvas, I paint a better tomorrow."
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
