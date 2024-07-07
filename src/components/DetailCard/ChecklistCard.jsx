import React from "react";
import styles from "./DetailCard.module.css";
import Activity from "../../data/activity.json";

//Yara: Aufbau der Checklist Card

const ChecklistCard = ({ activityID }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div>
          <h2>{Activity.details[activityID].name}</h2>
          <h1>What you need</h1>
          <ul className={styles.checkList}>
            {/* Geht die Liste in der Json durch und zeigt alle Elemente an */}
            {Activity.details[activityID].checkList.map((item, index) => (
              <li key={index} className={styles.checkListItem}>
                <input type="checkbox" id={`item-${index}`} />
                <label htmlFor={`item-${index}`}>{item}</label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.horizontalSeparator}></div>
          <div className={styles.bottom}>
            <p>Scan to get Checklist</p>
            <div className={styles.rightSide}>
              <div className={styles.qrCode}>
                <img
                  src={Activity.details[activityID].bookingQR}
                  alt="QR Code"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChecklistCard;
