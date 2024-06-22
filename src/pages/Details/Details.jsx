import React, { useEffect, useRef } from "react";
import interact from "interactjs";
import { Popup } from "react-map-gl";
import styles from "./Details.module.css"; // Ensure correct import path

function Details({ setSelectedActivity }) {
  const popupRef = useRef(null);

  useEffect(() => {
    if (popupRef.current) {
      let isRotated = false;

      interact(popupRef.current).on('tap', function (event) {
        isRotated = !isRotated;
        const rotationDegree = isRotated ? 180 : 0;
        event.currentTarget.style.transform = `rotate(${rotationDegree}deg)`;
      });
    }
  }, []);

  return (
    <div className={styles.Container}>
      <Popup
        latitude={7.9411625}
        longitude={98.4223534}
        closeOnClick={false}
        onClose={() => setSelectedActivity(null)}
        anchor="top"
      >
        <div ref={popupRef} className={styles.HeaderContainer}>
          <div className={styles.Content}>
            <h1>Headline</h1>
            <p>This is an example text as information</p>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default Details;
