import React from 'react';
import './assets/css/Dark-NavBar.css';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/Styled-Simple-One-Layer-Navbar-w-CSS.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Navbar extends React.Component{
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }  
  render(){
         return (

      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark" id="mainNav">
        <div className="container"><a className="navbar-brand" href="#page-top">TravelEasy</a><button data-toggle="collapse" data-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right" type="button" data-toogle="collapse" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="nav navbar-nav ml-auto text-uppercase">
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">WHY US</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">EXPLORE</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#login">Login and Register</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Team</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
    }

};