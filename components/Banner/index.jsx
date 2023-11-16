import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CountUp from "react-countup";
import { IoLocationSharp } from "react-icons/io5";
import bannerImg from "@/public/assets/banner1.webp";

const Banner = () => {

  const [search, setSearch] = useState('')
  const router = useRouter();

  return (
    <section className="bg-black flex items-center justify-center relative">
      <div className="absolute top-[-1rem] left-0 w-[20rem] h-[20rem] blur-[100px] bg-gray-100 rounded-[100px]" />
      <div
        className="w-full px-6 sm:px-8 lg:px-12 py-12 flex flex-col gap-5 md:gap-12
                    md:flex-row md:items-end md:justify-between lg:w-[90%] xl:w-[70%]"
      >
        <div className="flex flex-col gap-12">
          <h1 className="text-4xl xl:text-5xl text-white font-bold relative">
            <span
              className="relative z-[1] before:content-[''] before:w-[40px] before:h-[40px] before:absolute 
                        before:top-[-.5rem] before:right-[-.5rem] before:z-[-1] 
                        before:rounded-full before:border-0 before:bg-gradient-to-r before:from-orange-300 before:to-orange-600"
            >
              Discover
            </span>
            <br />
            Most Suitable <br /> Property
          </h1>
          <div className="text-sm text-gray-200">
            <p>Find a variety of properties that suit you very easily.</p>
            <p>Forget all difficulties in finding a residence fro you.</p>
          </div>
          <div className="flex gap-2 items-center w-full py-1 px-2 bg-white rounded">
            <span className="text-xl text-blue-800">
              {" "}
              <IoLocationSharp />{" "}
            </span>
            <input
              type="text"
              value={search}
              placeholder="Search by location"
              className="w-full text-sm py-2 outline-none"
              onChange={e => setSearch(e.target.value)}
            />
            <button 
              className="text-light-blue text-sm text-center px-4 py-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded"
              onClick={() => router.push(`/${search}`)}
            >
              Search
            </button>
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="flex flex-col gap-2 items-center">
              <span className="text-2xl text-white">
                <CountUp start={8900} end={9000} duration={5} />{" "}
                <span className="text-orange-300">+</span>
              </span>
              <span className="text-sm text-gray-200">Premium Product</span>
            </p>
            <p className="flex flex-col gap-2 items-center">
              <span className="text-2xl text-white">
                <CountUp start={1500} end={1800} duration={5} />{" "}
                <span className="text-orange-300">+</span>
              </span>
              <span className="text-sm text-gray-200">Happy Customer</span>
            </p>
            <p className="flex flex-col gap-2 items-center">
              <span className="text-2xl text-white">
                <CountUp start={5} end={28} duration={5} />{" "}
                <span className="text-orange-300">+</span>
              </span>
              <span className="text-sm text-gray-200">Awards Winning</span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-[30rem] h-[35rem] border-4 border-gray-200 rounded-t-full overflow-hidden">
          <Image
            src={bannerImg}
            width={800}
            height={700}
            alt="Banner Picture"
            className="w-full h-full object-cover"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
