"use client"

import { useRef, useEffect } from "react";
import Image from "next/image";
import bannerImg from "@/public/assets/banner3.avif";
import { MdCall, MdOutlineChatBubble } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { motion, useAnimation, useInView } from "framer-motion";

const ContactUs = () => {
  const refContainer = useRef();

  const isInView = useInView(refContainer, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section className="flex items-center justify-center relative">
      <div
        className="w-full px-6 sm:px-8 lg:px-12 py-12 flex flex-col gap-5 md:gap-12
                    md:flex-row md:justify-between lg:w-[90%] xl:w-[70%]"
        ref={refContainer}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-orange-400 font-bold"> Our Contact Us </h2>
            <h3 className="text-xl text-blue-600 font-bold">
              {" "}
              Easy to contact us{" "}
            </h3>
            <p className="text-sm text-gray-200">
              We always ready to help with the best services for you. We believe
              a good blace to live can make your life better.
            </p>
          </div>
          <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-3 w-full 2xl:w-5/6">
            <div className="flex flex-col gap-2 p-2 border border-gray-50">
              <div className="flex gap-3 items-center">
                <span className="flex items-center justify-center p-2 bg-[#eeeeff] rounded-sm text-blue-600 text-lg">
                  {" "}
                  <MdCall />{" "}
                </span>
                <p className="flex flex-col gap-1">
                  <span className="text-blue-600 font-semibold">Call</span>
                  <span className="text-gray-200">021 123 145 14</span>
                </p>
              </div>
              <button className="w-full p-2 bg-[#eeeeff] text-blue-600 hover:bg-blue-800 hover:text-white rounded-sm">
                Call now
              </button>
            </div>
            <div className="flex flex-col gap-2 p-2 border border-gray-50">
              <div className="flex gap-3 items-center">
                <span className="flex items-center justify-center p-2 bg-[#eeeeff] rounded-sm text-blue-600 text-lg">
                  {" "}
                  <BsFillChatDotsFill />{" "}
                </span>
                <p className="flex flex-col gap-1">
                  <span className="text-blue-600 font-semibold">Chat</span>
                  <span className="text-gray-200">021 123 145 14</span>
                </p>
              </div>
              <button className="w-full p-2 bg-[#eeeeff] text-blue-600 hover:bg-blue-800 hover:text-white rounded-sm">
                Chat now
              </button>
            </div>
            <div className="flex flex-col gap-2 p-2 border border-gray-50">
              <div className="flex gap-3 items-center">
                <span className="flex items-center justify-center p-2 bg-[#eeeeff] rounded-sm text-blue-600 text-lg">
                  {" "}
                  <BsFillChatDotsFill />{" "}
                </span>
                <p className="flex flex-col gap-1">
                  <span className="text-blue-600 font-semibold">
                    Video Call
                  </span>
                  <span className="text-gray-200">021 123 145 14</span>
                </p>
              </div>
              <button className="w-full p-2 bg-[#eeeeff] text-blue-600 hover:bg-blue-800 hover:text-white rounded-sm">
                Video Call now
              </button>
            </div>
            <div className="flex flex-col gap-2 p-2 border border-gray-50">
              <div className="flex gap-3 items-center">
                <span className="flex items-center justify-center p-2 bg-[#eeeeff] rounded-sm text-blue-600 text-lg">
                  {" "}
                  <MdOutlineChatBubble />{" "}
                </span>
                <p className="flex flex-col gap-1">
                  <span className="text-blue-600 font-semibold">Message</span>
                  <span className="text-gray-200">021 123 145 14</span>
                </p>
              </div>
              <button className="w-full p-2 bg-[#eeeeff] text-blue-600 hover:bg-blue-800 hover:text-white rounded-sm">
                Message now
              </button>
            </div>
          </div>
        </div>

        <motion.div 
          className="w-full md:w-[30rem] h-[35rem] border-4 border-gray-200 rounded-t-full overflow-hidden"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: {
              delay: 0.7,
              duration: 0.5
            } }
          }}
          initial="hidden"
          animate={mainControls}
        >
          <Image
            src={bannerImg}
            width={800}
            height={700}
            alt="Banner Picture"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
