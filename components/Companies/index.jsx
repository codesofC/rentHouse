
import Image from "next/image";
import american from "@/public/assets/american.png";
import prologis from "@/public/assets/prologis.png";
import equinix from "@/public/assets/equinix.png";
import digitalrealty from "@/public/assets/digitalrealty.png";

const Companies = () => {
  return (
    <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-24 xl:gap-32 px-8 py-12">
      <div className="flex items-center justify-center w-[100px] lg:w-[120px]">
        <Image
          src={prologis}
          width={200}
          height={50}
          alt="Companies logo"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="flex items-center justify-center w-[100px] lg:w-[120px]">
        <Image
          src={american}
          width={200}
          height={50}
          alt="Companies logo"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="flex items-center justify-center w-[100px] lg:w-[120px]">
        <Image
          src={equinix}
          width={200}
          height={50}
          alt="Companies logo"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="flex items-center justify-center w-[100px] lg:w-[120px]">
        <Image
          src={digitalrealty}
          width={200}
          height={50}
          alt="Companies logo"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
  );
};

export default Companies;
