import React from "react";
import { MusicWidgetMobile } from "./MusicWidgetMobile";
import { Projects } from "./Projects";
import { MobileDock } from "./MobileDock";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { PageOne } from "./Pages/PageOne";

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
    bottom: 140px !important;
  }
`;

export const MobileHome = () => {
  return (
    <>
      <style>{swiperStyles}</style>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        // Add these properties to ensure touch works properly
        touchRatio={1}
        touchAngle={45}
        simulateTouch={true}
        allowTouchMove={true}
        // Ensure proper height and overflow
        style={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
        // Add resistance and threshold for better touch response
        resistance={true}
        resistanceRatio={0.85}
        threshold={10}
      >
        <SwiperSlide style={{ height: "100%" }}>
          <div style={{ height: "100%", overflow: "auto" }}>
            <MusicWidgetMobile />
            <Projects />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <div style={{ height: "100%", overflow: "auto" }}>
            <PageOne />
          </div>
        </SwiperSlide>
      </Swiper>
      <MobileDock />
    </>
  );
};
