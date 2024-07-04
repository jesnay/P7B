import React, { useState, useEffect, useRef } from "react";
import styles from "./OptionButtons.module.css";
import { Popup } from "react-map-gl";
import Profiles from "../../pages/Profile/Profile";
import Details from "../../pages/Details/Details";
import Gallery from "../../pages/Gallery/Gallery";

//ADD: Styling of Buttons
//Jenny: Öffnen der Ebenen in Abhängigkeit der geklickten Aktivität und Option

function OptionButtons({ selectedActivity, setSelectedActivity }) {
  const [activeComponent, setActiveComponent] = useState(null);
  const [type, setType] = useState(["details", "profiles", "gallery"]);

  const [selectedOption, setSelectedOption] = useState(null);

  //Resettet alles auf null wenn eine neue Aktivität angeklickt wurde
  useEffect(() => {
    setActiveComponent(null);
    setSelectedOption(null);
  }, [selectedActivity]);

  //Setzt die Position des Popups entsprechend welcher Button geklickt wurde
  //Nochmal prüfen warum die Richtung der anchor Position nicht
  const getAnchorPosition = (type) => {
    if (type === "details") {
      return "top";
    } else if (type === "profiles") {
      return "bottom-right";
    } else if (type === "gallery") {
      return "bottom-left";
    }
  };

  const showButtonText = (item) => {
    if (item === "details") {
      return "DETAILS";
    } else if (item === "profiles") {
      return "EXPERIENCED";
    } else if (item === "gallery") {
      return "GALLERY";
    }
  };

  //Öffnet abhängig davon welcher Button geklickt wurde das zugehörige Popup
  const handleButtonClick = (type) => {
    if (type === "profiles") {
      setActiveComponent(
        <Profiles
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
        />
      );

      setSelectedOption(type);
    } else if (type === "details") {
      setActiveComponent(
        <Details
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
        />
      );
      setSelectedOption(type);
    } else if (type === "gallery") {
      setActiveComponent(
        <Gallery
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
        />
      );
      setSelectedOption(type);
    }
  };

  return (
    <div className={styles.OptionButtons}>
      {type.map((item) => {
        return (
          <div>
            {selectedOption !== item && (
              <Popup
                latitude={selectedActivity.latitude}
                longitude={selectedActivity.longitude}
                closeOnClick={false}
                onClose={() => setSelectedActivity(null)}
                anchor={getAnchorPosition(item)}
                style={{ maxWidth: "600px" }}
                className={styles.PopupCustom}
              >
                {" "}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(item + " clicked");
                    handleButtonClick(item);
                  }}
                  className="optionbtn"
                >
                  {showButtonText(item)}
                </button>
              </Popup>
            )}
          </div>
        );
      })}
      {activeComponent}
    </div>
  );
}

export default OptionButtons;

//className={type === true ? "text activeText" : "text"}
