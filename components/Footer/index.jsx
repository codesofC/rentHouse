import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center relative py-6 px-3">
      <div
        className="w-full mx-6 md:mx-8 lg:mx-12 xl:mx-48 py-8
                        flex justify-between gap-3"
      >
        <div className="lg:w-1/5">
          <div className="relative inline text-blue-600 font-bold text-xl z-[1] before:content-[''] before:w-[20px] before:h-[20px] before:absolute 
                        before:top-[-.5rem] before:right-[-.5rem] before:z-[-1] 
                        before:rounded-full before:border-0 before:bg-gradient-to-r before:from-orange-300 before:to-orange-600">
            EASXY
          </div>
          <p className="text-sm text-gray-200">
            Our vision is to make all people the best place to live for them.
          </p>
        </div>
        <div className="flex flex-col gap-3">
            <h2 className="text-blue-600 text-2xl font-bold">Information</h2>
            <p className="text-sm text-gray-200"> 145 New York FL 5467, USA</p>
            <div className="flex flex-wrap gap-4 font-semibold">
                <Link href="/">Property</Link>
                <Link href="/">Services</Link>
                <Link href="/">Product</Link>
                <Link href="/">About Us</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
