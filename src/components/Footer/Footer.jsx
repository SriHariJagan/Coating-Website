import React from "react";
import styles from "./Footer.module.css";
import { Facebook, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer() {
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
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
            <a href="#"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Color Shades</li>
            <li>Calculator</li>
            <li>About Us</li>
            <li>Contact</li>
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
        <div className={styles.links}>
          <h4>Resources</h4>
          <ul>
            <li>FAQ</li>
            <li>Gallery</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <h4>Ready for a Premium Finish?</h4>
          <button>
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
