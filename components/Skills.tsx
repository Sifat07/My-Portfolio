import React from "react";
import {
  SiCss3,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiStorybook,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPrisma,
  SiFastify,
  SiMysql,
  SiDocker,
  SiGooglecloud,
  SiGithubactions,
  SiSupabase,
} from "react-icons/si";
import styles from "./Skills.module.scss";
import { DiResponsive } from "react-icons/di";
import { FaSass } from "react-icons/fa";

const Skills = () => {
  return (
    <div className={styles.skillContainers}>
      <div className={styles.skillContainer1}>
        <div className={styles.skill} title="React">
          <SiReact fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "95%" }}></div>
          </div>
        </div>
        <div className={styles.skill} title="Next.js">
          <SiNextdotjs fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className={styles.skill} title="TypeScript">
          <SiTypescript fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className={styles.skill} title="Sass">
          <SiSass fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className={styles.skill} title="Tailwind CSS">
          <SiTailwindcss fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className={styles.skill} title="Framer Motion">
          <SiFramer fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "80%" }}></div>
          </div>
        </div>
      </div>
      <div className={styles.skillContainer2}>
        <div className={styles.skill} title="Node.js">
          <SiNodedotjs fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className={styles.skill} title="Fastify">
          <SiFastify fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className={styles.skill} title="Prisma">
          <SiPrisma fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className={styles.skill} title="MySQL">
          <SiMysql fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "75%" }}></div>
          </div>
        </div>
        <div className={styles.skill} title="Supabase">
          <SiSupabase fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className={styles.skill} title="Docker">
          <SiDocker fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "70%" }}></div>
          </div>
        </div>
        <div className={styles.skill} title="GCP">
          <SiGooglecloud fill="#e8c99b" size="2.5rem" className={styles.icon} />
          <div className={styles.progressBarContainer}>
            <div className={styles.progress} style={{ width: "65%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
