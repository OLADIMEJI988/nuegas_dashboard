"use client";

import { useEffect, useState } from "react";

import CustomMiniCalendar from "@/components/CustomMiniCalender";
import MonthlyMentors from "@/components/MonthlyMentors";
import UpcomingTask from "@/components/UpcomingTask";
import TodayTaskCard from "@/components/TodayTaskCard";
import Image from "next/image";
import ActivityChart from "@/components/ActivityChart";
import OverviewSkeleton from "@/components/OverviewSkeleton";

const percent = 45;

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
  const connection =
    typeof navigator !== "undefined" ? (navigator as any).connection : null;
  const isSlowNetwork =
    connection &&
    (connection.effectiveType === "2g" || connection.saveData === true);

  const [showSkeleton] = useState(isSlowNetwork);
  const [isLoading, setIsLoading] = useState(isSlowNetwork);

  useEffect(() => {
    if (!showSkeleton) return;

    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [showSkeleton]);

  if (isLoading && showSkeleton) {
    return <OverviewSkeleton />;
  }

  return (
    <div className="flex max-md:flex-col font-[Jakarta] text-foreground">
      {/* LEFT */}
      <div className="2xl:p-8 p-5 max-md:pb-6 bg-[var(--background)] w-full">
        <div className="flex max-md:hidden items-center">
          <div className="flex flex-col gap-2">
            <p className="text-[24px]">Hi, Skylar Dias</p>
            <p className="text-[16px] font-[Jakartamd] text-[var(--text-secondary)]">
              Let's finish your task today!
            </p>
          </div>

          <div className="ml-auto flex gap-6">
            <button className="border border-[var(--surface-secondary)] w-13 h-13 flex justify-center rounded-full cursor-pointer">
              <Image src="/notif.svg" alt="logo" width={24} height={24} />
            </button>
            <Image src="/boyinblack.svg" alt="logo" width={52} height={52} />
          </div>
        </div>

        {/* <div className="hidden max-md:flex pt-2 pb-7 justify-between border-b border-[var(--surface-secondary)]">
          <div className="border border-[var(--surface-secondary)] w-11 h-11 flex items-center justify-center rounded-full">
            <Image src="/menu.svg" alt="logo" width={24} height={24} priority />
          </div>

          <div className="flex gap-4">
            <button className="border border-[var(--surface-secondary)] w-11 h-11 flex justify-center rounded-full cursor-pointer">
              <Image src="/notif.svg" alt="logo" width={20} height={20} />
            </button>
            <Image src="/boyinblack.svg" alt="logo" width={44} height={44} />
          </div>
        </div> */}

        <div className="hidden max-md:flex flex-col gap-2 mt-4">
          <p className="text-[24px] text-[var(--foreground)]">Hi Skylar Dias</p>
          <p className="font-[Jakartamd] text-[14px] text-[var(--text-secondary)]">Let's finish your task today!</p>
        </div>

        <div className="mt-11 max-md:mt-8 flex max-md:flex-col gap-8">
          <div
            className="w-48.5 max-md:w-full rounded-[10px] p-5 flex md:flex-col justify-between"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            <div className="flex flex-col gap-4">
              <p className="text-[16px]" style={{ color: "var(--card-text)" }}>
                Running Task
              </p>
              <p className="text-[32px]" style={{ color: "var(--card-text)" }}>
                65
              </p>
            </div>

            <div className="flex items-center gap-4.5">
              <div
                className="w-17 h-17 rounded-full flex items-center justify-center"
                style={{
                  background: `conic-gradient(var(--progress-fill) 0% ${percent}%, var(--progress-bg) ${percent}% 100%)`,
                }}
              >
                <div
                  className="w-15.5 h-15.5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--progress-inner)" }}
                >
                  <p
                    className="font-[Jakartamd] text-[18px]"
                    style={{ color: "var(--card-text)" }}
                  >
                    {percent}%
                  </p>
                </div>
              </div>

              <div>
                <p
                  className="text-[20px]"
                  style={{ color: "var(--card-text)" }}
                >
                  100
                </p>
                <p
                  className="text-[14px] font-[Jakartamd]"
                  style={{ color: "var(--card-caption)" }}
                >
                  Task
                </p>
              </div>
            </div>
          </div>

          <ActivityChart />
        </div>

        <MonthlyMentors />
        <UpcomingTask />
      </div>

      {/* RIGHT */}
      <div className="2xl:w-[50%] p-4 max-md:p-5 2xl:p-6 flex flex-col gap-5 2xl:gap-7">
        <CustomMiniCalendar />

        <div className="bg-[var(--surface-primary)] h-full rounded-[10px] p-6 max-md:p-5 flex flex-col">
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
            {todaytask.map((task, idx) => (
              <TodayTaskCard key={idx} {...task} />
            ))}
          </div>

          <div className="bg-[var(--surface-secondary)] w-full h-px mt-8"></div>

          <div className="mt-8 flex flex-col flex-1">
            <div className="flex justify-between items-start">
              <p className="text-[16px]">Detail Task</p>
              <p className="text-[12px] font-[Jakartamd] text-[var(--text-muted)]">
                UI / UX Designer
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-5">
              {[1, 2, 3].map((num, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  <div className="bg-[var(--surface-secondary)] w-9 h-9 rounded-[10px] flex items-center justify-center text-[14px]">
                    {num}
                  </div>
                  <p className="text-[14px] font-[Jakartamd] leading-normal flex-1">
                    {
                      [
                        "Understanding the tools in Figma",
                        "Understand the basics of making designs",
                        "Design a mobile application with figma",
                      ][idx]
                    }
                  </p>
                </div>
              ))}
            </div>

            <button className="max-md:mt-14 w-full bg-[var(--accent-primary)] py-3 rounded-[10px] text-white text-[14px] mt-auto">
              Go To Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
