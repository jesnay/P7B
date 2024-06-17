import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import Map, { Marker } from "react-map-gl";
import "./App.css";
import Details from "./pages/Details/Details";
import ActivityMap from "./pages/Map/Map";

function App() {
  return (
    <div>
      <ActivityMap></ActivityMap>
    </div>
  );
}

export default App;
