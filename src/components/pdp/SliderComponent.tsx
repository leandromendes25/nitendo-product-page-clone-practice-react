"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

interface SliderProps {
  id: number;
  src: string;
  alt: string;
}

interface SliderComponentProps {
  imagesSlider: SliderProps[];
}

export default function SliderComponent({
  imagesSlider,
}: SliderComponentProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {imagesSlider.map((image) => (
          <SwiperSlide
            style={{
              width: "100%",
              maxWidth: "672px",
              height: "378px",
            }}
            key={image.id}
          >
            <Image
              className="rounded-lg w-full"
              src={image.src}
              fill
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="overflow-x-auto my-3  "
      >
        {imagesSlider.map((image) => (
          <SwiperSlide className="" key={image.id}>
            <Image
              className="rounded-lg w-full"
              key={image.id}
              src={image.src}
              width={100}
              height={1}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
