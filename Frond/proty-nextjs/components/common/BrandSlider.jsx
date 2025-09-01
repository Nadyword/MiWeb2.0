"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function BrandSlider({
  parentClass = "infiniteslide wrap-partners mb-40",
}) {
  return (
    <Swiper
      dir="ltr"
      className={parentClass}
      spaceBetween={15}
      breakpoints={{
        0: { slidesPerView: 2 },
        575: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      }}
      loop
      autoplay={{ delay: 1, pauseOnMouseEnter: true }} // Equivalent to data-autoplay & data-autoplaytime
      speed={2000} // Equivalent to data-speed
      modules={[Autoplay]}
    >
      <SwiperSlide className="partner-item style-2 ">
        <img src="/images/premios/premio-1.png" alt="brand" width={160} height={40} style={{ objectFit: "cover", borderRadius: "8px" }} />
      </SwiperSlide>
      <SwiperSlide className="partner-item style-2">
        <img src="/images/premios/premio-2.png" alt="brand" width={150} height={49} style={{ objectFit: "cover", borderRadius: "8px" }} />
      </SwiperSlide>
      <SwiperSlide className="partner-item style-2">
        <img src="/images/premios/premio-3.png" alt="brand" width={100} height={49} style={{ objectFit: "cover", borderRadius: "8px" }} />
      </SwiperSlide>
      <SwiperSlide className="partner-item style-2">
        <img src="/images/premios/premio-5.png" alt="brand" width={100} height={40} style={{ objectFit: "cover", borderRadius: "8px" }} />
      </SwiperSlide>
      <SwiperSlide className="partner-item style-2">
        <img src="/images/premios/premio-4.png" alt="brand" width={50} height={49} style={{ objectFit: "cover", borderRadius: "8px" }} />
      </SwiperSlide>
      <SwiperSlide className="partner-item style-2">
        <img src="/images/premios/premio-6.png" alt="brand" width={210} height={49} style={{ objectFit: "cover", borderRadius: "8px" }} />
      </SwiperSlide>
      <SwiperSlide className="partner-item style-2 ">
        <img src="/images/premios/premio-7.png" alt="brand" width={210} height={49} style={{ objectFit: "cover", borderRadius: "8px" }} />
      </SwiperSlide>
      <SwiperSlide className="partner-item style-2">
        <img src="/images/premios/premio-8.png" alt="brand" width={160} height={49} style={{ objectFit: "cover", borderRadius: "8px" }} />
      </SwiperSlide>
      <SwiperSlide className="partner-item style-2">
        <img src="/images/premios/premio-9.png" alt="brand" width={120} height={49} style={{ objectFit: "cover", borderRadius: "8px" }} />
      </SwiperSlide>
      <SwiperSlide className="partner-item style-2">
        <img src="/images/premios/premio-10.png" alt="brand" width={150} height={49} style={{ objectFit: "cover", borderRadius: "8px" }} />
      </SwiperSlide>
      <SwiperSlide className="partner-item style-2">
        <img src="/images/premios/premio-11.png" alt="brand" width={280} height={49} style={{ objectFit: "cover", borderRadius: "8px" }} />
      </SwiperSlide>
      <SwiperSlide className="partner-item style-2">
        <img src="/images/premios/premio-12.png" alt="brand" width={120} height={49} style={{ objectFit: "cover", borderRadius: "8px" }} />
      </SwiperSlide>
    </Swiper>
  );
}
