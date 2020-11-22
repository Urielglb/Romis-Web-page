import React from 'react';
import Polaroid from '../Components/polaroid';

const Gallery = (props)=>{
    let toTop = "";
    if(props.imgsDetails.length>=9){
      toTop =
       <div className="btn">
          <a href="#top">Volver a inicio</a>
      </div>
    }
    const polaroids = props.imgsDetails.map((img)=>{
      return <Polaroid details={img} key={img.src} show={props.show} category={props.category}></Polaroid>
      });
    return(
      <section className="images">
        {polaroids}
        {toTop}
      </section>
    );
}

export default Gallery;