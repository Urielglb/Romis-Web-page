import React from 'react';
import ReactDOM from 'react-dom';
import './assets/fonts/HelveticaNeue.ttf'
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Preloader from './preloader'
import Sets from './imgs/sets'

ReactDOM.render(<App />, document.getElementById('root'));

let controls = document.querySelector('.controls');

const imgs = Sets.map(set=>{return set.src});

Preloader.preloadImages({
    images : imgs,
    completed : function(){
        controls.style.display = "flex";
    }
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
