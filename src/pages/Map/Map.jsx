import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import Map, { Marker, Popup } from "react-map-gl";
import styles from "./Map.module.css";
import Details from "../Details/Details";
import Activity from "../../data/activity.json";

//Jenny: Integration der Mapbox API, Generierung der Aktivitäten-Markers

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
        mapStyle="mapbox://styles/stjesnay/clxg1yzc2007301pc4ard48tg"
      >
        {Activity.details.map((item) => {
          return (
            <Marker
              key={item.id}
              longitude={item.longitude}
              latitude={item.latitude}
              anchor="bottom"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedActivity(item);
                  console.log(selectedActivity);
                }}
              >
                <img src={item.markerImage} />
              </button>
            </Marker>
          );
        })}

        {selectedActivity ? (
          <Details
            selectedActivity={selectedActivity}
            setSelectedActivity={setSelectedActivity}
          ></Details>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default ActivityMap;
