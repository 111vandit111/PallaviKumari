import React from 'react'
import './services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image5 from '../../assets/service-3.svg';
import Image4 from '../../assets/service-4.svg';
import Image3 from '../../assets/service-5.svg';
import Image6 from '../../assets/service-6.svg';
import Image7 from '../../assets/service-7.svg';
const data = [
  {
    id: 1,
    image: Image2,
    title: "UI/UX design",
    description:
      "UI/UX specialist with a focus on creating intuitive and user-friendly interfaces for web and mobile applications."
     },
  {
    id: 2,
    image: Image1,
    title: "Graphic Design",
    description: "Professional graphic designer with expertise in creating visually appealing designs for various mediums.",
    },
  {
    id: 3,
    image: Image3,
    title: "Logo Designing",
    description:
      "Skilled logo designer with a proven track record of creating impactful and memorable brand identities.",
     },
     {
      id: 4,
      image: Image4,
      title: "Animation",
      description: "Experience in creating engaging animations for explainer videos, advertisements, and interactive media.",
      },
      {
        id: 5,
        image: Image6,
        title: "Branding",
        description: "Ability to create brand guidelines, logos, typography, and visual assets that resonate with target audiences."
      },
      {
        id: 6,
        image: Image7,
        title: "Motion Graphics",
        description: "Experience in creating motion graphics for videos, presentations, and digital marketing campaigns."
      },
      {
        id: 7,
        image: Image5,
        title: "Illustration",
        description: "Versatile illustrator with a flair for creating captivating and expressive artwork across various styles and mediums."
      },
];


const Services = () => {
  return (
    <section className="services container section" id="services">
     <h2 className="section_title">Services</h2> <div className="services_container grid"> 
     {data.map(({ id, image, title, description }) => { 
      return (
         <div className="services_card" key={id}> <img src={image} alt={title} height={80} className="services_img" />
         <h3 className="services_title">{title}</h3> <p className="services_description">{description}</p> </div> )})} </div>
    </section>
  )
}

export default Services