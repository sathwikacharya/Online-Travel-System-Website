/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './assets/css/Features-Blue.css';
import './assets/css/discount.css';
import './assets/css/Animation-Cards-1.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Feature extends React.Component{
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }  
  render(){
 return (

      <div className="features-blue"  style={{margin: '0px', padding: '100px'}}>
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Why choose us ?</h2>
            <p className="text-center">Here are a few amazing reasons why!!</p>
          </div>
          <div className="row features">
            <div className="col-sm-6 col-md-4 item"><i className="fa fa-globe icon" />
              <h3 className="name">Diverse destinations</h3>
              <p className="description">From Maldives to Paris, we have you covered. Just tell us the destination and we will find the best deals for you!</p>
            </div>
            <div className="col-sm-6 col-md-4 item"><i className="fa fa-money icon" />
              <h3 className="name">Value for money</h3>
              <p className="description">This goes without saying. We intend to provide you with deals that are surely worth the penny you put into</p>
            </div>
            <div className="col-sm-6 col-md-4 item"><i className="fa fa-camera icon" />
              <h3 className="name">Beautiful places</h3>
              <p className="description">We know you will be left spellbound by the beauty that a number of undiscovered places has to offer. So what are you waiting for ?</p>
            </div>
            <div className="col-sm-6 col-md-4 item"><i className="fa fa-calendar-check-o icon" />
              <i className="fa fa-calendar-check-o icon" />
              <i className="fa fa-calendar-check-o icon" />
              <i className="fa fa-calendar-check-o icon" />
              <i className="fa fa-calendar-check-o icon" />
              <h3 className="name">Fast booking</h3>
              <p className="description">Being quick and efficient is what we strive for and provide for the customers. After all, time is of the essence right ?</p>
            </div>
            <div className="col-sm-6 col-md-4 item"><i className="fa fa-comments icon" />
              <h3 className="name">Support team</h3>
              <p className="description">Did we mention about the number of amazing and super talented people that are behind this project? Well then, you are in for a treat. Do strike a conversation with the buddy chatbot!</p>
            </div>
            <div className="col-sm-6 col-md-4 item"><i className="fa fa-heart icon" />
              <h3 className="name">Passionate travel</h3>
              <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
            </div>
          </div>
        </div>
        <h1 style={{textAlign: 'center', fontFamily: '"Kaushan Script", cursive', fontSize: '30px'}}>Take a look at our</h1>
        <h1 style={{textAlign: 'center', fontFamily: 'Montserrat, sans-serif', fontSize: '50px'}}>Most Popular Tours</h1>
        <div className="row space-rows">
          <div className="col">
            <div className="card cards-shadown cards-hover" data-aos="flip-left" data-aos-duration={950}>
              <div className="card-header" style={{background: 'url("./assets/img/team/paragliding.jpg")', backgroundSize: 'cover'}}><span className="space"><a href="#"><i className="fa fa-star"  />
                    <i className="fa fa-star"  />
                    <i className="fa fa-star"  />
                    <i className="fa fa-star"  /></a>
                </span>
                <div className="cardheader-text"><div className="corner-ribbon top-right sticky blue shadow" style={{width: 'auto', height: 'auto', fontSize: '14px', background: 'rgb(238,68,51)'}}><span>Special Offer</span></div></div>
              </div>
              <div className="card-body">
                <p className="text-dark card-text sub-text-color" style={{fontFamily: '"Roboto Slab", serif', fontSize: '25px', color: '#2c2929', margin: '-4px', padding: '0px'}}>Paragliding</p>
                <p className="card-text cardbody-sub-text" style={{fontSize: '15px', borderTopStyle: 'none', margin: '-18px', padding: '4px'}}><br />Delve yourself into the endless sky as you take a dive from 5000ft. Your mind is surely in for a ride as the air gushes past you!!<br /><br /></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cards-shadown cards-hover" data-aos="slide-right" data-aos-duration={950}>
              <div className="card-header" style={{background: 'url("./assets/img/balloon.jpg")', backgroundSize: 'cover'}}><span className="space"><a href="#"><i className="fa fa-star"  />
                    <i className="fa fa-star"  />
                    <i className="fa fa-star"  /></a>
                </span>
                <div className="cardheader-text"><div className="corner-ribbon top-right sticky blue shadow" style={{width: 'auto', height: 'auto', fontSize: '14px', background: 'rgb(238,68,51)'}}><span>Special Offer</span></div></div>
              </div>
              <div className="card-body">
                <p className="text-dark card-text sub-text-color" style={{fontFamily: '"Roboto Slab", serif', fontSize: '25px', color: '#2c2929', margin: '-4px', padding: '0px'}}>Hot Air Balloon</p>
                <p className="card-text cardbody-sub-text" style={{fontSize: '15px', borderTopStyle: 'none', margin: '-18px', padding: '4px', color: 'rgba(20,18,18,0.6)'}}><br />Want to do something special for your loved one/ones? Do not think twice and go for this breathtaking tour.<br /><br /></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cards-shadown cards-hover" data-aos="flip-up" data-aos-duration={950}>
              <div className="card-header cards-header-hover" style={{background: 'url("./assets/img/team/rafting.jpg") center / cover'}}><span className="space"><a href="#"><i className="fa fa-star" id="download-icon" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" /></a>
                </span>
                <div className="cardheader-text"><div className="corner-ribbon top-right sticky blue shadow" style={{width: 'auto', height: 'auto', fontSize: '14px', background: 'rgb(238,68,51)'}}><span>Special Offer</span></div></div>
              </div>
              <div className="card-body">
                <p className="text-dark card-text sub-text-color" style={{fontFamily: '"Roboto Slab", serif', fontSize: '25px', color: '#2c2929', margin: '-4px', padding: '0px'}}>Rafting</p>
                <p className="card-text cardbody-sub-text" style={{fontSize: '15px', borderTopStyle: 'none', margin: '-18px', padding: '4px', color: 'rgba(20,18,18,0.6)'}}><br />Are you a thrill seeker and like to try something new ? Well then, this one is tailored for you then. Do ensure you bring your closed ones along with you for this one of a lifetime experience.<br /><br /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    }

};