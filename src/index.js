import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Navbar from './navbar.js'
import Carousel from './carousel.js'
import Feature from './feature.js'
import Deals from './deals.js'
import Review from './review.js'
import Team from './team.js'
import Form from './form.js'
import Bottom from './bottom.js'
import Bot from './chat.js'

ReactDOM.render(
  <React.StrictMode>
   <div>
    <Navbar />
    <Carousel />
    <Feature />
    <Deals />
    <Review />
    <Team />
    <Bottom />
    <Form />
    <Bottom />
    <Bot />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
