/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './assets/bootstrap/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Bottom extends React.Component{
    componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }    
  render(){
         return (

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4"><span className="copyright">Copyright&nbsp;© Brand 2020</span></div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                <li className="list-inline-item"><a href="#">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );

    }
};