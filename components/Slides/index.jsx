
import { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css'
import Image from "next/image";
import { useDataFetch } from "../BigContainer/useDataFetch";
import { sliderSettings } from "./sliderSettings";
import DisplayItem from "../DisplayItem";

const Slides = () => {
  const { data } = useDataFetch();
  const swiperRef = useRef()

  const slidesButtons = () => {

    return (
        <div className="flex items-center justify-end gap-3 mt-4">
            <button 
                onClick={() => swiperRef.current.slidePrev()}
                className="text-lg px-2 bg-[#EEEEFF] text-blue-800"
            > &lt; </button>
            <button 
                className="text-lg px-2 shadow-3xl text-blue-800"
                onClick={() => swiperRef.current.slideNext()}
            > &gt; </button>
        </div>
    )
}

  return (
    <section className="w-full overflow-hidden">
      {slidesButtons()}
      <Swiper
        { ...sliderSettings }
        onSwiper={(swiper) => {
            swiperRef.current = swiper
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <DisplayItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      
    </section>
  );
};

export default Slides;