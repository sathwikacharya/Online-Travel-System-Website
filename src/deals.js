/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './assets/css/Dark-NavBar.css';
import './assets/css/Features-Blue.css';
import './assets/css/discount.css';
import './assets/css/Animation-Cards-1.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default class Deals extends React.Component{
 
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }  
  render(){
 return (
      <div>
        <section data-aos="fade-down" id="portfolio" className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="text-uppercase section-heading" style={{fontFamily: '"Kaushan Script", cursive'}}>Find a tour by</h2>
                <h2 className="text-uppercase section-heading" style={{fontFamily: '"Roboto Slab", serif'}}>DESTination</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-4 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fa fa-telegram fa-3x" /></div>
                  </div><img className="img-fluid" src="./assets/img/portfolio/pexels-vishal-shah-2574643.jpg" style={{height: '233px', width: '349px'}} /></a>
                <div className="portfolio-caption">
                  <h4>Rio de Janeiro</h4>
                  <p className="text-muted">7 days 8 nights</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fa fa-telegram fa-3x" /></div>
                  </div><img className="img-fluid" src="./assets/img/portfolio/barcelona.jpg" /></a>
                <div className="portfolio-caption">
                  <h4>Barcelona</h4>
                  <p className="text-muted">5 days 6 nights</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fa fa-telegram fa-3x" /></div>
                  </div><img className="img-fluid" src="./assets/img/portfolio/pexels-troy-squillaci-2521619.jpg" /></a>
                <div className="portfolio-caption">
                  <h4>Hawaii</h4>
                  <p className="text-muted">8 days 9 nights</p>
                </div>
              </div>
            </div>
            <h1 style={{fontFamily: '"Kaushan Script", cursive', textAlign: 'center'}}>OUR TOP 3 TRENDING DESTINATIONS</h1>
          </div>
        </section>
        <section id="portfolio" className="bg-light" style={{padding: '32px'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="text-uppercase section-heading" style={{fontFamily: '"Kaushan Script", cursive'}}>Amazing deals and discounts</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-4 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fa fa-telegram fa-3x" /></div>
                  </div><img className="img-fluid" src="./assets/img/portfolio/paris.jpg" /></a>
                <div className="portfolio-caption">
                  <h4>Paris</h4>
                  <p className="text-muted">7 days 8 nights</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fa fa-telegram fa-3x" /></div>
                  </div><img className="img-fluid" src="./assets/img/portfolio/niagara.jpg" /></a>
                <div className="portfolio-caption">
                  <h4>Niagara Falls</h4>
                  <p className="text-muted">5 days 6 nights</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fa fa-telegram fa-3x" /></div>
                  </div><img className="img-fluid" src="./assets/img/portfolio/barrier.jpg" /></a>
                <div className="portfolio-caption">
                  <h4>Melbourne</h4>
                  <p className="text-muted">8 days 9 nights</p>
                </div>
              </div>
            </div>
            <h1 style={{fontFamily: '"Kaushan Script", cursive', textAlign: 'center'}}>DO NOT MISS OUT ON THESE</h1>
          </div>
        </section>
      </div>
    );
    }

};