import React from 'react'
import './Home.css'
import HeaderSocials from './HandleSocials';
import ScrollDown from './ScrollDown';
import Me from "../../assets/avatar-3.svg";
import Shapes from './Shapes';
const Home = () => {
return (
<section className="home container" id="home">
<div className="intro">
<img src={Me} alt="" className="home__img" width={"150px"} />
<h1 className="home___name">Pallavi Kumari</h1>
<span className="home__education">I'm a Communication Designer</span>
</div>

<HeaderSocials />



<a href="#contact" className="btn">Hire Me</a>

<ScrollDown />

<Shapes />
</section>
)
}

export default Home