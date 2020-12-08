/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './assets/css/best-carousel-slide.css';
import './assets/bootstrap/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default class Carousel extends React.Component{
   componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }    
  render(){
          return (

      <section id="carousel" style={{margin: '-150px', padding: '150px', marginTop: '-150px', height: '723px'}}>
        <div className="carousel slide" data-ride="carousel" id="carousel-1">
          <div className="carousel-inner">
            <div className="carousel-item">
              <div className="jumbotron pulse animated hero-nature carousel-hero" style={{margin: '0px', padding: '150px'}}>
                <h1 className="hero-title" style={{margin: '-90px'}}><br /><strong>FIND YOUR SPECIAL TOURS TODAY</strong><br /><br /></h1>
                <p className="hero-subtitle" style={{fontSize: '26px'}}><br /><strong>WITH TRAVELEASY!</strong><br /><br /></p>
                <p><a className="btn btn-primary hero-button plat" role="button" href="/first" style={{background: '#111428'}}>VIEW TOURS</a></p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="jumbotron pulse animated hero-photography carousel-hero" style={{margin: '0px', padding: '150px'}}>
                <h1 className="hero-title">FIND YOUR SPECIAL TOUR TODAY</h1>
                <p className="hero-subtitle" style={{fontSize: '26px'}}>WITH TRAVELEASY!</p>
                <p><a className="btn btn-primary hero-button plat" role="button" href="/second" style={{background: '#ccac40'}}>VIEW TOURS</a></p>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="jumbotron pulse animated hero-technology carousel-hero" style={{margin: '0px', padding: '150px'}}>
                <h1 className="hero-title" style={{color: 'rgb(10,6,6)'}}>FIND YOUR SPECIAL TOURS TODAY</h1>
                <p className="hero-subtitle" style={{fontSize: '26px', color: 'rgb(25,25,25)'}}>WITH TRAVELEASY!</p>
                <p><a className="btn btn-primary hero-button plat" role="button" href="/third" style={{color: 'rgb(8,8,8)'}}>VIEW TOURS</a></p>
              </div>
            </div>
          </div>
          <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev" style={{margin: '0px'}}><i className="fa fa-chevron-left" /><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><i className="fa fa-chevron-right" /><span className="sr-only">Next</span></a></div>
          <ol className="carousel-indicators">
            <li data-target="#carousel-1" data-slide-to={0} />
            <li data-target="#carousel-1" data-slide-to={1} />
            <li data-target="#carousel-1" data-slide-to={2} className="active" />
          </ol>
        </div>
      </section>
    );
    }

};