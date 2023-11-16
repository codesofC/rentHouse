"use client";
import { useState } from "react";
import Image from "next/image";
import { useDataFetch } from "@/components/BigContainer/useDataFetch";
import { IoLocationSharp } from "react-icons/io5";
import DisplayItem from "@/components/DisplayItem";

const Properties = () => {
  const [search, setSearch] = useState("");
  const { data } = useDataFetch();

  return (
    <section className="flex flex-col items-center justify-center gap-12 py-6 px-6 sm:px-8 md:px-12 xl:px-24 2xl:px-32">
      <div className="flex items-center justify-center">
        <div className="flex gap-2 items-center  py-1 px-2 bg-white border rounded-full">
          <span className="text-xl text-blue-800">
            {" "}
            <IoLocationSharp />{" "}
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title/city/country..."
            className="w-[300px] text-sm py-2 outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4 xl:gap-x-24">
        {data.map((item) => {
          if (
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.city.toLowerCase().includes(search.toLowerCase()) ||
            item.country.toLowerCase().includes(search.toLowerCase())
          ) {
            return (
              <DisplayItem item={item} />
            );
          }
        })}
      </div>
    </section>
  );
};

export default Properties;
