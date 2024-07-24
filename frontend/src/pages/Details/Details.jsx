import React, { useEffect, useRef } from "react";
import interact from "interactjs";
import { Popup } from "react-map-gl";
import styles from "./Details.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import DetailCard from "../../components/DetailCard/DetailCard";
import InformationCard from "../../components/DetailCard/InformationCard";
import ChecklistCard from "../../components/DetailCard/ChecklistCard";

//Yara: Aufbau der Detail-,Informations- & Checklist Cards -> Darstellung der wichtigsten Informationen für eine Aktivität; Aufbau der Datenbank (Json) mit unterschiedlichen Aktivitäten; Ermöglichung der Rotation von Elementen bei längerem Gedrückthalten
//Jenny: Einbindung der Daten in Abhängigkeit der geklickten Aktivität; Einbau der Swiping-Animation

function Details({ selectedActivity, setSelectedActivity }) {
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
    <div className={styles.Details}>
      <Popup
        latitude={selectedActivity.latitude}
        longitude={selectedActivity.longitude}
        closeOnClick={false}
        onClose={() => setSelectedActivity(null)}
        anchor="top"
        className={styles.PopupCustom}
        style={{ maxWidth: "600px" }}
      >
        <div ref={popupContentRef} className={styles.Cards}>
          {/* 3 Cards inklusive Animation */}
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            observer={true}
            observeParents={true}
          >
            <SwiperSlide>
              <DetailCard activityID={selectedActivity.id} />
            </SwiperSlide>
            <SwiperSlide>
              <InformationCard activityID={selectedActivity.id} />
            </SwiperSlide>
            <SwiperSlide>
              <ChecklistCard activityID={selectedActivity.id} />
            </SwiperSlide>
          </Swiper>
        </div>
      </Popup>
    </div>
  );
}

export default Details;
