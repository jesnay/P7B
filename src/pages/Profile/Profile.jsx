import React, { useState } from "react";
import styles from "./Profile.module.css";
import ProfileBubble from "../../components/ProfileBubble/ProfileBubble";
import { Popup } from "react-map-gl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data/activity.json";

//Jenny: Darstellung der Profile als vertikaler Carousel

function Profiles({ selectedActivity, setSelectedActivity }) {
  //Prüft, welche Personen die ausgewählte Aktivität bereits gemacht haben
  const getProfilesForActivity = (activityID) => {
    const profilesForActivity = data.profiles.filter((profile) =>
      profile.activities.includes(activityID)
    );
    return profilesForActivity;
  };

  const profilesForActivity = getProfilesForActivity(selectedActivity.id);

  //Einstellungen für das Carousel -> man kann bisher nur horizontal swipen, muss noch eine Lösung gefunden werden
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    vertical: true,
    centerMode: true,
    arrows: false,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className={styles.Profiles}>
      <Popup
        latitude={selectedActivity.latitude}
        longitude={selectedActivity.longitude}
        closeOnClick={false}
        onClose={() => setSelectedActivity(null)}
        anchor="bottom-right"
        className={styles.PopupCustom}
      >
        <div className={styles.Slider}>
          <Slider {...settings} className="carousel">
            {profilesForActivity.map((profile, index) => (
              //Erstellt für jede Person, die an einer Aktivität teilgenommen hat eine Bubble
              <div
                className={index === imageIndex ? "slide activeSlide" : "slide"}
                key={index}
              >
                <ProfileBubble
                  profileID={profile.id}
                  active={index === imageIndex ? true : false}
                ></ProfileBubble>
              </div>
            ))}
          </Slider>
        </div>
      </Popup>
    </div>
  );
}

export default Profiles;
