import React, { useState } from "react";
import styles from "./App.module.css";
import ActivityMap from "./pages/Map/Map";
import ObjectRecognition from "./pages/ObjectRecognition/ObjectRecognition";

//Hier wird der jeweilige Prototyp aufgrufen. Es kann per Button gewählt werden zwischen den 2 Prototypen
function App() {
  const [showMap, setShowMap] = useState(true);

  const handleToggle = () => {
    setShowMap(!showMap);
  };

  return (
    <div className={styles.AppContainer}>
      {showMap ? (
        <ActivityMap className={styles.Prototype}></ActivityMap>
      ) : (
        <ObjectRecognition />
      )}

      <button className={styles.Btn} onClick={handleToggle}>
        Click me to change Prototype
      </button>
    </div>
  );
}

export default App;
