import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
    
const Slider = (props)=>{
    const [actualIndex,setActualIndex] = useState(0);
    const addHide = ()=>{
        let sliderTextContent = document.querySelector('#slider-text');
        let img  = document.querySelector('#slider-img');
        sliderTextContent.classList.add("hide");
        img.classList.add("hide");
    }
    const removeHide =()=>{
        let sliderTextContent = document.querySelector('#slider-text');
        let img  = document.querySelector('#slider-img');
        sliderTextContent.classList.remove("hide");
        img.classList.remove("hide");
    }
    const next = ()=>{
        addHide()
        setTimeout(()=>{
        if (actualIndex+1===props.imgs.length) {
            setActualIndex(0);
        } else {
            setActualIndex(actualIndex+1);
        }
        removeHide()
        },600);
        
    }
    useEffect(()=>{
        let sliderInterval = setInterval(next,5000);
        return (()=>{
            clearTimeout(sliderInterval);
        });
    })
    return(
        <div className="slider">
        <div className="text">
          <header id="slider-subtitle">
            <p id = "slider-text">{props.imgs[actualIndex].description}</p>
          </header>
        </div>
        <div className="img">
          <img src={props.imgs[actualIndex].src} id="slider-img"></img>
        </div>
       </div>
    );
}

export default Slider;
