import React from "react";
import styles from "./DetailCard.module.css";
import Activity from "../../data/activity.json";

const InformationCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
      <h2>{Activity.details[0].name}</h2>
        <h1>Information</h1>
        <p>{Activity.details[0].description}</p>
        <div className={styles.horizontalSeparator}></div>
        <div className={styles.guide}>
          <img src={Activity.details[0].guideImage} alt="Guide" />
          <div className={styles.guideInfo}>
            <strong>Guide</strong><br />
            {Activity.details[0].guideName} ({Activity.details[0].guideAge})
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;