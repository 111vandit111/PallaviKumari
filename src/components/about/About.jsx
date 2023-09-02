import React from "react";
import "./about.css";
import Image from "../../assets/avatar-1.png";
import CV from "./Pallavi-Resume.pdf"

const About = () => {
  return (
    <section className="about container section" id="about">
      {" "}
      <h2 className="section_title">About Me</h2>{" "}
      <div className="about_container grid">
        {" "}
        <img src={Image} alt="" className="about_img" width={"150px"}/>{" "}
        <div className="about_data grid">
          {" "}
          <div className="about_info">
            {" "}
            <p className="about_description">
            I am a communication designer, who has a good eye in
          observing things quickly, In my skills constraint , I would
            claim that I draw pretty well , I am focused about digging
           my creativity in animation, concept art and Graphic design.

            </p>{" "}
            <a href={CV} className="btn" download="Pallav-Resume">
              Download CV
            </a>{" "}
          </div>{" "}

          
          <div className="about_skills grid"> 
            <div className="skills_data">
             <div className="skills_titles">
              <h3 className="skills_name">Graphic Designing</h3>
               <span className="skills_number ">90%</span>
                </div> 
                <div className="skills_bar"> 
                <span className="skills_percentage development"></span> 
                </div> 
              </div> 
              <div className="skills_data">
             <div className="skills_titles">
              <h3 className="skills_name">Motion Graphics</h3>
               <span className="skills_number ">80%</span>
                </div> 
                <div className="skills_bar"> 
                <span className="skills_percentage Animation"></span> 
                </div> 
              </div> 
              <div className="skills_data">
             <div className="skills_titles">
              <h3 className="skills_name">Illustration</h3>
               <span className="skills_number ">95%</span>
                </div> 
                <div className="skills_bar"> 
                <span className="skills_percentage design"></span> 
                </div> 
              </div> 

              </div> 
        
          



        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default About;
