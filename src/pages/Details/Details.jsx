import React, { useEffect, useRef } from "react";
import interact from "interactjs";
import { Popup } from "react-map-gl";
import styles from "./Details.module.css";

//Jenny: Popup anhängig der geklickten Aktivität anzeigen
import DetailCard from "../../components/DetailCard/DetailCard";

function Details({ selectedActivity, setSelectedActivity }) {
  console.log("Details" + selectedActivity);
  console.log(selectedActivity.name);
  const popupContentRef = useRef(null);

  useEffect(() => {
    if (popupContentRef.current) {
      let isRotated = false;

      interact(popupContentRef.current).on("tap", function (event) {
        isRotated = !isRotated;
        const rotationDegree = isRotated ? 180 : 0;
        event.currentTarget.style.transform = `rotate(${rotationDegree}deg)`;
      });
    }

  }, []);

  return (
    <div className={styles.Details}>
      <Popup
        latitude={selectedActivity.latitude}
        longitude={selectedActivity.longitude}
        closeOnClick={false}
        onClose={() => setSelectedActivity(null)}
        anchor="top"
      >
        <div ref={popupContentRef} className={`${styles.DraggablePopup}`}>
          <DetailCard />
        </div>
      </Popup>
    </div>
  );
}

export default Details;
