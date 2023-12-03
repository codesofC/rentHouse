import Image from "next/image";
import { motion } from "framer-motion";
import american from "@/public/assets/american.png";
import prologis from "@/public/assets/prologis.png";
import equinix from "@/public/assets/equinix.png";
import digitalrealty from "@/public/assets/digitalrealty.png";

const companiesImg = [prologis, american, equinix, digitalrealty];

const Companies = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay: 1,
            type: "spring",
            mass: 0.4,
            damping: 8,
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center gap-8 md:gap-12 lg:gap-24 xl:gap-32 px-8 py-12"
    >
      {companiesImg.map((image, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-center w-[100px] lg:w-[120px]"
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
        >
          <Image
            src={image}
            width={200}
            height={50}
            alt="Companies logo"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Companies;
