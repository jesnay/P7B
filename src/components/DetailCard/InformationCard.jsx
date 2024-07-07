import React from "react";
import styles from "./DetailCard.module.css";
import Activity from "../../data/activity.json";

//Yara: Aufbau der Information Card

const InformationCard = ({ activityID }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div>
          <h2>{Activity.details[activityID].name}</h2>
          <h1>Information</h1>
          <p className="description">
            {Activity.details[activityID].description}
          </p>
        </div>
        <div>
          <div className={styles.horizontalSeparator}></div>
          <div className={styles.guide}>
            <img src={Activity.details[activityID].guideImage} alt="Guide" />
            <div className={styles.guideInfo}>
              <p>
                <strong>Guide</strong>
                <br />
                {Activity.details[activityID].guideName} (
                {Activity.details[activityID].guideAge})
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
