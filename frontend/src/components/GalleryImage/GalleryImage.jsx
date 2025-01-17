import React from "react";
import styles from "./GalleryImage.module.css";
import galleryImage from "../../data/activity.json";

//Jenny: Anzeigen der Gallerie Bilder

function GalleryImage({ activityID }) {
  return (
    <div className={styles.GalleryImage}>
      <img src={galleryImage.gallery[activityID].images} alt="Gallery"></img>
    </div>
  );
}

export default GalleryImage;
