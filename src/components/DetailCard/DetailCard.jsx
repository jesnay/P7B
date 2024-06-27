//Detail Card 1 später umziehen erstmal in Detail.jsx (Popup)
import React from 'react';
// import Testbild from "../../../public/assets/activities/activity_test.JPG";
import Testbild3 from "../../assetTest/Activity-WaterRafting.jpg";
// import Testbild2 from "../../data/activity.json"
import styles from './DetailCard.module.css'; // Make sure this path is correct

const DetailCard = () => {
  return (
    <div className={styles.card}>
      {/* <img src={Testbild3.details[0].activityImage} alt="Water Rafting" /> */}
      <img src={Testbild3} alt="Water Rafting" />
      <div className={styles.cardContent}>
        <h1>Water Rafting</h1>
        <div className={styles.tags}>
          <div className={styles.tag}>Jungle</div>
          <div className={styles.tag}>Water</div>
          <div className={styles.tag}>High-intensity</div>
        </div>
        <div className={styles.details}>
          Front of Maphro Island M.6 Koh Khaow, Muang 83000, Thailand
        </div>
        <div className={styles.time}>
          16 June 2024<br />
          12:00
        </div>
        <div className={styles.participants}>
          <img src="group-icon.png" alt="Participants" />
          8 - 16
        </div>
        <div className={styles.qrCode}>
          <img src="qr-code.png" alt="QR Code" />
        </div>
        <a href="#" className={styles.button}>Let's book!</a>
      </div>
    </div>
  );
};

export default DetailCard;
