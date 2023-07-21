import React from "react";


function Top() {
    return(
        <div id = "cont" className = "h-100 d-flex align-items-center justify-content-center position-relative" >
        <div className =" vertical-center">
            <div>
            <h1 style = {{fontSize:"30px", fontWeight:"bold"}} className = "h-100 d-flex align-items-center justify-content-center">Hello!</h1>
            </div>
            <div className = "h-100 d-flex align-items-center justify-content-center">
            <h1 style = {{fontSize:"85px", fontWeight: "bold"}}>
                  I'm <span style={{color:"teal",filter: "brightness(75%)" }}>
                  Dhruv</span>
            </h1>
            </div>
            
            <div className = "h-100 d-flex align-items-center justify-content-center">
                <h1 className = "h-100 d-flex align-items-center justify-content-center" style = {{fontSize:"40px", fontWeight:"bold"}}>
                An Undergraduate Student
             </h1>
            </div>
            
            <div className = "h-100 d-flex align-items-center justify-content-center ">
                    <p className='py-3 text-[#ecf0f3] dark:text-[#012033]'>I'm Currently a Sophmore at Rutgers University-New Brunswick with 
                     a passion</p>
            </div>
                    <p> for all fields related to the <span style={{color:"teal",filter: "brightness(75%)",fontWeight:"bold"}} >Computer</span>  <span style =
                     {{color:"teal",filter: "brightness(75%)",fontWeight:"bold"}}>Science</span> major. Thank You for visitng my Personal site! </p>
        </div>
        </div>
   
    )

}

export default Top;