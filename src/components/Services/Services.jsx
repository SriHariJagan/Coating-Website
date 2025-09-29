import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Building2,
  Car,
  Wrench,
  Palette,
  Layers,
  Eraser,
  Compass,
  ShieldCheck,
} from "lucide-react";

import styles from "./Services.module.css";

export default function Services() {
  const services = [
    { icon: <Factory className={styles.icon} />, title: "Industrial Coatings", desc: "Durable powder coating for heavy-duty equipment, structural parts, and high-performance applications." },
    { icon: <Building2 className={styles.icon} />, title: "Architectural Finishes", desc: "Architectural-grade finishes for facades, doors, windows, railings, and panels." },
    { icon: <Car className={styles.icon} />, title: "Automotive & Marine", desc: "High-performance coatings for automobiles, motorcycles, marine components, and trailers." },
    { icon: <Wrench className={styles.icon} />, title: "Custom Fabrication", desc: "Specialized powder coat solutions for fabricated products, custom metal parts, and prototypes." },
    { icon: <Palette className={styles.icon} />, title: "Decorative Finishes", desc: "Enhance the appearance of metal items with decorative coatings including textures, gloss levels, metallics, and more." },
    { icon: <Layers className={styles.icon} />, title: "High-Volume Production", desc: "Scalable and efficient powder coating for large-scale manufacturing and mass production." },
    { icon: <Eraser className={styles.icon} />, title: "Powder Coating Removal", desc: "Stripping and removal of old or damaged coatings for surface restoration and refinishing." },
    { icon: <Compass className={styles.icon} />, title: "Consultation & Design", desc: "Expert consultation to help you select the right coating, finish, and design for your requirements." },
    { icon: <ShieldCheck className={styles.icon} />, title: "Quality Assurance", desc: "Stringent testing and inspection to ensure consistent quality, durability, and performance." },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <section className={styles.services}>
      <div className={styles.header}>
        <h2>Comprehensive Powder Coating Services</h2>
        <p>Explore our wide range of professional powder coating solutions tailored to deliver superior durability and exceptional finishes for every application.</p>
      </div>

      <h3 className={styles.subheading}>Our Expert Solutions</h3>

      <motion.div className={styles.grid} variants={container} initial="hidden" animate="show">
        {services.map((service, idx) => (
          <motion.div key={idx} variants={item}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                {service.icon}
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
                {/* <button className={styles.button}>Learn More</button> */}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
