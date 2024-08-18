"use client"
import React, { useState } from 'react';

const About = () => {
  const [activeItem, setActiveItem] = useState("myskills");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div id="about" className="d-flex justify-content-center align-items-center bg-one" style={{ minHeight: "100vh", padding: "0 1rem" }}>
      <div className="text-center" style={{ width: "100%" }}>
        <div className="d-flex justify-content-center mb-4">
          <div className="d-flex justify-content-center" style={{ width: "400px" }}>
            <button
              className={`bg-nav rounded p-2 border border-none mx-2 ${activeItem === "myskills" ? "bg-active" : ""}`}
              onClick={() => handleItemClick("myskills")}
            >
              My Skills
            </button>
            <button
              className={`bg-nav rounded p-2 border border-none mx-2 ${activeItem === "experiences" ? "bg-active" : ""}`}
              onClick={() => handleItemClick("experiences")}
            >
              Experiences
            </button>
            <button
              className={`bg-nav rounded p-2 border border-none mx-2 ${activeItem === "aboutme" ? "bg-active" : ""}`}
              onClick={() => handleItemClick("aboutme")}
            >
              About Me
            </button>
          </div>
        </div>

        {activeItem === "myskills" && (
          <div className="py-3 px-4 rounded text-left" style={{ display: "inline-block", padding: "1rem 2rem", borderRadius: "10px" }}>
            <h3 className="mb-4"><ins>My Skills</ins></h3>
            <ul>
              <li>
                <div className="d-flex flex-row">
                  <p className="mb-3">HTML, &nbsp;</p>
                  <p className="mb-3">CSS, &nbsp;</p>
                  <p className="mb-3">JAVASCRIPT,&nbsp;</p>
                  <p className="mb-3">PHP.</p>
                </div>
              </li>
              <li>
                <div className="d-flex flex-row">
                  <p className="mb-3">React.js, &nbsp;</p>
                  <p className="mb-3">Node.js, &nbsp;</p>
                  <p className="mb-3">Angular.js.</p>
                </div>
              </li>
              <li>
                <div className="d-flex flex-row">
                  <p className="mb-3">Java, &nbsp;</p>
                  <p className="mb-3">Spring, &nbsp;</p>
                  <p className="mb-3">Springboot.</p>
                </div>
              </li>
              <li>
                <div className="d-flex flex-row">
                  <p className="mb-3">Android, &nbsp;</p>
                  <p className="mb-3">Python, &nbsp;</p>
                  <p className="mb-3">Django. &nbsp;</p>
                </div>
              </li>
            </ul>
          </div>
        )}

        {activeItem === "experiences" && (
          <div className="py-3 px-4 rounded text-left" style={{ display: "inline-block", padding: "1rem 2rem", borderRadius: "10px" }}>
            <h3 className="mb-4"><ins>My Experiences</ins></h3>
            <p className="mb-3">I am currently a fresher in my field but I have made two production projects, they are as follows:</p>
            <ul>
              <li className="mb-3">
                <a href="https://www.tahfeezmumbai.com/" className="link">www.tahfeezmumbai.com</a>
                (made using PHP)
              </li>
              <li>
                <a href="https://www.qutbitutorials.in/" className="link">www.qutbitutorials.in</a>
                (made using React.js)
              </li>
            </ul>
          </div>
        )}

        {activeItem === "aboutme" && (
          <div className="py-3 px-4 rounded text-left" style={{ display: "inline-block", padding: "1rem 2rem", borderRadius: "10px" }}>
            <h3 className="mb-4"><ins>About Me</ins></h3>
            <p className="mb-3"><ins>My qualifications:</ins></p>
            <ul>
              <li className="mb-3">Bachelors Of Commerce (Graduated from Burhani College Of Arts And Commerce)</li>
              <li className="mb-3">Aptech Certified Computer Professional Diploma course (currently pursuing from Aptech Institute.)</li>
              <li className="mb-3">Msc in Computer Applications (Currently pursuing from Symbiosis School Of Distance Learning)</li>
            </ul>
            <p className="mb-3"><ins>My Hobbies:</ins></p>
            <ul>
              <li className="mb-3">Reading.</li>
              <li className="mb-3">I love computer.</li>
              <li className="mb-3">Vocalising and playing piano.</li>
              <li className="mb-3">Cricket, Chess and Swimming.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
