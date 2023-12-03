import { useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useAnimation, useInView } from "framer-motion";

const DisplayItem = ({ item }) => {

    const refContainer = useRef(null)
    const router = useRouter()

    const isInView = useInView(refContainer, { once: true })

    const mainControls = useAnimation();
    
    useEffect(() => {

      if(isInView){
        mainControls.start("visible")
      }else{
        mainControls.start("hidden");
      }

    }, [isInView])

  return (
    <motion.div
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0, transition: {
            duration: 0.3
          } }
        }}
        initial="hidden"
        animate={mainControls}
        key={item.id}
        ref={refContainer}
        className="flex flex-col gap-4 cursor-pointer px-4 py-4 
                    hover:bg-gradient-to-t from-blue-300 via-transparent to-transparent hover:shadow-[0_72px_49px_-51px_rgba(136,160,255,0.21)]
                    transition-all hover:rounded-md"
        onClick={() => router.push(`/properties/${item.id}`)}
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
    </motion.div>
  );
};

export default DisplayItem;
