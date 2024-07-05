import React from "react";
import styles from "./DetailCard.module.css";
import Activity from "../../data/activity.json";

const ChecklistCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
      <h2>{Activity.details[0].name}</h2>
        <h1>What you need</h1>
        <ul className={styles.checkList}>
          {Activity.details[0].checkList.map((item, index) => (
            <li key={index} className={styles.checkListItem}>
              <input type="checkbox" id={`item-${index}`} />
              <label htmlFor={`item-${index}`}>{item}</label>
            </li>
          ))}
        </ul>
        {/* <p>{Activity.details[0].checkList}</p> */}
        <div className={styles.horizontalSeparator}></div>
          <div className={styles.leftSide}>
            <p>Scan to get Checklist</p>
            <div className={styles.rightSide}>
            <div className={styles.qrCode}>
            <img src={Activity.details[0].bookingQR} alt="QR Code" />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChecklistCard;