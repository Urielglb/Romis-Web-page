import React from 'react';
import { BrowserRouter as Router,Switch, Route, Redirect } from "react-router-dom";
import Header from './Components/header';
import Home from './Pages/home';
import Gallery from './Pages/gallery';
import ImgDisplay from './Pages/imgDisplay'
import sets from '../imgs/sets';
import bottleHolders from '../imgs/bottleHolders';
import lunchBoxes from '../imgs/lunchboxes';
import makeupBags from '../imgs/makeupBags';
import pencilCases from '../imgs/pencilcases';
import Footer from './Components/footer';

const Routes = ()=>{
    return(
        <Router>
        <Header/>
        <Switch>
            <Route path="/home">
                <Home sliderImgs={sets}/>
            </Route>
            <Route path="/loncheras" exact >
                <Gallery imgsDetails={lunchBoxes} category="loncheras"/>;
            </Route>
            <Route path="/estucheras" exact>
                <Gallery imgsDetails={pencilCases} category="estucheras"/>
            </Route>
            <Route path="/cosmetiqueras" exact>
                <Gallery imgsDetails={makeupBags}  category="cosmetiqueras"/>
                </Route>
            <Route path="/portabotellas" exact>
                <Gallery imgsDetails={bottleHolders}  category="portabotellas"/>
            </Route>
            <Route path="/img/:category/:id/">
                <ImgDisplay/>
            </Route>
            <Redirect to="/home"/>
        </Switch>
        <Footer/>
    </Router>
    );

}

export default Routes;
