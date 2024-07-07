import React, { useRef, useState, useEffect } from "react";
import interact from "interactjs";
import styles from "./Profile.module.css";
import ProfileBubble from "../../components/ProfileBubble/ProfileBubble";
import { Popup } from "react-map-gl";
import data from "../../data/activity.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

//Yara: Ermöglichung der Rotation von Elementen bei längerem Gedrückthalten
//Jenny: Aufbau des Profil-Sliders -> Aufzeigen von Hostelbewohner, die bereits eine Aktivität unternommen haben; Einbindung der Daten in Abhängigkeit der geklickten Aktivität und welche Person an der ausgewählten Aktivität teilgenommen hat;

function Profiles({ selectedActivity, setSelectedActivity }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1);
  //Prüft, welche Personen die ausgewählte Aktivität bereits gemacht haben
  const getProfilesForActivity = (activityID) => {
    const profilesForActivity = data.profiles.filter((profile) =>
      profile.activities.includes(activityID)
    );
    return profilesForActivity;
  };

  const profilesForActivity = getProfilesForActivity(selectedActivity.id);

  //Setzt das aktive Profil fest bei jedem swipe
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  //Rotieren des Elements, wenn länger gedrückt gehalten wird
  const popupContentRef = useRef(null);
  useEffect(() => {
    if (popupContentRef.current) {
      let isRotated = false;

      interact(popupContentRef.current).on("hold", function (event) {
        isRotated = !isRotated;
        const rotationDegree = isRotated ? 180 : 0;
        event.currentTarget.style.transform = `rotate(${rotationDegree}deg)`;
      });
    }
  }, []);

  return (
    <div className={styles.Profiles}>
      <Popup
        latitude={selectedActivity.latitude}
        longitude={selectedActivity.longitude}
        closeOnClick={false}
        onClose={() => setSelectedActivity(null)}
        anchor="bottom-right"
        className={styles.PopupCustom}
        style={{ maxWidth: "600px" }}
      >
        <div ref={popupContentRef} className={styles.Slider}>
          {/* Darstellung der Profile */}
          <Swiper
            direction={"vertical"}
            slidesPerView={3}
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            modules={[Pagination]}
            initialSlide={1}
            className="mySwiper"
            onSlideChange={handleSlideChange}
          >
            {profilesForActivity.map((profile, index) => (
              //Erstellt für jede Person, die an einer Aktivität teilgenommen hat einen Slide
              <SwiperSlide key={profile.id}>
                <div className={styles.ProfileBubbleContainer}>
                  <ProfileBubble
                    profileID={profile.id}
                    isActive={index === activeIndex ? true : false}
                  ></ProfileBubble>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Popup>
    </div>
  );
}

export default Profiles;
