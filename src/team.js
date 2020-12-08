import React from 'react';
import './assets/bootstrap/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
export default class Team extends React.Component{ 
 componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }  
  render(){
      return(
      <div>
      <section data-aos="fade-down" id="team" className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="team-member"><img className="rounded-circle mx-auto" src="assets/img/team/sam.jpeg" />
                <h4>Kay Garland</h4>
                <p className="text-muted"><br />Lead&nbsp;Tour&nbsp;Packages&nbsp;page&nbsp;developer<br /><br /></p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member"><img className="rounded-circle mx-auto" src="assets/img/team/shreya.jpeg" />
                <h4>Larry Parker</h4>
                <p className="text-muted"><br />Lead&nbsp;login&nbsp;and&nbsp;register&nbsp;page&nbsp;developer<br /><br /></p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member"><img className="rounded-circle mx-auto" src="assets/img/team/samhita.jpeg" />
                <h4>Diana Pertersen</h4>
                <p className="text-muted"><br />Lead&nbsp;login&nbsp;and&nbsp;register&nbsp;page&nbsp;developer<br /><br /></p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}
 
 