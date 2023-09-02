import React from "react";
import "./resume.css";
import Card from "./Card";
const Data = [
  {
    id: 1,
    category: "education",
    icon: "icon-graduation",
    year: "2019 -2023",
    title: "Bachelor's of Design", 
    desc: "I have successfully completed a BDes in Communication Design from Banasthali Vidyapeeth. Throughout my studies, I have gained expertise in Graphic Design, Advertising Design, Publication Design, Web Design, Animation Design, and UI/UX. With this diverse skill set, I am well-prepared to create captivating and impactful design experiences.",
  },
  {
    id: 2,
    category: "education",
    icon: "icon-graduation",
    year: "2017-2018",
    title: "PU College",
    desc: "I have recently completed my 12th grade education with Science as my major subject and Designing as my minor, under the curriculum of CBSE. Throughout my academic journey, I have gained a comprehensive understanding of scientific principles and concepts, while also nurturing my passion for design. By pursuing Designing as a minor, I have been able to explore various creative disciplines, enhance my visual communication skills, and develop a strong foundation in design principles. This combination of scientific knowledge and design proficiency has equipped me with a unique skill set that I am eager to apply in my future endeavors.",
  },
  {
    id: 3,
    category: "experience",
    icon: "icon-briefcase",
    year: "Jan 2023 - July 2023 ",
    title: "Graphic Designer",
    desc: "During my internship at Skin Elements, I worked on diverse design projects, creating impactful logos, website wireframes, and various digital assets such as videos, social media posts, infographics, banners, corporate videos, email newsletters, and e-commerce advertisements.",
  },
  {
    id: 4,
    category: "experience",
    icon: "icon-briefcase",
    year: "2022 - Present",
    title: "Freelancer",
    desc: "Throughout my freelance career, I have achieved success by crafting compelling logos for a variety of clients. Not only am I skilled in logo design, but I also specialize in creating striking portrait illustrations. Collaborating closely with individuals, I bring their visions to life and deliver exceptional visual representations that capture the essence of their unique identities.",
  },
];

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      {" "}
      <h2 className="section_title">Experience</h2>{" "}
      <div className="resume_container grid">
        {" "}
        <div className="timeline grid">
          {" "}
          {Data.map((val, id) => {
            if(val.category==="education"){
            return (
             
              <Card
                key={id}
                icon={val.icon}
                year={val.year}
                title={val.title}
                desc={val.desc}
              />
              
            )}
          })}{" "}
        </div>{" "}
        <div className="timeline grid">
          {" "}
          {Data.map((val, id) => {
            if(val.category==="experience"){
            return (
             
              <Card
                key={id}
                icon={val.icon}
                year={val.year}
                title={val.title}
                desc={val.desc}
              />
              
            )}
          })}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Resume;
