import React from "react";
import styles from "./DetailCard.module.css";
import Activities from "../../data/activity.json";

function DetailCard() {
  console.log(Activities.details[0].tags);
  console.log(Activities.gallery);
  console.log(Activities.profiles);
  return <div className={styles.DetailCard}></div>;
}

export default DetailCard;
