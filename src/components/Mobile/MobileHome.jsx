import React, { useEffect, useState } from "react";
import { MusicWidgetMobile } from "./MusicWidgetMobile";
import { Projects } from "./Projects";
import { MobileDock } from "./MobileDock";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { PageOne } from "./Pages/PageOne";
import { NotesWidgetMobile } from "./NotesWidgetMobile";

// Custom styles for pagination color and position
const swiperStyles = `
  .swiper-pagination-bullet {
    background-color: rgba(255, 255, 255, 0.5) !important;
    opacity: 1 !important;
  }
  
  .swiper-pagination-bullet-active {
    background-color: #ffffff !important;
  }
  
  .swiper-pagination {
    bottom: 70px !important;
  }
`;

export const MobileHome = () => {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setScreenHeight(window.innerHeight - 84);
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <style>{swiperStyles}</style>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        touchRatio={1}
        touchAngle={45}
        simulateTouch={true}
        allowTouchMove={true}
        style={{
          height: screenHeight,
          width: "100%",
          overflow: "hidden",
        }}
        resistance={true}
        resistanceRatio={0.85}
        threshold={10}
      >
        <SwiperSlide style={{ height: "100%" }}>
          <div style={{ height: "100%", overflow: "hidden" }}>
            <MusicWidgetMobile />
            <Projects />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <div style={{ height: "100%", overflow: "hidden" }}>
            <NotesWidgetMobile />
            <PageOne />
          </div>
        </SwiperSlide>
      </Swiper>
      <MobileDock />
    </>
  );
};
