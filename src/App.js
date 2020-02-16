import React from 'react';
import './App.scss';
import logo from './assets/images/ROMI.png'
import bottleHolders from './imgs/bottleHolders';
import lunchBoxes from './imgs/lunchboxes';
import makeupBags from './imgs/makeupBags';
import pencilCases from './imgs/pencilcases';

function Footer(){
  return(
    <section className="footer">
      <h2>Contáctanos</h2>
      <div className="contact">
        <p>5539876724 <i className="fab fa-whatsapp"></i></p>
        <p>auliomex@gmail.com <i className="fas fa-envelope"></i></p>
      </div>
    </section>
  );
}

function ImgDisplay(props){
  return(
    <div className="display">
    <h1>Detalles</h1>
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
            •
          </div>
    </section>
  );
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
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
     imgAlone : !this.state.imgAlone,
     details: details
   });
  }

  bottleHolder(){
    this.setState({
      imgAlone:false,
      imgGallery: bottleHolders
    });
  }

  lunchbox(){
    this.setState({
      imgAlone:false,
      imgGallery:lunchBoxes
    });
  }

  makeupBag(){
    this.setState({
      imgAlone:false,
      imgGallery:makeupBags
    });
  }

  pencilCase(){
    this.setState({
      imgAlone:false,
      imgGallery:pencilCases
    });
  }

  render(){
    let content ;
    if(this.state.imgAlone){
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
