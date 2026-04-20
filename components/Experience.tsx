import React from "react";
import styles from "./Experience.module.scss";

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.experienceItem}>
        <div className={styles.company}>
          <h3>Ngaze, Inc.</h3>
          <p>(12/2022 - Present)</p>
        </div>
        <h2>Software Engineer</h2>
        <p>
          Collaborated on multi-tenant SaaS architecture implementing subdomain routing and tenant-aware UIs. Built core LMS features including classroom workflows and live interactions. Enhanced platform usability by migrating styles to Tailwind CSS and developing a Lexical-based editor. Improved engineering culture through code reviews and mentoring.
        </p>
      </div>

      <div className={styles.experienceItem} style={{ marginTop: '2rem' }}>
        <div className={styles.company}>
          <h3>Ngaze, Inc.</h3>
          <p>(09/2021 - 11/2022)</p>
        </div>
        <h2>Junior Software Engineer</h2>
        <p>
          Focused on frontend engineering, building admin dashboards and community features using React, Next.js, and SCSS. Translated Figma designs into responsive UIs and integrated REST APIs. Improved design consistency by scaling shared UI libraries across web and admin apps.
        </p>
      </div>
    </div>
  );
};

export default Experience;
