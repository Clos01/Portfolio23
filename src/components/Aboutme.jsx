import React from "react";
import "../App.css"

export const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-content">
        <div className="aboutme-text">
          <h1>About me</h1>
          <p>
            Greetings! I am a highly motivated software developer who
            possesses a passion for collaborative work that results in
            innovative solutions. My eagerness to learn and tackle new
            challenges is matched only by my appreciation for constructive
            feedback that helps me grow and develop my skills.
          </p>
          <p>
            I am well-versed in computer science as applied to JavaScript,
            including knowledge of algorithms such as searches, sorts,
            efficiency Additionally,
            I have gained experience working with NoSql databases,
            Progressive Web Applications (PWAs), MERN stack development,
            state management, and Express.js. I am committed to expanding
            my knowledge in object-oriented programming and SQL and other
            areas beyond my current skillset. Thank you for your
            consideration.
          </p>
          <div className="skills-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="Skill" />
            <img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="Skill" />
            <img src="https://cdn-icons-png.flaticon.com/512/2772/2772128.png" alt="Skill" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Skill" />
            <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Skill" />
            <img src="https://t4.ftcdn.net/jpg/00/90/67/37/240_F_90673721_nTq4hQ0UG1RxQ1niYwMnhzp05fsdkZyN.jpg" alt="Skill" />
          </div>
        </div>
      </div>
    </div>
  );
};
