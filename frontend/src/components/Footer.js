import React from "react";
import Logo from "../Assets/Logo2SinFondo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Calidad</span>
          <span>Ayuda</span>
          <span>Compartir</span>
          <span>Carrers</span>
          <span>Testimonios</span>
          <span>Trabajo</span>
        </div>
        <div className="footer-section-columns">
          <span>123-456-7890</span>
          <span>hello@thebros.com</span>
          <span>press@thebros.com</span>
          <span>contact@thebros.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terminos & Condiciones</span>
          <span>Politica de Privacidad</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;