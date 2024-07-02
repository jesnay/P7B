import React from 'react';
import styles from './DetailCard.module.css'; // Make sure this path is correct
// import Testbild3 from '../../assetTest/Activity-WaterRafting.jpg';
// import groupIcon from '../../assetTest/group-icon.png';
// import qrCode from '../../assetTest/qr-code.png';
import DetailsActivity from '../../data/activity.json';

const DetailCard = () => {
  return (
    <div className={styles.card}>
      <img src={DetailsActivity.details[0].activityImage} alt="Water Rafting" />
      <div className={styles.cardContent}>
        <h1>Water Rafting</h1>
        <div className={styles.tags}>
          <div className={styles.tag}>Jungle</div>
          <div className={styles.tag}>Water</div>
          <div className={styles.tag}>High-intensity</div>
        </div>
        <div className={styles.details}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 97 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.locationIcon}
          >
            <path
              d="M43.5156 127.377C6.81273 73.8946 0 68.4056 0 48.75C0 21.826 21.7141 0 48.5 0C75.2859 0 97 21.826 97 48.75C97 68.4056 90.1873 73.8946 53.4844 127.377C51.0758 130.874 45.9239 130.874 43.5156 127.377ZM48.5 69.0625C59.6608 69.0625 68.7083 59.9683 68.7083 48.75C68.7083 37.5317 59.6608 28.4375 48.5 28.4375C37.3392 28.4375 28.2917 37.5317 28.2917 48.75C28.2917 59.9683 37.3392 69.0625 48.5 69.0625Z"
              fill="#282625"
            />
          </svg>
          <span>Front of Maphro Island M.6 Koh Khaow, Muang 83000, Thailand</span>
        </div>
        <div className={styles.time}>
          16 June 2024<br />
          12:00
        </div>
        <svg width="25" 
            height="19"
            viewBox="0 0 25 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.ParticipantsIcon}
          ><path d="M3.75 8.25C5.12891 8.25 6.25 7.12891 6.25 5.75C6.25 4.37109 5.12891 3.25 3.75 3.25C2.37109 3.25 1.25 4.37109 1.25 5.75C1.25 7.12891 2.37109 8.25 3.75 8.25ZM21.25 8.25C22.6289 8.25 23.75 7.12891 23.75 5.75C23.75 4.37109 22.6289 3.25 21.25 3.25C19.8711 3.25 18.75 4.37109 18.75 5.75C18.75 7.12891 19.8711 8.25 21.25 8.25ZM22.5 9.5H20C19.3125 9.5 18.6914 9.77734 18.2383 10.2266C19.8125 11.0898 20.9297 12.6484 21.1719 14.5H23.75C24.4414 14.5 25 13.9414 25 13.25V12C25 10.6211 23.8789 9.5 22.5 9.5ZM12.5 9.5C14.918 9.5 16.875 7.54297 16.875 5.125C16.875 2.70703 14.918 0.75 12.5 0.75C10.082 0.75 8.125 2.70703 8.125 5.125C8.125 7.54297 10.082 9.5 12.5 9.5ZM15.5 10.75H15.1758C14.3633 11.1406 13.4609 11.375 12.5 11.375C11.5391 11.375 10.6406 11.1406 9.82422 10.75H9.5C7.01562 10.75 5 12.7656 5 15.25V16.375C5 17.4102 5.83984 18.25 6.875 18.25H18.125C19.1602 18.25 20 17.4102 20 16.375V15.25C20 12.7656 17.9844 10.75 15.5 10.75ZM6.76172 10.2266C6.30859 9.77734 5.6875 9.5 5 9.5H2.5C1.12109 9.5 0 10.6211 0 12V13.25C0 13.9414 0.558594 14.5 1.25 14.5H3.82422C4.07031 12.6484 5.1875 11.0898 6.76172 10.2266Z" fill="black"/>

      </svg>
          8 - 16
        {/* </div> */}
        <div className={styles.qrCode}>
          {/* <img src={qrCode} alt="QR Code" /> */}
        </div>
        <a href="#" className={styles.button}>Let's book!</a>
      </div>
    </div>
  );
};

export default DetailCard;