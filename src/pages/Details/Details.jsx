import React, { useEffect, useRef } from "react";
import interact from "interactjs";
import { Popup } from "react-map-gl";
import styles from "./Details.module.css";
import Acitivity from "../../data/activity.json";

function Details({ selectedActivity, setSelectedActivity }) {
  console.log("Details" + selectedActivity);
  console.log(selectedActivity.name);
  const popupContentRef = useRef(null);

  //in separate Datei als Funktion auslagern
  useEffect(() => {
    if (popupContentRef.current) {
      const position = { x: 0, y: 0 };
      let isRotated = false;

      interact(popupContentRef.current)
        .draggable({
          listeners: {
            start(event) {
              console.log(event.type, event.target);
            },
            move(event) {
              position.x += event.dx;
              position.y += event.dy;

              event.target.style.transform = `translate(${position.x}px, ${
                position.y
              }px) ${isRotated ? "rotate(180deg)" : ""}`;
            },
          },
        })
        .on("hold", function (event) {
          isRotated = !isRotated;
          event.target.style.transform = `translate(${position.x}px, ${
            position.y
          }px) ${isRotated ? "rotate(180deg)" : ""}`;
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
          <h1>{selectedActivity.name}</h1>
          <div>{selectedActivity.description}</div>
        </div>
      </Popup>
    </div>
  );
}

export default Details;
