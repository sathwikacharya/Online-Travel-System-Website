/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './components/style2.css'
export default class Second extends React.Component{
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
        {/*Slider Pictures*/}
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
                  <img src="./components/images/surfing.png" className="d-block img-fluid" />
                </div>
                <div className="carousel-item">
                  <img src="./components/images/surfing2.png" className="d-block img-fluid" />
                </div>
                <div className="carousel-item">
                  <img src="./components/images/surfing3.png" className="d-block img-fluid" />
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
                <h3>5 days</h3>
                <p>Duration</p>
              </div>
              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-map-marker" />
                </div>
                <h3>Bali</h3>
                <p>Location</p>
              </div>
              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-user" />
                </div>
                <h3>8+</h3>
                <p>Age</p>
              </div>
              <div className="col-md-3 text-center">
                <div className="icon">
                  <i className="fa fa-calendar" />
                </div>
                <h3>Year-round</h3>
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
                  Surfing is a surface water pastime in which the surfer, rides on the face of a moving wave, which usually carries the surfer towards the shore.
                  NOMAD arranges Surfing camp retreats with calm waters and the best instructors. Our main priority is the enjoyment and safety of the surfers and hence, the calm waters of Lovina coast will be an ideal place. Our instructors are highly
                  qualified in
                  surfing &amp; have won accolades from leading organisations across the globe.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*Details Part 3 Section*/}
        <section id="details-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h5>Departure/Return Location</h5>
              </div>
              <div className="col-md-6">
                <h6>Lovina Coast, Bali</h6>
              </div>
              <hr className="new1" />
              <div className="col-md-6">
                <h5>Timings</h5>
              </div>
              <div className="col-md-6">
                <h6>9.30 AM-6 PM</h6>
              </div>
              <hr className="new1" />
              <div className="col-md-6">
                <h5>Wear</h5>
              </div>
              <div className="col-md-6">
                <h6>Comfortable cotton/polyester clothing, sunscreen</h6>
              </div>
              <hr className="new1" />
            </div>
          </div>
        </section>
        {/*Itinerary*/}
        <section id="itinerary">
          <div className="container">
            <h1>Itinerary</h1>
            <div className="text-center">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h3>Day 1</h3>
              <p>Meet the group &amp; Training instructor</p>
            </div>
            <br />
            <div className="text-center">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h3>Day 2</h3>
              <p>Training</p>
            </div>
            <br />
            <div className="text-center">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h3>Day 3</h3>
              <p>Advanced Training</p>
            </div>
            <br />
            <div className="text-center">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h3>Day 4</h3>
              <p>Surfing</p>
            </div>
            <div className="text-center">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h3>Day 5</h3>
              <p>Surfing &amp; Return</p>
            </div>
          </div>
        </section>
        {/*Pricing*/}
        <section id="price">
          <div className="container">
            <h1>Price Plans</h1>
            <div className="row">
              <div className="col-md-6">
                <div className="single-price">
                  <div className="price-head">
                    <h2>General</h2>
                    <p>$499/<span>person</span></p>
                  </div>
                  <div className="price-content">
                    <ul>
                      <li><i className="fa fa-check-circle" />Food packages</li>
                      <li><i className="fa fa-check-circle" />Training Instructor</li>
                      <li><i className="fa fa-times-circle" />Free surfing equipment</li>
                      <li><i className="fa fa-times-circle" />Free advanced training</li>
                      <li><i className="fa fa-times-circle" />Free underwater HD photography</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-price">
                  <div className="price-head">
                    <h2>Premium</h2>
                    <p>$629/<span>person</span></p>
                  </div>
                  <div className="price-content">
                    <ul>
                      <li><i className="fa fa-check-circle" />Food packages</li>
                      <li><i className="fa fa-check-circle" />Training Instructor</li>
                      <li><i className="fa fa-check-circle" />Free surfing equipment</li>
                      <li><i className="fa fa-check-circle" />Free advanced training</li>
                      <li><i className="fa fa-check-circle" />Free underwater HD photography</li>
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