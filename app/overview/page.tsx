"use client";

import CustomMiniCalendar from "@/components/CustomMiniCalender";
import MonthlyMentors from "@/components/MonthlyMentors";
import UpcomingTask from "@/components/UpcomingTask";
import TodayTaskCard from "@/components/TodayTaskCard";
import Image from "next/image";

const percent = 70;

const todaytask = [
  {
    img: "/todaytaskimg.svg",
    title: "Creating Awesome Mobile Apps",
    role: "UI UX Designer",
    progresspercent: "90",
    daysleft: "1 hour",
    mentorsincharge: [
      "/boyinredbg.svg",
      "/girlinwhite.svg",
      "/girlinhat.svg",
      "/boyinred.svg",
      "/girlinhijab.svg",
    ],
  },
];

export default function Overview() {
  return (
    <div className="flex font-[Jakarta] text-foreground">
      <div className="xl:p-8 p-5 bg-[#FAFAFA] w-full">
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

          <div className="bg-[#F5F5F7] flex-1 rounded-[10px] p-5 flex flex-col justify-between">
            <div className="flex justify-between mb-5">
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

            <div>
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

      <div className="xl:w-[50%] p-4 xl:p-6 flex flex-col gap-5 xl:gap-7">
        <CustomMiniCalendar />

        <div className="bg-white h-full rounded-[10px] p-6 flex flex-col">
          <div className="flex justify-between items-center">
            <p className="text-[14px]">Task Today</p>
            <Image
              src="/threedots.svg"
              alt="month-next"
              width={20}
              height={20}
              className="rotate-180"
            />
          </div>

          <div className="mt-5">
            {todaytask
              .map((task, idx) => (
                <TodayTaskCard key={idx} {...task} />
              ))}
          </div>

          <div className="mt-16 flex flex-col flex-1">
            <div className="flex justify-between items-start">
                <p className="text-[16px]">Detail Task</p>
                <p className="text-[12px] font-[Jakartamd] text-[#9C9CA4]">UI / UX Designer</p>
            </div>

            <div className="mt-5 flex flex-col gap-5">
                <div className="flex gap-3 items-center">
                    <div className="bg-[#F5F5F7] w-9 h-9 rounded-[10px] flex items-center justify-center text-[14px]">1</div>
                    <p className="text-[14px] font-[Jakartamd] leading-normal flex-1">Understanding the tools in Figma</p>
                </div>

                <div className="flex gap-3 items-center">
                    <div className="bg-[#F5F5F7] w-9 h-9 rounded-[10px] flex items-center justify-center text-[14px]">2</div>
                    <p className="text-[14px] font-[Jakartamd] leading-normal flex-1">Understand the basics of making designs</p>
                </div>

                <div className="flex gap-3 items-center">
                    <div className="bg-[#F5F5F7] w-9 h-9 rounded-[10px] flex items-center justify-center text-[14px]">3</div>
                    <p className="text-[14px] font-[Jakartamd] leading-normal flex-1">Design a mobile application with figma</p>
                </div>
            </div>

            <button className="w-full bg-[#546FFF] py-3 rounded-[10px] text-white text-[14px] mt-auto">Go To Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
}
