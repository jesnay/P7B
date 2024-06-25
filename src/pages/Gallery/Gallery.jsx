import React from "react";
import styles from "./Gallery.module.css";
import { Popup } from "react-map-gl";
import GalleryImage from "../../components/GalleryImage/GalleryImage";

//Jenny: Aufbau der Bilder Gallerie
function Gallery({ selectedActivity, setSelectedActivity }) {
  return (
    <div className={styles.Gallery}>
      <Popup
        latitude={selectedActivity.latitude}
        longitude={selectedActivity.longitude}
        closeOnClick={false}
        onClose={() => setSelectedActivity(null)}
        anchor="bottom-left"
        className={styles.PopupCustom}
      >
        <GalleryImage />
      </Popup>
    </div>
  );
}

export default Gallery;
