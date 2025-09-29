import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.heading}>Get in Touch with Us</h2>

      <div className={styles.container}>
        {/* Contact Form */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Send Us a Message</h3>
          <form className={styles.form}>
            <input type="text" placeholder="Your Name" className={styles.input} />
            <input type="email" placeholder="Your Email" className={styles.input} />
            <input type="text" placeholder="Subject" className={styles.input} />
            <textarea placeholder="Your Message" className={styles.textarea}></textarea>
            <button type="submit" className={styles.button}>Send Message</button>
          </form>
        </div>

        {/* Contact Details + Map */}
        <div className={styles.detailsWrapper}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Our Details</h3>
            <ul className={styles.details}>
              <li><Phone size={18} className={styles.icon}/> +1 (555) 123-4567</li>
              <li><Mail size={18} className={styles.icon}/> info@premiumpowder.com</li>
              <li><MapPin size={18} className={styles.icon}/> 123 Industrial Drive, Coating City, CA 90210, USA</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Find Us Here</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.8610731237377!2d75.57474427494716!3d28.372576495839073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39131bfa72acb817%3A0x778b17578aacb71f!2sMaanjoo%20Farms%2C%20Pilani!5e1!3m2!1sen!2sin!4v1759156360278!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maanjoo Farms Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className={styles.socials}>
        <a href="#"><Facebook size={20} /></a>
        <a href="#"><Instagram size={20} /></a>
        <a href="#"><Linkedin size={20} /></a>
        <a href="#"><Youtube size={20} /></a>
      </div>
    </section>
  );
};

export default Contact;
