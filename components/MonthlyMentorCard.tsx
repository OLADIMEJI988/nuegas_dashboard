"use client";

import { useState } from "react";
import Image from "next/image";

interface MentorCardProps {
  img: string;
  name: string;
  role: string;
  tasknum: string;
  rating: string;
  reviewnum: string;
}

export default function MonthlyMentorCard({
  img,
  name,
  role,
  tasknum,
  rating,
  reviewnum,
}: MentorCardProps) {
  const [followed, setFollowed] = useState(false);

  return (
    <div className="p-6 flex flex-col gap-5 font-[Jakarta] text-foreground bg-white rounded-[10px]">
      <div className="flex gap-10 items-center">
        <div className="flex gap-2 items-center">
          <Image src={img} alt="logo" width={48} height={48} priority />

          <div className="flex flex-col gap-1">
            <p className="text-[16px]">{name}</p>
            <p className="font-[Jakartamd] text-[12px] text-[#54577A]">
              {role}
            </p>
          </div>
        </div>

        <button
          onClick={() => setFollowed(true)}
          className={`font-[Jakartamd] text-[12px] xl:text-[14px] cursor-pointer ${
            followed ? "text-[#54577A]" : "text-[#546FFF]"
          }`}
          disabled={followed}
        >
          {followed ? "Followed" : "+ Follow"}
        </button>
      </div>

      <div className="flex gap-11">
        <div className="flex items-center gap-2">
          <Image src="/note.svg" alt="logo" width={24} height={24} priority />
          <p className="font-[Jakartamd] text-[14px]">{tasknum} Task</p>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/star.svg" alt="logo" width={22} height={22} priority />
          <p className="font-[Jakartamd] text-[14px] mt-1">
            {rating} ({reviewnum} Reviews)
          </p>
        </div>
      </div>
    </div>
  );
}
