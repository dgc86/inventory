import React from "react";
import ResumedImage from "./Resumed.png";
import { Link } from "react-router-dom"
import {IoIosHome} from 'react-icons/io';

const Resume = () => {
  return (
    <div >
        <p style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: '20px', fontSize: '40px', color: 'teal', filter: 'brightness(70%)', fontFamily: 'Courier New'}}>Resume</p>
    <div  style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: '20px'}}>
      <img src={ResumedImage} alt="Image Description" width="750px" height="1050px" className = 'border border-2 border-dark' />
    </div>
    <Link to="/"  style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: '200px', marginBottom: '10px', fontSize: '40px', color: 'teal', filter: 'brightness(70%)'}}><IoIosHome/></Link>
    </div>
  );
};

export default Resume;
