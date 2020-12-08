import React,  { useState, useEffect } from 'react';
import './assets/bootstrap/css/bootstrap.min.css';
import { db } from "./firebase.js";

const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        phone: phone
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

return (

      <section id="contact" style={{backgroundImage: 'url("./assets/img/map-image.png")'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="text-uppercase section-heading">Contact Us</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="contactForm"  onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col col-md-6">
                    <div className="form-group"><input className="form-control"  value={name}
        onChange={(e) => setName(e.target.value)} type="text" id="name" placeholder="Your Name *" required /><small className="form-text text-danger flex-grow-1 help-block lead" /></div>
                    <div className="form-group"><input className="form-control" type="email" id="email"  value={email}
        onChange={(e) => setEmail(e.target.value)} placeholder="Your Email *" required /><small className="form-text text-danger help-block lead" /></div>
                    <div className="form-group"><input className="form-control" type="tel" id="phone" value={phone}
        onChange={(e) => setPhone(e.target.value)} placeholder="Your Phone *" required /><small className="form-text text-danger help-block lead" /></div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group"><textarea className="form-control" id="message"   value={message}
        onChange={(e) => setMessage(e.target.value)} placeholder="Your Message *" required defaultValue={""} /><small className="form-text text-danger help-block lead" /></div>
                  </div>
                  <div className="col">
                    <div className="clearfix" />
                  </div>
                  <div className="col-lg-12 text-center">
                    <div id="success" /><button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton"         style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }} type="submit">Send Message</button></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  
export default Form;