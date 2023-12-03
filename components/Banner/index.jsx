import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CountUp from "react-countup";
import { IoLocationSharp } from "react-icons/io5";
import bannerImg from "@/public/assets/banner1.webp";
import { motion } from "framer-motion";

const imageVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const childrenVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Banner = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <section className="flex items-center justify-center relative">
      <motion.div 
        variants={imageVariant}
        initial="hidden"
        animate="visible"
        className="w-full h-[80vh]"
      >
        <div
          className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-[rgba(0,0,0,0.85)] px-12"
        >
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="w-full md:w-4/6 lg:w-2/6 flex flex-col gap-12"
          >
            <h1
              className="text-4xl xl:text-5xl text-white font-bold relative"
            >
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
            <motion.div
              variants={childrenVariant}
              className="text-sm text-gray-200"
            >
              <p>Find a variety of properties that suit you very easily.</p>
              <p>Forget all difficulties in finding a residence fro you.</p>
            </motion.div>
            <motion.div
              variants={childrenVariant}
              className="flex gap-2 items-center justify-center w-full py-1 px-2 bg-white rounded"
            >
              <span className="text-xl text-blue-800">
                {" "}
                <IoLocationSharp />{" "}
              </span>
              <input
                type="text"
                value={search}
                placeholder="Search by location"
                className="w-full text-sm py-2 outline-none"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="text-light-blue text-sm text-center px-4 py-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded"
                onClick={() => router.push(`/${search}`)}
              >
                Search
              </button>
            </motion.div>
            <motion.div
              variants={childrenVariant}
              className="flex items-center justify-between gap-2"
            >
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
            </motion.div>
          </motion.div>
        </div>
        <div
          className="w-full h-full overflow-hidden"
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={900}
            height={700}
            alt="Banner Picture"
            className="w-full h-full object-cover"
            priority={true}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
