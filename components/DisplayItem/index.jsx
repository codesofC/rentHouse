import Image from "next/image";
import { useRouter } from "next/navigation";

const DisplayItem = ({ item }) => {

    const router = useRouter()

  return (
    <div
        key={item.id}
        className="flex flex-col gap-4 cursor-pointer px-4 py-4 
                    hover:bg-gradient-to-t from-blue-300 via-transparent to-transparent hover:shadow-[0_72px_49px_-51px_rgba(136,160,255,0.21)]
                    transition-all"
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
    </div>
  );
};

export default DisplayItem;
