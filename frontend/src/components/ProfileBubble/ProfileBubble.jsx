import React from "react";
import styles from "./ProfileBubble.module.css";
import Profiles from "../../data/activity.json";

//Jenny: Aufbau einer einzigen Profil Bubble

function ProfileBubble({ profileID, isActive }) {
  return (
    <div className={styles.ProfileBubble}>
      <img src={Profiles.profiles[profileID].image} alt="profile"></img>
      {/* Checkt, ob die Profil Bubble grade aktiv ist und zeigt dann Text an */}
      <div className={isActive === true ? "text activeText" : "text"}>
        <p className="name">{Profiles.profiles[profileID].name}</p>
        <p className="timeframe">
          arrived {Profiles.profiles[profileID].arrival}
          <br />
          leaves in {Profiles.profiles[profileID].leave}
        </p>
      </div>
    </div>
  );
}

export default ProfileBubble;
