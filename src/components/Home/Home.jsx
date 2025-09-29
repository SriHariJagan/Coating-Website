import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Premium Powder <br /> Coating Solutions
          </h1>
          <p>
            Transform your surfaces with durable, high-quality, and 
            environmentally friendly powder coatings for every industry.
          </p>
          <button className={styles.ctaBtn}>Get a Quote</button>
        </div>
        <div className={styles.heroImage}></div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <h2>Our Core Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <span className={styles.icon}>🏭</span>
            <h3>Industrial Coating</h3>
            <p>Durable coatings for machinery, equipment, and tools.</p>
          </div>
          <div className={styles.serviceCard}>
            <span className={styles.icon}>🚗</span>
            <h3>Automotive Parts</h3>
            <p>High-performance coatings for auto parts and accessories.</p>
          </div>
          <div className={styles.serviceCard}>
            <span className={styles.icon}>🎨</span>
            <h3>Custom Finishes</h3>
            <p>Personalized coating solutions for unique projects.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projects}>
        <h2>Our Recent Projects</h2>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <img src="https://wallpapercave.com/wp/wp13427311.png" alt="Automotive" />
            <p>Automotive Parts</p>
          </div>
          <div className={styles.projectCard}>
            <img src="https://wallpapercave.com/wp/wp13427311.png" alt="Machinery" />
            <p>Industrial Machinery</p>
          </div>
          <div className={styles.projectCard}>
            <img src="https://wallpapercave.com/wp/wp13427311.png" alt="Furniture" />
            <p>Outdoor Furniture</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Ready for a Superior Finish?</h2>
        <p>
          Partner with Premium Powder Coating Solutions for your industry-specific 
          and custom coating needs.
        </p>
        <button className={styles.ctaBtn}>Contact Us Today</button>
      </section>
    </div>
  );
}
