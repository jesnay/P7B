import React, { useEffect, useRef } from "react";
import styles from "./GalleryImage.module.css";
import testImage from "../../data/activity.json";

function GalleryImage() {
  return (
    <div className={styles.GalleryImage}>
      <img src={testImage.gallery[0].images[0]}></img>
    </div>
  );
}

export default GalleryImage;
