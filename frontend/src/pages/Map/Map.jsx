import React, { useState, useEffect, useRef } from "react";
import ReactMapGL from "react-map-gl";
import Map, { Marker, Popup } from "react-map-gl";
import styles from "./Map.module.css";
import Activity from "../../data/activity.json";
import OptionButtons from "../../components/OptionButtons/OptionButtons";

//Jenny: Integration der Mapbox API; Generierung der Aktivitäten-Markers; Popup abhängig der geklickten Aktivität anzeigen
function ActivityMap() {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const token = process.env.REACT_APP_MAPBOX_TOKEN;
  const mapRef = useRef();

  //Definiert den Startpunkt der Map
  const [viewport, setViewport] = useState({
    latitude: 7.82984,
    longitude: 98.403779,
    width: "100vw",
    height: "100vh",
    pitch: 55,
    zoom: 13,
  });

  //Checkt ob der API Token vorhanden ist
  if (!token) {
    return (
      <div>
        Mapbox token is missing. Please check your environment variables.
      </div>
    );
  }

  //Setzt die Aktivität wieder zurück, wenn irgendwo auf die Map geklickt wird.
  const handleMapClick = (event) => {
    setSelectedActivity(null);
  };

  //Wird ein Marker angeklickt, bewegt sich die Map so, dass der Marker zentriert ist
  const centerMap = (item) => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [item.longitude, item.latitude],
        zoom: 13,
        speed: 1.2,
        curve: 1.42,
        easing: (t) => t,
      });
    }
  };

  return (
    <div className={styles.Map}>
      <ReactMapGL
        {...viewport}
        ref={mapRef}
        mapboxAccessToken={token}
        onMove={(evt) => setViewport(evt.viewState)}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        onClick={handleMapClick}
        mapStyle="mapbox://styles/stjesnay/clxizeum100ae01pd78nn825u"
        dragRotate={true}
        touchRotate={true}
        touchZoomRotate={true}
        touchPitch={true}
        /*minZoom={10}*/
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
                  e.stopPropagation();
                  centerMap(item);
                }}
              >
                <img src={item.markerImage} />
              </button>
            </Marker>
          );
        })}

        {selectedActivity ? (
          //Wenn eine Aktivität angeklickt wurde werden 3 Optionen (details, profiles und gallery) zur Auswahl angezeigt
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
