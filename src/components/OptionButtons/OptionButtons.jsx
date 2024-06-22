import React, { useState, useEffect } from "react";
import styles from "./OptionButtons.module.css";
import { Popup } from "react-map-gl";
import Profiles from "../../pages/Profile/Profile";
import Details from "../../pages/Details/Details";

//ADD: Styling of Buttons
//Jenny: Öffnen der Ebenen in Abhängigkeit der geklickten Aktivität und Option

function OptionButtons({ type, selectedActivity, setSelectedActivity }) {
  const [anchorPosition, setAnchorPosition] = useState("top");
  const [activeComponent, setActiveComponent] = useState(null);

  //Setzt die Position des Popups entsprechend welcher Button geklickt wurde
  useEffect(() => {
    if (type === "details") {
      setAnchorPosition("top");
    } else if (type === "profiles") {
      setAnchorPosition("bottom-right");
    } else if (type === "gallery") {
      setAnchorPosition("bottom-left");
    }
  }, [type]);

  //Öffnet abhängig davon welcher Button geklickt wurde das zugehörige Popup
  const handleButtonClick = (type) => {
    if (type === "profiles") {
      setActiveComponent(
        <Profiles
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
        />
      );
    } else if (type === "details") {
      setActiveComponent(
        <Details
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
        />
      );
    }
  };

  return (
    <div>
      <Popup
        latitude={selectedActivity.latitude}
        longitude={selectedActivity.longitude}
        closeOnClick={false}
        onClose={() => setSelectedActivity(null)}
        anchor={anchorPosition}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(type + " clicked");
            handleButtonClick(type);
          }}
        >
          {type}
        </button>
      </Popup>
      {activeComponent}
    </div>
  );
}

export default OptionButtons;
