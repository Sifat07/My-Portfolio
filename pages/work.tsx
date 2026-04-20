import Link from "next/link";
import router from "next/router";
import React from "react";
import Nav from "../components/Nav";
import styles from "./work.module.scss";

const Work = () => {
  return (
    <div className={styles.container}>
      <Nav />

      <h1 className={styles.title}>Featured Work</h1>

      <div className={styles.projectsGrid}>
        {/* Project 1: Madridismo Corner */}
        <div className={styles.projectCard}>
          <h2>Madridismo Corner</h2>
          <p>
            A specialized e-commerce platform built from the ground up for Real Madrid merchandise. 
            Designed and engineered custom Admin Dashboards for seamless order processing and inventory management. 
            Integrated the Pathao Merchant SDK for automated logistics and returned item handling. 
            Utilized Next.js App Router and a robust caching architecture to ensure high performance and a secure checkout flow.
          </p>
          <div className={styles.techStack}>
            <span>Next.js</span>
            <span>Supabase</span>
            <span>Tailwind CSS</span>
            <span>TypeScript</span>
            <span>Pathao SDK</span>
          </div>
          <a href="https://www.madridismocorner.com/" target="_blank" rel="noreferrer" className={styles.link}>
            Visit Website &rarr;
          </a>
        </div>

        {/* Project 2: Peña Madridista de Bangladesh */}
        <div className={styles.projectCard}>
          <h2>Peña Madridista de Bangladesh</h2>
          <p>
            The official website and central hub for the Real Madrid supporters' club in Bangladesh. 
            Engineered a custom Membership System that supports over 5,000 registered fans, complete with secure authentication. 
            Features include an integrated Official Shop, event coordination tools, and real-time news/fixtures updates.
          </p>
          <div className={styles.techStack}>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Fastify</span>
            <span>Prisma</span>
            <span>Pathao SDK</span>
            <span>Tailwind CSS</span>
            <span>AWS S3</span>
            <span>AWS SES</span>
          </div>
          <a href="https://pmadridistabd.com/" target="_blank" rel="noreferrer" className={styles.link}>
            Visit Website &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
