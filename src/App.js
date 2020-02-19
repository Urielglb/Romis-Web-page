import React from 'react';
import './App.scss';
import logo from './assets/images/ROMI.png'
import bottleHolders from './imgs/bottleHolders';
import lunchBoxes from './imgs/lunchboxes';
import makeupBags from './imgs/makeupBags';
import pencilCases from './imgs/pencilcases';
import sets from './imgs/sets';

function Footer(){
  return(
    <section className="footer">
      <h2>Contáctanos</h2>
      <div className="contact">
        <p>5539876724 <i className="fab fa-whatsapp"></i></p>
        <p>aulio@mail.com <i className="fas fa-envelope"></i></p>
      </div>
    </section>
  );
}

function ImgDisplay(props){
  return(
    <div className="display">
    <div className="grid">
    <div className="grid-text">
    <p>{props.details.description}</p>
    </div>
    <div className = "grid-img">
      <img src={props.details.src}></img>
    </div>
    </div>
    <div className="btn">
        <a onClick = {()=>{props.show("")}} href="#top">Volver a galeria</a>
    </div>
  </div>
  );
}

function Polaroid (props){
  return(
    <div className="polaroid">
      <img src={props.details.src} onClick={()=>{props.show(props.details)}}></img>
    </div>
  );
}

function Gallery(props){
  let toTop = "";
  if(props.imgsDetails.length>=9){
    toTop =
     <div className="btn">
        <a href="#top">Volver a inicio</a>
    </div>
  }
  const polaroids = props.imgsDetails.map((img)=>{
    return <Polaroid details={img} key={img.src} show={props.show}></Polaroid>
    });
  return(
    <section className="images">
      {polaroids}
      {toTop}
    </section>
  );
}

class Slider extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      index : 0
    };
  this.next = this.next.bind(this);
  this.previous = this.previous.bind(this);
  }

  next(){
    let sliderTextContent = document.querySelector('#slider-text');
    let img  = document.querySelector('#slider-img');
    sliderTextContent.classList.add("hide");
    img.classList.add("hide");
    setTimeout(()=>{
      this.setState((state) => {
        if (state.index>=sets.length-1) {
          return{index:0}
        } else {
          return{index:state.index+1}
        }
      });
      sliderTextContent.classList.remove("hide");
      img.classList.remove("hide");
      },600);
    
  }

  previous(){
    let sliderTextContent = document.querySelector('#slider-text');
    let img  = document.querySelector('#slider-img');
    sliderTextContent.classList.add("hide");
    img.classList.add("hide");
    setTimeout(()=>{
      this.setState((state) => {
        if (state.index<=0) {
          return{index:sets.length-1}
        } else {
          return{index:state.index-1}
        }
      });
      sliderTextContent.classList.remove("hide");
      img.classList.remove("hide");
      },600);
  }

  render(){
    return(
      <div className="slider">
        <div className="controls">
            <h1 className="left-arrow"><i className="fas fa-arrow-left" onClick={this.previous}></i></h1>
            <h1 className="right-arrow"><i className="fas fa-arrow-right" onClick={this.next}></i></h1>
          </div>
        <div className="text">
          <header id="slider-subtitle">
            <p id = "slider-text">{sets[this.state.index].description}</p>
          </header>
        </div>
        <div className="img">
          <img src={sets[this.state.index].src} id="slider-img"></img>
        </div>
      </div>
    );
  }
  
}

function Header(props){
  return(
    <section className="header">
        <h1 >Accesorios personalizados</h1>
        <div className = "logo">
            <img src={logo} className= "logo-image"></img>
        </div>
          <div className="categories" >
            <span onClick={props.functions[0]}>Loncheras</span>
            •
            <span onClick={props.functions[1]}>Estucheras</span>
            •
            <span onClick={props.functions[2]}>Cosmetiqueras</span>
            •
            <span onClick={props.functions[3]}>Portabotellas</span>
          </div>
    </section>
  );
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      slider:true,
      imgAlone: false,
      details:"",
      imgGallery:[],
      functions : [
        this.lunchbox.bind(this),
        this.pencilCase.bind(this),
        this.makeupBag.bind(this),
        this.bottleHolder.bind(this)
      ]
    }
    this.show = this.show.bind(this)
  }

  show(details){
   this.setState({
     slider:false,
     imgAlone : !this.state.imgAlone,
     details: details,
   });
  }

  bottleHolder(){
    this.setState({
      slider:false,
      imgAlone:false,
      imgGallery: bottleHolders
    });
  }

  lunchbox(){
    this.setState({
      slider:false,
      imgAlone:false,
      imgGallery:lunchBoxes
    });
  }

  makeupBag(){
    this.setState({
      slider:false,
      imgAlone:false,
      imgGallery:makeupBags
    });
  }

  pencilCase(){
    this.setState({
      slider:false,
      imgAlone:false,
      imgGallery:pencilCases
    });
  }

  render(){
    let content ;
    if(this.state.slider){
      content = <Slider show={this.show}></Slider>
    }else if(this.state.imgAlone){
      content = <ImgDisplay details={this.state.details} show ={this.show}></ImgDisplay>
    }else{
      content = <Gallery imgsDetails ={this.state.imgGallery} show={this.show}></Gallery>
    }
    return(
      <div>
      <Header functions={this.state.functions}></Header>
      {content}
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
