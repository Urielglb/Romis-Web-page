import React from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom'
import bottleHolders from '../../imgs/bottleHolders';
import lunchBoxes from '../../imgs/lunchboxes';
import makeupBags from '../../imgs/makeupBags';
import pencilCases from '../../imgs/pencilcases';


const getImgInfo = (category,id)=>{
  const imgInfo = {description:'',src:''} 
  switch (category) {
    case "loncheras":
      imgInfo.description = lunchBoxes[id].description;
      imgInfo.src = lunchBoxes[id].src;
      break;
    case "estucheras":
      imgInfo.description = pencilCases[id].description;
      imgInfo.src = pencilCases[id].src;
      break;
    case "cosmetiqueras":
      imgInfo.description = makeupBags[id].description;
      imgInfo.src = makeupBags[id].src;
      break;
    case "portabotellas":
      imgInfo.description = bottleHolders[id].description;
      imgInfo.src = bottleHolders[id].src;
      break;
    default:
    break;
  }
  return imgInfo;
}

const ImgDisplay = ()=>{
  const category = useParams().category;
  const id = useParams().id;
  const imgInfo = getImgInfo(category,id);
  const link = `/${category}`;
  return(
        <div className="display">
        <div className="grid">
        <div className="grid-text">
        <p>{imgInfo.description}</p>
        </div>
        <div className = "grid-img">
          <img src={imgInfo.src} alt={"Imagen del catálogo"}></img>
        </div>
        </div>
        <div className="btn">
            <Link to={link}>Volver a galería</Link>
        </div>
      </div>
      );
}

export default ImgDisplay;