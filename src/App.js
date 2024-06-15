import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import Map, { Marker } from "react-map-gl";
import "./App.css";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 7.9411625,
    longitude: 98.4223534,
    width: "100vw",
    height: "100vh",
    zoom: 13,
  });

  const token = process.env.REACT_APP_MAPBOX_TOKEN;
  console.log("Token: " + token);

  if (!token) {
    return (
      <div>
        Mapbox token is missing. Please check your environment variables.
      </div>
    );
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={token}
        onMove={(evt) => setViewport(evt.viewState)}
        mapStyle="mapbox://styles/stjesnay/clxg1gs3y006901qrcfkpap2j"
      >
        <Marker longitude={98.4223534} latitude={7.9411625} anchor="bottom">
          <img src="/assets/markers/test_marker.svg" />
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default App;
