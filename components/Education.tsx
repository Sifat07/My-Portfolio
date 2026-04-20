import React from "react";
import styles from "./Education.module.scss";

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.institute}>
          <h3>Institute Of Information Technology, University Of Dhaka</h3>
          <p>( 2021 )</p>
        </div>
        <h2>Master in Information Technology (MIT)</h2>
        <p>
          Completed Master in Information Technology.
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.institute}>
          <h3>American International University-Bangladesh</h3>
          <p>( 2018 )</p>
        </div>
        <h2>B.Sc. in Computer Science & Engineering</h2>
        <p>
          Completed Bachelor of Science in Computer Science & Engineering.
        </p>
      </div>
    </div>
  );
};

export default Education;
