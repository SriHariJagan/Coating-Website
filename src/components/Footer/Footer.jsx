// src/components/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { Facebook, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer({ openQuota }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <p>
            Professional powder coating services with a premium, industrial
            finish.
          </p>
          <div className={styles.socials}>
            <a href="#">
              <Facebook size={20} />
            </a>
            <a href="#">
              <Instagram size={20} />
            </a>
            <a href="#">
              <Linkedin size={20} />
            </a>
            <a href="#">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/colorshades">Color Shades</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.links}>
          <h4>Services</h4>
          <ul>
            <li>Standard Coating</li>
            <li>High-Temp Coating</li>
            <li>Custom Finishes</li>
          </ul>
        </div>

        {/* Resources */}
        {/* <div className={styles.links}>
          <h4>Resources</h4>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div> */}

        {/* CTA */}
        <div className={styles.cta}>
          <h4>Ready for a Premium Finish?</h4>
          <button onClick={openQuota}>
            <Mail size={18} />
            Get a Quote
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className={styles.divider}></div>
    </footer>
  );
}
