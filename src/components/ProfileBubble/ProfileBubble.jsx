import React from "react";
import styles from "./ProfileBubble.module.css";
import Profiles from "../../data/activity.json";

//Jenny: Einzelne Profilbubble

function ProfileBubble({ profileID }) {
  console.log("activityID: " + profileID);
  return (
    <div className={styles.ProfileBubble}>
      <img src={Profiles.profiles[profileID].image}></img>
      {/*<div className="text">
        <p className="name">{Profiles.profiles[0].name}</p>
        <p className="timeframe">
          arrived {Profiles.profiles[0].arrival}
          <br />
          leaves in {Profiles.profiles[0].leave}
        </p>
      </div>*/}
    </div>
  );
}

export default ProfileBubble;
