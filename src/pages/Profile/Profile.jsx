import React, { useRef, useState, useEffect } from "react";
import styles from "./Profile.module.css";
import ProfileBubble from "../../components/ProfileBubble/ProfileBubble";
import { Popup } from "react-map-gl";
import data from "../../data/activity.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
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
              //Erstellt für jede Person, die an einer Aktivität teilgenommen hat eine Bubble

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
