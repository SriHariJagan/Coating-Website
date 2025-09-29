import React from "react";
import styles from "./About.module.css";

import {
  Hammer,
  Users,
  Lightbulb,
  ShieldCheck,
  Leaf,
  Gauge,
} from "lucide-react";

const team = [
  {
    name: "Andrew Tom Deo",
    role: "Managing Director",
    img: "https://thumbs.dreamstime.com/b/teamwork-business-team-meeting-unity-jigsaw-puzzle-concept-47350521.jpg",
  },
  {
    name: "Jems Black",
    role: "General Manager",
    img: "https://thumbs.dreamstime.com/b/teamwork-business-team-meeting-unity-jigsaw-puzzle-concept-47350521.jpg",
  },
  {
    name: "Robert Mil",
    role: "Technical Manager",
    img: "https://thumbs.dreamstime.com/b/teamwork-business-team-meeting-unity-jigsaw-puzzle-concept-47350521.jpg",
  },
  {
    name: "Elon Mars",
    role: "Project Manager",
    img: "https://thumbs.dreamstime.com/b/teamwork-business-team-meeting-unity-jigsaw-puzzle-concept-47350521.jpg",
  },
];

const principles = [
  {
    icon: <Hammer className={styles.icon} />,
    title: "Quality Craftsmanship",
    desc: "Delivering excellence with every project we take on.",
  },
  {
    icon: <Users className={styles.icon} />,
    title: "Customer Focus",
    desc: "Putting our clients at the heart of everything we do.",
  },
  {
    icon: <Lightbulb className={styles.icon} />,
    title: "Innovation",
    desc: "Bringing fresh ideas and solutions to the industry.",
  },
  {
    icon: <ShieldCheck className={styles.icon} />,
    title: "Integrity",
    desc: "Committed to honesty, fairness, and transparency.",
  },
  {
    icon: <Leaf className={styles.icon} />,
    title: "Sustainability",
    desc: "Ensuring eco-friendly and responsible operations.",
  },
  {
    icon: <Gauge className={styles.icon} />,
    title: "Efficiency",
    desc: "Maximizing productivity without compromising quality.",
  },
];

const About = () => {
  return (
    <div className={styles.about}>
      {/* Commitment */}
      <section className={styles.section}>
        <h2 className={styles.heading}>Our Commitment to Excellence</h2>
        <p className={styles.text}>
          At <span className={styles.highlight}>Premium Powder Coating</span>,
          excellence is not just a goal but a promise. We are committed to
          providing high-quality coating solutions that exceed client
          expectations.
        </p>
      </section>

      {/* Journey */}
      <section className={styles.sectionAlt}>
        <h2 className={styles.heading}>Our Journey to Industrial Perfection</h2>
        <div className={styles.columns}>
          <p className={styles.text}>
            Since our founding, we have dedicated ourselves to becoming leaders
            in the industry, combining expertise, innovation, and a commitment
            to sustainability.
          </p>
          <p className={styles.text}>
            Through years of experience, we have refined our processes to
            deliver outstanding results while prioritizing customer satisfaction
            and long-term relationships.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            pariatur reiciendis voluptatum animi numquam quaerat dicta
            praesentium voluptates et maiores neque omnis explicabo, magnam,
            quos at alias, minus aliquid! Consectetur.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className={styles.section}>
        <h2 className={styles.heading}>Our Guiding Principles</h2>
        <div className={styles.grid}>
          {principles.map((p, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className={styles.sectionAlt}>
        <h2 className={styles.heading}>Meet Our Expert Team</h2>
        <div className={styles.teamGrid}>
          {team.map((t, i) => (
            <div key={i} className={styles.teamCard}>
              <img src={t.img} alt={t.name} className={styles.teamImg} />
              <h3>{t.name}</h3>
              <p>{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Why Clients Trust{" "}
          <span className={styles.highlight}>
            Premium Powder Coating Solutions
          </span>
        </h2>
        <div className={styles.columns}>
          <ul className={styles.list}>
            <li>Consistent quality across every project we deliver.</li>
            <li>Customer-focused service with attention to detail.</li>
            <li>Eco-friendly practices and sustainable operations.</li>
            <li>Reliable, efficient, and on-time project delivery.</li>
          </ul>

          <ul className={styles.list}>
            <li>Experienced and highly skilled professional team.</li>
            <li>State-of-the-art technology and equipment.</li>
            <li>Transparent pricing and trustworthy partnerships.</li>
            <li>Commitment to long-term client relationships.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
