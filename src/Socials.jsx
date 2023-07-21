import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FiMail} from "react-icons/fi"
import {motion} from 'framer-motion';
import  {Button} from 'reactstrap';
import "./App.css";


function Socials() {
    const linkedinClicked= () =>{
        window.open("https://www.linkedin.com/in/dhruv-chaudhari-307183241/"); 
        console.log("clicked Linkedin!"); 
       }
    const githubClicked= () =>{
        window.open("https://github.com/dchaudhari0811");  
        console.log("clicked github!"); 
       }
    const instaClicked= () =>{
        window.open("https://www.instagram.com/dchaudhari11/?hl=en");  
        console.log("clicked Insta!"); 
    }
    const mailClicked= () =>{
        window.open("mailto:dchaudhari2003@gmail.com");  
        console.log("clicked mail"); 
    }

    return (
        <div className = "Container">  
        <div className = "position-sticky">
            <div className = "row mt-3">
            <div className = "col-6">
                
                <Button id = "lButton"  data-toggle="popover" data-trigger="focus"
                onClick = {linkedinClicked}><FaLinkedin size = "30px" color = "black"/></Button>         
                
                <Button id = "gButton" 
                onClick = {githubClicked}>< FaGithub size = "30px" color = "black"/> </Button>     
            
                <Button id = "iButton"  
                onClick = {instaClicked}>< FaInstagram size = "30px" color = "black"/> </Button>      
                
                <Button id = "mButton" 
                onClick = {mailClicked}>< FiMail size = "30px" color = "black"/></Button> 
                
            </div>
            </div>
        </div>
        </div>
    );
}

export default Socials;