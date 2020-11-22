import React from 'react';
import { Link } from 'react-router-dom';

const Polaroid = (props)=>{
  const link = `/img/${props.category}/${props.details.id}`;
    return(
        <div className="polaroid">
          <Link to={link}>
          <img src={props.details.src}></img>
          </Link>
        </div>
      );
}
export default Polaroid;