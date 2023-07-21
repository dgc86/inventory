import React from 'react';
import Resumes from "./Resumes";
import { Link } from "react-router-dom"

function About() {
  return (
   
    <div id="aboutid">
      
      <div>
        <a
          id="aboutId"
          style={{
            paddingLeft: '100px',
            fontFamily: 'Courier New',
            fontSize: '30px',
            color: 'Teal',
            filter: 'brightness(70%)',
          }}
        >
          About Me
        </a>
      </div>
      <a
        id="aboutIds"
        style={{
          paddingLeft: '330px',
          fontFamily: 'Arial',
          fontSize: '30px',
          color: 'black',
          filter: 'brightness(70%)',
          fontWeight: 'bold',
          marginTop: '20px',
        }}
      >
        Who I am
      </a>
      
      <div id="aboutFieldOutside">
        <div className="container">
          <div>
            <div
              className="col-6 rounded-end rounded-3 border border-2 border-dark "
              id="aboutField"
              style={{
                font: '18px',
                transition: 'transform 0.4s',
                transformOrigin: 'center',
                transform: 'scale(1)',
                marginTop: '20px',
              }}
              onMouseEnter={() => {
                const aboutField = document.getElementById('aboutField');
                aboutField.style.transform = 'scale(1.05)';
                aboutField.style.boxShadow = '0px 5px 10px 5px rgba(0, 0, 0, 0.5)';
                aboutField.style.backgroundColor = 'white';
                
              }}
              onMouseLeave={() => {
                const aboutField = document.getElementById('aboutField');
                aboutField.style.transform = 'scale(1)';
                aboutField.style.boxShadow = '';
                aboutField.style.backgroundColor = '#F5F5F5';
              }}
            >
              <p className="custom-paragraph">
                Welcome to my personal website! I'm a passionate computer science major with a deep interest in artificial
                intelligence, programming, and the finance industry. Since my sophomore year of high school, I've been
                coding minor projects, constantly exploring the power of software development. The world of AI captivates
                me, and I love delving into the latest advancements in machine learning and neural networks. Additionally,
                I'm fascinated by the intersection of technology and finance, seeking to leverage innovative tools to
                revolutionize the industry. Currently, I'm excited to be part of RU Hack R&D, contributing to the
                organization of the upcoming RU Hackathons. Join me on this exhilarating journey of exploration,
                innovation, and collaboration!
              </p>
              <div style={{ paddingBottom: '30px', textAlign: 'center' }}>
                <Link id="res" className="container" to="/Resumes" style={{ color: 'turquoise', filter: 'brightness(40%)' }}>
                  Here is My Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <p
        id="hobbyTag"
        style={{
          fontFamily: 'Arial',
          fontSize: '30px',
          color: 'black',
          fontWeight: 'bold',
          paddingLeft: '350px',
          marginTop: '30px',
        }}
      >
        Hobby
      </p>
      
      <div id="hobbyFieldOutside">
        <div className="container">
          <div>
            <div
              className="col-6 rounded-end rounded-3 border border-2 border-dark "
              id="hobbyField"
              style={{
                font: '18px',
                transition: 'transform 0.4s',
                transformOrigin: 'center',
                transform: 'scale(1)',
                marginTop: '20px',
              }}
              onMouseEnter={() => {
                const aboutField = document.getElementById('hobbyField');
                aboutField.style.transform = 'scale(1.05)';
                aboutField.style.boxShadow = '0px 5px 10px 0px rgba(0, 0, 0, 0.5)';
                aboutField.style.backgroundColor = 'white';
              }}
              onMouseLeave={() => {
                const aboutField = document.getElementById('hobbyField');
                aboutField.style.transform = 'scale(1)';
                aboutField.style.boxShadow = '';
                aboutField.style.backgroundColor = '#F5F5F5';
              }}
            >
              <p className="custom-paragraph">
                - Running: I enjoy staying active and challenging myself physically, exploring new paths and pushing my limits.<br />
                - Badminton: I thrive in the fast-paced nature of the sport, finding joy in the strategic gameplay and honing my skills.<br />
                - Stock Analysis/Investing: I have a fascination for analyzing stocks and seeking investment opportunities to fuel growth and financial success.<br />
                - Reading Articles: I love delving into thought-provoking articles, constantly seeking new insights and expanding my knowledge across a wide range of topics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

