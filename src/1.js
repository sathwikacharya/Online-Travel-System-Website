/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './components/style1.css'
export default class First extends React.Component{
  render(){
    return(
   <div>
   <section id="nav-bar">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#"><img src="./components/images/logo.png" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#pic">PICTURES<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#details-1">DETAILS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#itinerary">ITINERARY</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#price" tabIndex={-1} aria-disabled="true">PRICING</a>
                </li>
              </ul>
            </div>
          </nav>
        </section>
        <section id="pic">
          <div id="slider">
            <div id="PictureSlider" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#PictureSlider" data-slide-to={0} className="active" />
                <li data-target="#PictureSlider" data-slide-to={1} />
                <li data-target="#PictureSlider" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./components/images/birdwatching.png" className="d-block img-fluid" />
                </div>
                <div className="carousel-item">
                  <img src="./components/images/birdwatching2.png" className="d-block img-fluid" />
                </div>
                <div className="carousel-item">
                  <img src="./components/images/birdwatching3.png" className="d-block img-fluid" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#PictureSlider" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#PictureSlider" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
        {/*Details Part 1 Section*/}
        <section id="details-1">
          <div className="container">
            <h1>Details</h1>
            <div className="row details-1">
              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-clock-o" />
                </div> 
                <h3>10 hours</h3>
                <p>Duration</p>
              </div>
              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-map-marker" />
                </div>
                <h3>Kuala Lampur</h3>
                <p>Location</p>
              </div>
              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-user" />
                </div>
                <h3>4+</h3>
                <p>Age</p>
              </div>
              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-calendar" />
                </div>
                <h3>Jan-June</h3>
                <p>Dates</p>
              </div>
            </div>
          </div>
        </section>
        {/*Details Part 2 Section*/}
        <section id="details">
          <div className="container">
            <div className="row">
              <div className="details-content"> 
                <p>
                  Birdwatching tourism or avitourism refers to travel with the main purpose of viewing birds in their natural habitat.
                  NOMAD arranges Birding Expeditions to the best natural environments with quality birdlife. Our main focus is in tours
                  for the endemics of Kuala Lampur's Selangor Nature park because of its rich wildlife. Our guides are highly qualified in
                  field work &amp; have won accolades from leading birders across the globe.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="details-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h5>Departure/Return Location</h5>
              </div>
              <div className="col-md-6"> 
                <h6>Kuala Selangor Nature park</h6>
              </div>
              <hr className="new1" />
              <div className="col-md-6">
                <h5>Departure Time</h5>
              </div>
              <div className="col-md-6">
                <h6>9.30 AM</h6>
              </div>
              <hr className="new1" />
              <div className="col-md-6">
                <h5>Return Time</h5>
              </div>
              <div className="col-md-6">
                <h6>7.30 PM</h6>
              </div>
              <hr className="new1" />
              <div className="col-md-6">
                <h5>Wear</h5>
              </div>
              <div className="col-md-6">
                <h6>Comfortable and athletic clothing, cover arms and legs, sunscreen</h6>
              </div>
              <hr className="new1" />
            </div>    
          </div>
        </section>
        <section id="itinerary">
          <div className="container">
            <h1>Itinerary</h1>
            <div className="text-center">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h3>9.30 AM</h3>
              <p>Kuala Selangor Nature Park</p>
            </div>
            <br />
            <div className="text-center">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h3>12.30 PM</h3>
              <p>Genting Valley</p>
            </div>
            <br />
            <div className="text-center">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h3>3.30 PM</h3>
              <p>Ulu Langat Lowland Forest</p>
            </div>
            <br />
            <div className="text-center">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h3>6.30 PM</h3>
              <p>Templer's Park</p>
            </div>
          </div>
        </section>
        <section id="price">
          <div className="container">
            <h1>Price Plans</h1>
            <div className="row">
              <div className="col-md-6">
                <div className="single-price">
                  <div className="price-head">
                    <h2>General</h2>
                    <p>$149/<span>month</span></p>
                  </div>
                  <div className="price-content">
                    <ul>
                      <li><i className="fa fa-check-circle" />Tour</li>
                      <li><i className="fa fa-check-circle" />Food packages</li>
                      <li><i className="fa fa-times-circle" />Free binoculars</li>
                      <li><i className="fa fa-times-circle" />Close interaction with birds</li>
                      <li><i className="fa fa-times-circle" />Free pictures</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-price">
                  <div className="price-head">
                    <h2>Premium</h2>
                    <p>$279/<span>month</span></p>
                  </div>
                  <div className="price-content">
                    <ul>
                      <li><i className="fa fa-check-circle" />Tour</li>
                      <li><i className="fa fa-check-circle" />Food packages</li>
                      <li><i className="fa fa-check-circle" />Free binoculars</li>
                      <li><i className="fa fa-check-circle" />Close interaction with birds</li>
                      <li><i className="fa fa-check-circle" />Free pictures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
  }
};
