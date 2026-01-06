"use client";

import Image from "next/image";

interface UpcomingTaskCardProps {
  img: string;
  title: string;
  role: string;
  progresspercent: string;
  daysleft: string;
  mentorsincharge: string[];
}

export default function UpcomingTaskCard({
  img,
  title,
  role,
  progresspercent,
  daysleft,
  mentorsincharge,
}: UpcomingTaskCardProps) {
  const progress = progresspercent;

  return (
    <div className="p-6 font-[Jakarta] text-foreground bg-white rounded-[10px]">
      <Image src={img} alt="logo" width={280} height={110} priority />

      <div className="my-4 flex flex-col gap-1">
        <p className="text-[16px]">{title}</p>
        <p className="text-[12px] font-[Jakartamd] text-[#54577A]">{role}</p>
      </div>

      <div className="flex flex-col gap-3 mb-4">
        <div className="flex justify-between text-[16px]">
          <p>Progress</p>
          <p className="text-[#546FFF] opacity-80">{progress}%</p>
        </div>

        <div className="relative w-full h-2 rounded-full bg-[#BAC8FF]">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-[#546FFF]"
            style={{ width: `${progress}%` }}
          />

          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#546FFF] border-3 border-white"
            style={{
              left: `calc(${progress}% - 16px)`,
            }}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2">
          <Image src="/clock.svg" alt="logo" width={19} height={19} priority />
          <p className="text-[16px] font-[Jakartamd]">{daysleft} Days Left</p>
        </div>

        {/* mentors in charge */}
        <div className="flex">
          {mentorsincharge.map((mentor, index) => (
            <div
              key={index}
              className={`bg-white w-6 h-6 rounded-full flex justify-center ${
                index !== 0 ? "-ml-1.75" : ""
              }`}
            >
              <Image
                src={mentor}
                alt="mentor"
                width={20}
                height={20}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
