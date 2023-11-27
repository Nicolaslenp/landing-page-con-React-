import React from "react";
import '../archivos-style/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer (){
  return(
    <footer className="footer">
      <div className="container">
        <div className="footer-r">
          <div className="footer-link">
            <h6>compañia</h6>
            <ul>
              <li className="li-foot"><a href="#">Más sobre nosotros</a></li>
              <li className="li-foot"><a href="#">nuestros servicios</a></li>
              <li className="li-foot"><a href="#">Sponsors</a></li>
              <li className="li-foot"><a href="#">politica de privacidad</a></li>
            </ul>
          </div>
          <div className="footer-link">
            <h6>asociados</h6>
            <ul>
              <li className="li-foot"><a href="#">Más sobre asociados</a></li>
              <li className="li-foot"><a href="#">sus servicios</a></li>
              <li className="li-foot"><a href="#">acuerdos</a></li>
              <li className="li-foot"><a href="#">politica de patrocinios</a></li>
            </ul>
          </div>
          <div className="footer-link">
            <h6>Siguenos!</h6>
            <div className="social-links">
            <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
            <a href="#"><FontAwesomeIcon icon={faXTwitter}/></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}




export default Footer;
