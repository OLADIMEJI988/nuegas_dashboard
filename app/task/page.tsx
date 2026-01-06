"use client";

import Image from "next/image";

export default function Task() {
  return (
    <div className="flex font-[Jakarta] text-foreground">
      <div className="p-8 bg-white w-full">
        <div className="flex items-center">
          <p className="text-[24px]">Explore Task</p>

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
      </div>
    </div>
  );
}
