"use client";

import MonthlyMentors from "@/components/MonthlyMentors";
import UpcomingTask from "@/components/UpcomingTask";
import Image from "next/image";

const percent = 70;

export default function Overview() {
  return (
    <div className="flex font-[Jakarta] text-foreground">
      <div className="p-8 bg-[#FAFAFA] w-full">
        <div className="flex items-center">
          <div className="flex flex-col gap-2">
            <p className="text-[24px]">Hi, Skylar Dias</p>
            <p className="text-[16px] font-[Jakartamd] text-[#54577A]">
              Let's finish your task today!
            </p>
          </div>

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

        <div className="mt-11 flex gap-8">
          <div className="bg-foreground w-48.5 rounded-[10px] p-5 flex flex-col justify-between text-white">
            <p className="text-[16px]">Running Task</p>
            <p className="text-[32px]">65</p>

            <div className="flex items-center gap-4.5">
              <div
                className="w-17 h-17 rounded-full flex items-center justify-center"
                style={{
                  background: `conic-gradient(#546FFF 0% ${percent}%, #1A1E38 ${percent}% 100%)`,
                }}
              >
                <div className="w-15.5 h-15.5 bg-foreground rounded-full flex items-center justify-center">
                  <p className="font-[Jakartamd] text-[18px]">{percent}%</p>
                </div>
              </div>

              <div>
                <p className="text-[20px]">100</p>
                <p className="text-[14px] text-[#8E92BC] font-[Jakartamd]">
                  Task
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F5F5F7] flex-1 rounded-[10px] p-5 flex flex-col justify-between h-53.5 xl:h-63">
            <div className="flex justify-between">
              <p className="text-[16px]">Activity</p>
              <div className="flex items-center gap-4 cursor-pointer">
                <p className="font-[Jakartamd] text-[12px]">This Week</p>
                <Image
                  src="/arrowdown.svg"
                  alt="logo"
                  width={12}
                  height={12}
                  priority
                />
              </div>
            </div>

            <div className="">
              <Image
                src="/taskstats.svg"
                alt="logo"
                width={400}
                height={200}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>

        <MonthlyMentors />

        <UpcomingTask />
      </div>

      <div className="xl:w-[45%] w-[39%] p-5 flex flex-col gap-8">
        <div className="bg-white h-32 w-full rounded-[10px]"></div>
        <div className="bg-white h-full rounded-[10px] p-6"></div>
      </div>
    </div>
  );
}
