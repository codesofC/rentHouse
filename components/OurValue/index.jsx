
import { useState } from "react";
import Image from "next/image";
import bannerImg from "@/public/assets/banner2.avif";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import accordionData from "../Accordion";
import { MdOutlineArrowDropDown } from "react-icons/md"

const OurValue = () => {

    const [className, setClassName] = useState(null)

  return (
    <section className="flex items-center justify-center relative">
      <div
        className="w-full px-6 sm:px-8 lg:px-12 py-12 flex flex-col gap-5 md:gap-12
                    md:flex-row md:items-end md:justify-between lg:w-[90%] xl:w-[70%]"
      >
        <div className="w-full md:w-[30rem] h-[35rem] border-4 border-gray-200 rounded-t-full overflow-hidden">
          <Image
            src={bannerImg}
            width={800}
            height={500}
            alt="House picture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-12 w-full md:4/6 xl:w-1/2">
          <div className="flex flex-col gap-2">
            <h2 className="text-orange-400 font-bold"> Our Value </h2>
            <h3 className="text-xl text-blue-600 font-bold"> Value We Give to You </h3>
            <p className="text-sm text-gray-200">
              We always ready to help with the best services for you.
              <br />
              We believe a good blace to live can make your life better.
            </p>
          </div>
          <div>
            <Accordion
                allowMultipleExpanded={false}
                preExpanded={[0]}
                className="border-0"
            >
                {
                    accordionData.map((item, index) => (
                        <AccordionItem
                            className={`bg-transparent border border-gray-50 mb-[20px] overflow-hidden`}
                            key={index}
                            uuid={index}
                        >
                            <AccordionItemHeading className="border-0">
                                <AccordionItemButton
                                    className="bg-transparent p-[1rem] w-full flex justify-between gap-3"
                                >
                                    <div className="flex items-center justify-center p-2 bg-[#eeeeff] rounded-sm text-blue-600">
                                        { item.icon }
                                    </div>
                                    <span>
                                        {item.heading}
                                    </span>
                                    <div className="flex items-center justify-center p-2 bg-[#eeeeff] rounded-sm text-blue-600">
                                        <MdOutlineArrowDropDown size={20} />
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="text-gray-200 text-sm">
                                    { item.detail }
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
