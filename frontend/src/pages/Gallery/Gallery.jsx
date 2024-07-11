import React, { useEffect, useRef } from "react";
import styles from "./Gallery.module.css";
import { Popup } from "react-map-gl";
import GalleryImage from "../../components/GalleryImage/GalleryImage";
import interact from "interactjs";

//Yara: Ermöglichung der Rotation von Elementen bei längerem Gedrückthalten
//Jenny: Aufbau der Gallerie -> Zeigen von Bildern & Videos als Erinnerungs- und Reflektionsmöglichkeit; Einbindung der Daten in Abhängigkeit der geklickten Aktivität;

function Gallery({ selectedActivity, setSelectedActivity }) {
  //Rotieren des Elements, wenn länger gedrückt gehalten wird
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
          {/* Aufrufen der Galleriebilder */}

          <GalleryImage activityID={selectedActivity.id} />
        </div>
      </Popup>
    </div>
  );
}

export default Gallery;
