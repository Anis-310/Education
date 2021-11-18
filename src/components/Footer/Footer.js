import React from "react";
import bgFooter from "../../images/bg-footer.png";
import logo from "../../images/logo.png";
import map from "../../images/map.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faWhatsapp , } from '@fortawesome/free-brands-svg-icons'
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import "./Footer.css";

const Footer = () => {
  return (
    <section className="container-fluid">
      <div className="mt-4">
        <img className="img-fluid w-100" src={bgFooter} alt="" />
      </div>
      <div className="footer">

        <div className="container">
        <div className="footer-card">
          <div className="row">
            <div className="col-md-4 col-sm-12 mt-4 p-2 mb-4 ">
                <p>Contact Us</p>
                <img className="img-fluid w-75 logoImg" src={logo} alt="" />
                <li> <FontAwesomeIcon  icon={faPhoneSquare}/> +8801767047310</li>
                <li> <FontAwesomeIcon  icon={faEnvelope }/> info@educationschool.edu.bd</li>
                <li> <FontAwesomeIcon  icon={faMapMarkerAlt}/> Dhaka, Bangladesh</li>
            </div>

            <div className="col-md-4 col-sm-12 mt-4 p-2 mb-4 footer-contact">
                <p>Important Links</p>
                
                <li><a href="#">Dhaka Education Board</a></li>
                <li><a href="#">Ministry of Education</a></li>               
                <li><a href="#">Bangladesh Primary Education</a></li>
                <li><a href="#">Ministry of Health</a></li>
                <li><a href="#">Idea Solution Ltd.</a></li>

            </div>

            <div className="col-md-4 col-sm-12 mt-4 p-2 mb-4 footer-contact">
                <p>Google Map</p>
                <img className="img-fluid map" src={map} alt="" />
                
            </div>

          </div>
          </div>

            <div className="d-flex justify-content-between footer-copyright ">

                <div>
                    <p>Copyright @ 2021, All Right Reserved by - <a className="footer-bottom" href="#">Idea Solution Ltd.</a></p>
                </div>
                <div className="icon">
                    <a href=""><FontAwesomeIcon  icon={faFacebook} /></a>
                    <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href=""><FontAwesomeIcon icon={faWhatsapp} /></a>

                </div>
            </div>
    
        </div>
    
      </div>
    </section>
  );
};

export default Footer;
