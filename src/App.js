import React, { useState } from "react";
import styles from "./App.css";
import ActivityMap from "./pages/Map/Map";

//Aufrufen der Map. Alle weiteren Komponenten sind abhängig von der Map
function App() {
  return (
    <div>
      <ActivityMap></ActivityMap>
    </div>
  );
}

export default App;
