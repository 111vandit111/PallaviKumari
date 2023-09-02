import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../assets/logo.svg'

const Sidebar = () => {
  const [toggle , setToggle] = useState(false);
  return (
    <>
    <aside className={toggle ? 'aside show-menu' : 'aside'}>
<a href="#home" className= "nav_logo">
<img src={Logo} alt="" />
</a>
<nav className="nav">
<div className= "nav_____menu">
<ul className="nav_list">
<li className="nav_item">
<a href="#home" className= "nav_link home_social-link" title='Home'>
    <i className="icon-home"></i>
</a>
</li>
<li className="nav_item">
<a href="#about" className= "nav_link" title="About me">
<i className="icon-user-female"></i>
</a>
</li>
<li className="nav_item">
<a href="#services" className= "nav_link" title='Services Provided'>
<i className="icon-briefcase"></i>
</a>
</li>
<li className="nav_item">
<a href="#resume" className= "nav_link" title='Experience & Education'>
<i className="icon-graduation"></i>
</a>
</li>
<li className="nav_item">
<a href="#contact" className= "nav_link" title='Contact me'>
<i className="icon-bubble"></i>
</a>
</li>
</ul>
</div>
</nav>

<div className="nav_footer">
<span className="copyright">&copy; Pallavi Kumari 2023.</span>
</div>
</aside>
<div className={ toggle ? "nav_toggle nav_toggle-open":"nav_toggle"} onClick={()=>setToggle(!toggle)}>
  {toggle ?<i class="fa-solid fa-xmark"></i>:<i className="icon-menu"></i>}
</div>
</>
  )
}

export default Sidebar