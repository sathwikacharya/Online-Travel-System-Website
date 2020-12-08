import React from 'react';
import './assets/bootstrap/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Review extends React.Component{    
    componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }    
  render(){
      return(
 <div id="review">
        <nav className="navbar navbar-light navbar-expand-md sticky-top navigation-clean-button" style={{height: '80px', backgroundColor: '#37434d', color: '#ffffff'}}>
          <div className="container-fluid"><a className="navbar-brand" href="#" style={{fontSize: '28px'}}><i className="fa fa-globe" />&nbsp;TOUR REVIEW OF BALI</a></div>
        </nav>
        <div className="row clearmargin clearpadding row-image-txt">
          <div className="col-xs-12 col-sm-6 col-md-6 clearmargin clearpadding col-sm-push-6" style={{backgroundImage: 'url("assets/img/bali.jpg")', backgroundSize: 'cover', height: 'auto', backgroundPosition: 'center'}}>
            <div />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-sm-pull-6" style={{padding: '20px'}}>
            <div className="team-member"><img className="rounded-circle img-fluid d-flex mx-auto" src="assets/img/team/sath.jpg" />
              <h4 style={{color: '#f1e4e4'}}>Sathwik</h4>
              <p className="text-muted">Lead Home Page Developer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
              </ul>
            </div>
            <h1>Review</h1>
            <hr />
            <p>This is one of the finest tours we have gone to. The customer service was pleasantly welcoming. I was left in awe at the ambience and the scening retreat this place had to offer. All in all this was a well planned and refreshing tour experiences I have had in a while. This is coming from someone who is a frequent traveller. Keep up the good work TravelEasy!</p>
          </div>
        </div>
      </div>
      );

  }
}