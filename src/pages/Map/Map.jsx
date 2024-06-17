import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import Map, { Marker, Popup } from "react-map-gl";
import styles from "./Map.module.css";
import Details from "../Details/Details";

function ActivityMap() {
  const [viewport, setViewport] = useState({
    latitude: 7.9411625,
    longitude: 98.4223534,
    width: "100vw",
    height: "100vh",
    zoom: 13,
  });

  const [selectedActivity, setSelectedActivity] = useState(null);

  const token = process.env.REACT_APP_MAPBOX_TOKEN;

  if (!token) {
    return (
      <div>
        Mapbox token is missing. Please check your environment variables.
      </div>
    );
  }
  return (
    <div className={styles.Map}>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={token}
        onMove={(evt) => setViewport(evt.viewState)}
        mapStyle="mapbox://styles/stjesnay/clxg1gs3y006901qrcfkpap2j"
      >
        <Marker longitude={98.4223534} latitude={7.9411625} anchor="bottom">
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelectedActivity("Activity1");
              console.log(selectedActivity);
            }}
          >
            <img src="/assets/markers/test_marker.svg" />
          </button>
        </Marker>
        {selectedActivity ? (
          <Details setSelectedActivity={setSelectedActivity}></Details>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default ActivityMap;

/*<Popup latitude={7.9411625} longitude={98.4223534}>
        <div>activity</div>
      </Popup>*/
