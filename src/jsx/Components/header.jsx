import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/ROMI.png';


const Header = (props)=>{
    return(
        <section className="header">
            <h1><Link to="/home">Accesorios personalizados</Link></h1>
            <div className = "logo">
            <img src={logo} className= "logo-image"></img>
            </div>
              <div className="categories" >
                
                <span><Link to="/loncheras">Loncheras</Link></span>
                •
                <span><Link to="/estucheras">Estucheras</Link></span>
                •
                <span><Link to="/cosmetiqueras">Cosmetiqueras</Link></span>
                •
                <span><Link to="/portabotellas">Portabotellas</Link></span>
              </div>
        </section>
      );
}

export default Header;