import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import Map, { Marker, Popup } from "react-map-gl";
import styles from "./Map.module.css";
import Activity from "../../data/activity.json";
import OptionButtons from "../../components/OptionButtons/OptionButtons";

//Jenny: Integration der Mapbox API, Generierung der Aktivitäten-Markers

function ActivityMap() {
  const [selectedActivity, setSelectedActivity] = useState(null);

  //Definiert den Startpunkt der Map
  const [viewport, setViewport] = useState({
    latitude: 7.9411625,
    longitude: 98.4223534,
    width: "100vw",
    height: "100vh",
    zoom: 13,
  });

  const token = process.env.REACT_APP_MAPBOX_TOKEN;

  //Checkt ob der API Token vorhanden ist
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
          //Zeigt alle Aktivitäten aus der Json auf der Map an
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
                }}
              >
                <img src={item.markerImage} /> 
                {/* ^Das ist halt eigentlich ein SVG und brauch andere Daten wenn es als solches behandel werden soll */}
              </button>
            </Marker>
          );
        })}

        {selectedActivity ? (
          //Wenn eine Aktivität angeklickt wurde werden 3 Optionen (details, profiles und gallery) zur auswahl angezeigt
          <div className={styles.Options}>
            <OptionButtons
              selectedActivity={selectedActivity}
              setSelectedActivity={setSelectedActivity}
            ></OptionButtons>
          </div>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default ActivityMap;
