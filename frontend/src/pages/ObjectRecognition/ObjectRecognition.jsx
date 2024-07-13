import React, { useState, useEffect } from "react";
import GalleryImg from "./assets/Gallery.png";
import ProfileImg from "./assets/Profiles.png";
import Map from "./assets/Map.png";
import { ReactComponent as Marker } from "./assets/Cuisine.svg";
import { ReactComponent as Cards } from "./assets/Cards.svg";
import styles from "./ObjectRecognition.module.css";

//Jenny: Testen der Mulitouchfunktionen, sodass ein Objekt genutzt werden kann, um die Aktivitäten zu öffnen und gleichzeitig das Interface genutzt werden kann. Wird das Pbjekt entfernt schließt sich alles automatisch

function ObjectRecognition() {
  const [touchPositions, setTouchPositions] = useState([]);
  const [firstTouch, setFirstTouch] = useState(null);
  const [touchedElement, setTouchedElement] = useState(null);
  const [showElement, setShowElement] = useState(null);
  const [hideOptions, setHideOptions] = useState(null);

  //Die Touchpunkte auf der Oberfläche werden von dem Tuio-Client geholt und gespeichert. Jeder neue Touchpunkt wird gespeichert
  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3000")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then((data) => {
          console.log("Response:", data);
          if (data.trim() !== "") {
            const tuioData = JSON.parse(data);
            const newTouchPositions = [];
            tuioData.elements.forEach((element) => {
              if (
                element.address === "/tuio/2Dcur" &&
                element.args[0].value === "set"
              ) {
                const touchID = element.args[1].value;
                const xPosition = element.args[2].value;
                const yPosition = element.args[3].value;

                console.log("elements: ", element);

                newTouchPositions.push({ touchID, xPosition, yPosition });
              }
            });
            setTouchPositions(newTouchPositions);

            if (newTouchPositions.length === 0) {
              setFirstTouch(null);
              setTouchedElement(null);
              setShowElement(null);
              setHideOptions(null);
            }
          } else {
            console.warn("Fetched data is empty.");
            setFirstTouch(null);
            setTouchedElement(null);
            setShowElement(null);
            setHideOptions(null);
          }
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
          setFirstTouch(null);
          setTouchedElement(null);
          setShowElement(null);
          setHideOptions(null);
        });
    };

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  //Hier wird statisch getestet ob ich ein Touch innerhalb bestimmter Punkte befindet, um eine Aktion auszulösen
  //Für jeden Touchpunkt wird geprüft, ob er sich auf dem Marker der Map befindet. Wenn ja, öffnen sich die Optionen und es wird wiederrum geprüft ob ein zweiter Touchpunkt sich auf einem der Optionen bedinfen. Daraufhin wird entweder die Details, die Gallery oder die Profile geöffnet

  useEffect(() => {
    let newFirstTouch = null;
    touchPositions.forEach((position) => {
      if (
        position.xPosition >= 0.39068603515625 &&
        position.xPosition <= 0.46661376953125 &&
        position.yPosition >= 0.371673583984375 &&
        position.yPosition <= 0.507720947265625
      ) {
        if (!newFirstTouch) {
          newFirstTouch = { ...position, isTouched: true };
        }
      }
    });

    if (newFirstTouch) {
      setFirstTouch(newFirstTouch);
      setTouchedElement(1);
    } else {
      setFirstTouch(null);
      setTouchedElement(null);
      setShowElement(null);
    }

    touchPositions.forEach((position) => {
      if (
        position.xPosition >= 0.46795654296875 &&
        position.xPosition <= 0.564117431640625 &&
        position.yPosition >= 0.314239501953125 &&
        position.yPosition <= 0.36737060546875
      ) {
        if (newFirstTouch) {
          setShowElement("gallery");
          setHideOptions("gallery");
        }
      } else if (
        position.xPosition >= 0.376495361328125 &&
        position.xPosition <= 0.46942138671875 &&
        position.yPosition >= 0.505401611328125 &&
        position.yPosition <= 0.5544443359375
      ) {
        if (newFirstTouch) {
          setShowElement("details");
          setHideOptions("details");
        }
      } else if (
        position.xPosition >= 0.250946044921875 &&
        position.xPosition <= 0.383514404296875 &&
        position.yPosition >= 0.314239501953125 &&
        position.yPosition <= 0.37225341796875
      ) {
        if (newFirstTouch) {
          setShowElement("profiles");
          setHideOptions("profiles");
        }
      }
    });
  }, [touchPositions]);

  //Darstellung der Elemente in Abhängigkeit voneinander

  return (
    <div className={styles.ObjectRecognition}>
      <img src={Map} className={styles.Map} />
      <div className="text">
        <h2>Touch Tracker</h2>
        {touchPositions.map((pos) => (
          <p key={pos.touchID}>
            Touch ID: {pos.touchID}, X: {pos.xPosition}, Y: {pos.yPosition}
          </p>
        ))}
      </div>

      <button className="one">
        <Marker className="App-logo" />
      </button>
      {firstTouch && touchedElement === 1 && (
        <div className={styles.OptionBtn}>
          <div className="div1">
            <button
              className={hideOptions === "profiles" ? "inactive" : "active"}
            >
              EXPERIENCED
            </button>
            <button
              className={hideOptions === "gallery" ? "inactive" : "active"}
            >
              GALLERY
            </button>
          </div>
          <div className="div2">
            <button
              className={hideOptions === "details" ? "inactive" : "active"}
            >
              DETAILS
            </button>
          </div>
          {showElement === "details" && <Cards className={styles.CardsImg} />}
          {showElement === "gallery" && (
            <img src={GalleryImg} className={styles.GalleryImg} />
          )}
          {showElement === "profiles" && (
            <img src={ProfileImg} className={styles.ProfileImg} />
          )}
        </div>
      )}
    </div>
  );
}

export default ObjectRecognition;
