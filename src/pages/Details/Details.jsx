import React, { useEffect, useRef } from "react";
import interact from "interactjs";
import { Popup } from "react-map-gl";
import styles from "./Details.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

//Jenny: Popup anhängig der geklickten Aktivität anzeigen
import DetailCard from "../../components/DetailCard/DetailCard";

function Details({ selectedActivity, setSelectedActivity }) {
  console.log("Details" + selectedActivity);
  console.log(selectedActivity.name);
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
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            observer={true}
            observeParents={true}
          >
            <SwiperSlide>
              <DetailCard />
            </SwiperSlide>
            <SwiperSlide>
              <DetailCard />
            </SwiperSlide>
            <SwiperSlide>
              <DetailCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </Popup>
    </div>
  );
}

export default Details;
/*<SwiperSlide>
              <DetailCard />
            </SwiperSlide>
            <SwiperSlide>
              <DetailCard />
            </SwiperSlide>
            <SwiperSlide>
              <DetailCard />
            </SwiperSlide>*/
/*<Popup
        latitude={selectedActivity.latitude}
        longitude={selectedActivity.longitude}
        closeOnClick={false}
        onClose={() => setSelectedActivity(null)}
        anchor="top"
        className={styles.PopupCustom}
      > */

/*<Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>*/
