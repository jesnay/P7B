import React, { useState } from "react";
import styles from "./App.module.css";
import ActivityMap from "./pages/Map/Map";
import ObjectRecognition from "./pages/ObjectRecognition/ObjectRecognition";

//Aufrufen der Map. Alle weiteren Komponenten sind abhängig von der Map
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
        //Add Description how to use
        <ObjectRecognition />
      )}

      <button className={styles.Btn} onClick={handleToggle}>
        Click me to change Prototype
      </button>
    </div>
  );
}

export default App;
