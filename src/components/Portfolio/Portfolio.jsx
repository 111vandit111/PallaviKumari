import React, { useState } from "react";
import "./portfolio.css";
import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work-3.jpg";
import Work4 from "../../assets/work-4.jpg";
import Work5 from "../../assets/work-5.jpg";
import Work6 from "../../assets/work-6.jpg";
import Work7 from "../../assets/work-7.jpg";

const Menu = [
  {
    id: 6,
    image: Work6,
    title: "Concept Art - Harvest Adventures",
    category: "Design",
    lin:'https://www.behance.net/gallery/178568727/Harvest-Adventures'
  },
  {
    id: 1,
    image: Work1,
    title: "Fendi Logo Redesigned",
    category: "Branding",
    lin:'https://www.behance.net/gallery/156358267/rebranding-of-fendi-logo',
  },
  {
    id: 2,
    image: Work2,
    title: "Nevia Logo Redesigned",
    category: "Branding",
    lin:'https://www.behance.net/gallery/159032043/NIVEA-LOGO-REDESIGN'
  },
  {
    id: 3,
    image: Work3,
    title: "Revirement Website Wireframe",
    category: "Branding",
    lin:'https://www.behance.net/gallery/174993509/website-ui-design-(Revirement)'
  },
  {
    id: 4,
    image: Work4,
    title: "Comic Strip Cat & Pie",
    category: "Creative",
    lin:'https://www.behance.net/gallery/175340807/Cat-and-Pie'
  },
  {
    id: 5,
    image: Work5,
    title: "2D Animation",
    category: "Animation",
    lin:'https://www.behance.net/gallery/153422225/perfectt-shell'
  },
  
  {
    id: 7,
    image: Work7,
    title: "Character Design - Zelda The Witch",
    category: "Design",
    lin:'https://www.behance.net/gallery/157796705/charcater-design-Zelda-the-witch'
  },
];

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  
  const filterItem = (categoryItem) => { 
    const updatedItems = Menu.filter((curElem) => { return curElem.category === categoryItem; });
    setItems (updatedItems);
   };


  return (
    <section className="work container section" id="work">
      {" "}
      <h2 className="section_title">Recent Works</h2>{" "}
      <div className="work_filters">
        {" "}
        <span className="work_item" onClick={() => setItems(Menu)}>Everything</span>
        <span className="work_item" onClick={ () =>{filterItem("Branding")}}>Branding</span>
        <span className="work_item" onClick={ () =>{filterItem("Creative")}}>Creative</span>        <span className="work_item" onClick={ () =>{filterItem("Animation")}}>Animation</span>
        <span className="work_item" onClick={ () =>{filterItem("Design")}}>Character & Concept</span>
        

      </div>{" "}
      <div className="work_container grid">
        {items.map((elem) => {
          const { id, image, title, category ,lin} = elem;
          return (
            <div className="work_card" key={id}>
              {" "}
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />{" "}
                <div className="work_mask"></div>{" "}
              </div>{" "}
              <span className="work_category">{category}</span>{" "}
              <h3 className="work_title">{title}</h3>{" "}
              <a href={lin} className="work_button" target="_blank">
                {" "}
                <i className="icon-link work button-icon"></i>
              </a>{" "}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
