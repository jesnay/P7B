import React, { useEffect, useRef } from "react";
import styles from "./Gallery.module.css";
import { Popup } from "react-map-gl";
import GalleryImage from "../../components/GalleryImage/GalleryImage";

import interact from "interactjs";

//Jenny: Aufbau der Bilder Gallerie
function Gallery({ selectedActivity, setSelectedActivity }) {
  const popupContentRef = useRef(null);

  useEffect(() => {
    if (popupContentRef.current) {
      let isRotated = false;

      interact(popupContentRef.current).on("hold", function (event) {
        isRotated = !isRotated;
        const rotationDegree = isRotated ? 180 : 0;
        event.currentTarget.style.transform = `rotate(${rotationDegree}deg)`;
      });
    }
  }, []);

  return (
    <div className={styles.Gallery}>
      <Popup
        latitude={selectedActivity.latitude}
        longitude={selectedActivity.longitude}
        closeOnClick={false}
        onClose={() => setSelectedActivity(null)}
        anchor="bottom-left"
        className={styles.PopupCustom}
        style={{ maxWidth: "600px" }}
      >
        <div ref={popupContentRef} className={styles.Images}>
          {" "}
          <GalleryImage />
        </div>
      </Popup>
    </div>
  );
}

export default Gallery;
