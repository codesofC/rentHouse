
import { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css'
import Image from "next/image";
import { useDataFetch } from "../BigContainer/useDataFetch";
import { sliderSettings } from "./sliderSettings";

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
            <div 
                className="flex flex-col gap-2 flex flex-col gap-4 cursor-pointer px-4 py-4 
                    hover:bg-gradient-to-t from-blue-300 via-transparent to-transparent hover:shadow-[0_72px_49px_-51px_rgba(136,160,255,0.21)]
                    transition-all"
            >
              <div className="w-full h-[10rem] rounded-md overflow-hidden">
                <Image
                  src={item.url}
                  width={800}
                  height={500}
                  alt="House picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-lg font-semibold">
                  <span className="text-orange-300">$</span>
                  <span className="text-gray-200">{item.price}</span>
                </div>
                <h2 className="text-xl text-blue-600 font-bold">{item.title}</h2>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </section>
  );
};

export default Slides;