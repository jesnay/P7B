import React, { useEffect, useRef } from "react";
import interact from "interactjs";
import { Popup } from "react-map-gl";
import styles from "./Details.module.css";

function Details({ setSelectedActivity }) {
  const popupContentRef = useRef(null);

  //in separate Datei als Funktion auslagern
  useEffect(() => {
    if (popupContentRef.current) {
      const position = { x: 0, y: 0 };
      let isRotated = false;

      interact(popupContentRef.current).draggable({
        listeners: {
          start(event) {
            console.log(event.type, event.target);
          },
          move(event) {
            position.x += event.dx;
            position.y += event.dy;

            event.target.style.transform = `translate(${position.x}px, ${position.y}px) ${isRotated ? 'rotate(180deg)' : ''}`;
          },
        },
      }).on('hold', function (event) {
        isRotated = !isRotated;
        event.target.style.transform = `translate(${position.x}px, ${position.y}px) ${isRotated ? 'rotate(180deg)' : ''}`;
      });
    }
  }, []);

  return (
    <Popup
      latitude={7.9411625}
      longitude={98.4223534}
      closeOnClick={false}
      onClose={() => setSelectedActivity(null)}
      anchor="top"
    >
      <div ref={popupContentRef} className={`${styles.DraggablePopup}`}>
        <h1>Headline</h1>
        <div>This is an example text as information</div>
      </div>
    </Popup>
  );
}

export default Details;
