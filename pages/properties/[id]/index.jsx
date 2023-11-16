import Image from "next/image";
import { MdBathtub, MdOutlineMeetingRoom } from "react-icons/md";
import { IoMdCar } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import dynamic from "next/dynamic";

const MapBox = dynamic(() => import("../../../components/MapBox/index"), { ssr: false })

const House = ({ data }) => {
  if (typeof data === "string") {
    return <div>Item not exists</div>;
  }

  return (
    <section className="flex flex-col gap-6 px-4 py-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
      <div className="w-full h-[40vh] sm:h-[55vh] lg:h-[70vh] 2xl:h-[80vh] rounded-lg overflow-hidden">
        <Image
          src={data.url}
          width={1000}
          height={data.height}
          alt="House image"
          priority={true}
          className="w-full h-full object-cover brightness-105"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="text-2xl text-blue-600 font-bold">
              {" "}
              {data.title}{" "}
            </span>
            <span className="text-lg text-orange-400 font-semibold">
              {" "}
              $ {data.price}{" "}
            </span>
          </div>
          <div className="flex items-center flex-wrap gap-4 text-blue-600">
            <span className="flex items-center gap-2 text-sm">
              {" "}
              <MdBathtub /> {data.bathrooms} Bathroom/s{" "}
            </span>
            <span className="flex items-center gap-2 text-sm">
              {" "}
              <IoMdCar /> {data.parkings} Parking/s{" "}
            </span>
            <span className="flex items-center gap-2 text-sm">
              {" "}
              <MdOutlineMeetingRoom /> {data.bedrooms} Room/s{" "}
            </span>
          </div>
          <p className="text-md text-gray-200">{data.description}</p>
          <p className="flex items-center gap-4">
            <span className="text-black">
              {" "}
              <IoLocationSharp />{" "}
            </span>
            <span className="text-gray-200"> {data.city}, {data.country} </span>
          </p>
          <button className="w-full p-2 bg-blue-600 text-white flex items-center justify-center rounded-sm">
            {" "}
            Book your visit{" "}
          </button>
        </div>
        <div className="w-full">
          <MapBox address={`${data.city}, ${data.country}`} />
        </div>
      </div>
    </section>
  );
};

export default House;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const dataFetch = await import("../../api/rent.json");
  const dataFind = await dataFetch.houses;
  const data = dataFind.find((item) => item.id.toString() === id);

  if (data) {
    return {
      props: {
        data,
      },
    };
  } else {
    return {
      props: {
        data: "Data not found",
      },
    };
  }
}
