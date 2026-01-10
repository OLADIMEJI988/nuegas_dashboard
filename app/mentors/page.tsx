"use client";

import Image from "next/image";

export default function Mentors() {
  return (
    <div className="font-[Jakarta] text-foreground">
      <div className="p-8 bg-white w-full">
        <div className="flex items-center">
          <p className="text-[24px]">Explore Mentors</p>

          <div className="ml-auto flex gap-6">
            <button className="border border-[#F5F5F7] w-13 h-13 flex justify-center rounded-full cursor-pointer">
              <Image
                src="/notif.svg"
                alt="logo"
                width={24}
                height={24}
                priority
              />
            </button>

            <Image
              src="/boyinblack.svg"
              alt="logo"
              width={52}
              height={52}
              priority
            />
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <div className="relative w-120">
            <input
              type="text"
              placeholder="Search Mentors"
              className="w-full border border-[#F5F5F7] rounded-[10px] py-3.5 pl-7 font-[Jakartarg] text-[12px] outline-none focus:outline-none focus:ring-0 focus:border-[#F5F5F7]"
            />

            <Image
              src="/searchicon.svg"
              alt="search"
              width={20}
              height={20}
              className="absolute right-7 top-1/2 -translate-y-1/2 pointer-events-none"
              priority
            />
          </div>

          <div className="flex gap-6">
            <div className="flex items-center py-3.5 px-7 gap-3 border border-[#F5F5F7] rounded-[10px]">
              <Image
                src="/categoryicon.svg"
                alt="icon"
                width={20}
                height={20}
                priority
              />
              <p className="text-[12px]">Category</p>
            </div>

            <div className="flex items-center py-3.5 px-7 gap-3 border border-[#F5F5F7] rounded-[10px]">
              <Image
                src="/sorticon.svg"
                alt="icon"
                width={20}
                height={20}
                priority
              />
              <p className="text-[12px]">Sort By : Popular</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
