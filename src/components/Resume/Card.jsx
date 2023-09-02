import React from 'react' 
const Card = (props) => 
{ return( 
<div className="timeline_item"> 
<i className={props.icon}></i> <span className="timeline_date">{props.year}</span>
 <h3 className="timeline_title">{props.title}</h3> <div className="timeline_text"> <p>{props.desc}</p> </div>
 </div>
 )
 } 
 
export default Card;