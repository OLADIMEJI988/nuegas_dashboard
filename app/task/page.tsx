"use client";

import { useState } from "react";
import Image from "next/image";
import UpcomingTaskCard from "@/components/UpcomingTaskCard";

const timeLimitTasks = [
  {
    img: "/thirdtaskimg.svg",
    title: "Creating Awesome Mobiles",
    role: "UI UX Design",
    progresspercent: "90",
    daysleft: "1 Hour",
    mentorsincharge: [
      "/boyinredbg.svg",
      "/girlonhoodie.svg",
      "/girlinhat.svg",
      "/girlwhandonhead.svg",
      "/dudeonshades.svg",
    ],
  },
  {
    img: "/fourthtaskimg.svg",
    title: "Creating Perfect Website",
    role: "Web Developer",
    progresspercent: "85",
    daysleft: "2 Hour",
    mentorsincharge: [
      "/girlinwhite.svg",
      "/boyinred.svg",
      "/girlinhijab.svg",
      "/whitedudeinblack.svg",
      "/blackdude.svg",
    ],
  },
  {
    img: "/fifthtaskimg.svg",
    title: "Creating Color Palletes",
    role: "UI UX Design",
    progresspercent: "100",
    daysleft: "1 Hour",
    mentorsincharge: ["/boyincap.svg", "/girlinwhite.svg", "/blackdude.svg"],
  },
  {
    img: "/firsttaskimg.svg",
    title: "Creating Mobile App Design",
    role: "UI UX Design",
    progresspercent: "75",
    daysleft: "3 Days Left",
    mentorsincharge: [
      "/boyinredbg.svg",
      "/girlonhoodie.svg",
      "/girlinhat.svg",
      "/girlwhandonhead.svg",
      "/dudeonshades.svg",
    ],
  },
  {
    img: "/secondtaskimg.svg",
    title: "Creating Perfect Website",
    role: "Web Developer",
    progresspercent: "45",
    daysleft: "6 Days Left",
    mentorsincharge: [
      "/girlinwhite.svg",
      "/boyinred.svg",
      "/girlinhijab.svg",
      "/whitedudeinblack.svg",
      "/blackdude.svg",
    ],
  },
  {
    img: "/firsttaskimg.svg",
    title: "Dashboard Redesign",
    role: "Product Design",
    progresspercent: "60",
    daysleft: "4 Days Left",
    mentorsincharge: ["/boyincap.svg", "/girlinwhite.svg", "/blackdude.svg"],
  },
];

const newTasks = [
  {
    img: "/firsttaskimg.svg",
    title: "Creating Mobile App Design",
    role: "UI UX Design",
    progresspercent: "75",
    daysleft: "3 Days Left",
    mentorsincharge: [
      "/boyinredbg.svg",
      "/girlonhoodie.svg",
      "/girlinhat.svg",
      "/girlwhandonhead.svg",
      "/dudeonshades.svg",
    ],
  },
  {
    img: "/secondtaskimg.svg",
    title: "Creating Perfect Website",
    role: "Web Developer",
    progresspercent: "85",
    daysleft: "4 Days Left",
    mentorsincharge: [
      "/girlinwhite.svg",
      "/boyinred.svg",
      "/girlinhijab.svg",
      "/whitedudeinblack.svg",
      "/blackdude.svg",
    ],
  },
  {
    img: "/firsttaskimg.svg",
    title: "Dashboard Redesign",
    role: "Product Design",
    progresspercent: "65",
    daysleft: "3 Days Left",
    mentorsincharge: ["/boyincap.svg", "/girlinwhite.svg", "/blackdude.svg"],
  },
  {
    img: "/thirdtaskimg.svg",
    title: "Creating Awesome Mobiles",
    role: "UI UX Design",
    progresspercent: "90",
    daysleft: "1 Hour",
    mentorsincharge: [
      "/boyinredbg.svg",
      "/girlonhoodie.svg",
      "/girlinhat.svg",
      "/girlwhandonhead.svg",
      "/dudeonshades.svg",
    ],
  },
  {
    img: "/fourthtaskimg.svg",
    title: "Creating Perfect Website",
    role: "Web Developer",
    progresspercent: "85",
    daysleft: "2 Hour",
    mentorsincharge: [
      "/girlinwhite.svg",
      "/boyinred.svg",
      "/girlinhijab.svg",
      "/whitedudeinblack.svg",
      "/blackdude.svg",
    ],
  },
  {
    img: "/fifthtaskimg.svg",
    title: "Creating Color Palletes",
    role: "UI UX Design",
    progresspercent: "100",
    daysleft: "1 Hour",
    mentorsincharge: ["/boyincap.svg", "/girlinwhite.svg", "/blackdude.svg"],
  },
];

const PAGE_SIZE = 3;

export default function Task() {
  const [pages, setPages] = useState({
    timeLimit: 0,
    newTask: 0,
  });

  const getVisibleTasks = (data: any[], page: number) => {
    const start = page * PAGE_SIZE;
    return data.slice(start, start + PAGE_SIZE);
  };

  const timeLimitTotalPages = Math.ceil(timeLimitTasks.length / PAGE_SIZE);
  const newTaskTotalPages = Math.ceil(newTasks.length / PAGE_SIZE);

  return (
    <div className="font-[Jakarta] text-foreground bg-[#FAFAFA]">
      <div className="p-8 bg-white w-full">
        <div className="flex items-center">
          <p className="text-[24px]">Explore Task</p>

          <div className="ml-auto flex gap-6">
            <button className="border border-[#F5F5F7] w-13 h-13 flex justify-center rounded-full">
              <Image src="/notif.svg" alt="logo" width={24} height={24} />
            </button>
            <Image src="/boyinblack.svg" alt="logo" width={52} height={52} />
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <div className="relative w-120">
            <input
              type="text"
              placeholder="Search Task"
              className="w-full border border-[#F5F5F7] rounded-[10px] py-3.5 pl-7 text-[12px] outline-none"
            />
            <Image
              src="/searchicon.svg"
              alt="search"
              width={20}
              height={20}
              className="absolute right-7 top-1/2 -translate-y-1/2"
            />
          </div>

          <div className="flex gap-6">
            <div className="flex items-center py-3.5 px-7 gap-3 border border-[#F5F5F7] rounded-[10px]">
              <Image
                src="/categoryicon.svg"
                alt="icon"
                width={20}
                height={20}
              />
              <p className="text-[12px]">Category</p>
            </div>

            <div className="flex items-center py-3.5 px-7 gap-3 border border-[#F5F5F7] rounded-[10px]">
              <Image src="/sorticon.svg" alt="icon" width={20} height={20} />
              <p className="text-[12px]">Sort By : Deadline</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between">
          <p className="text-[24px]">Time Limit</p>

          <div className="flex w-14.5 justify-between">
            <Image
              src="/arrowleft.svg"
              alt="left"
              width={24}
              height={24}
              className={
                pages.timeLimit === 0 ? "opacity-40" : "cursor-pointer"
              }
              onClick={() =>
                setPages((p) => ({
                  ...p,
                  timeLimit: Math.max(p.timeLimit - 1, 0),
                }))
              }
            />
            <Image
              src="/arrowright.svg"
              alt="right"
              width={24}
              height={24}
              className={
                pages.timeLimit === timeLimitTotalPages - 1
                  ? "opacity-40"
                  : "cursor-pointer"
              }
              onClick={() =>
                setPages((p) => ({
                  ...p,
                  timeLimit: Math.min(p.timeLimit + 1, timeLimitTotalPages - 1),
                }))
              }
            />
          </div>
        </div>

        <div className="flex mt-4.5 gap-6">
          {getVisibleTasks(timeLimitTasks, pages.timeLimit).map((task, idx) => (
            <UpcomingTaskCard key={idx} {...task} />
          ))}
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between">
          <p className="text-[24px]">New Task</p>

          <div className="flex w-14.5 justify-between">
            <Image
              src="/arrowleft.svg"
              alt="left"
              width={24}
              height={24}
              className={pages.newTask === 0 ? "opacity-40" : "cursor-pointer"}
              onClick={() =>
                setPages((p) => ({
                  ...p,
                  newTask: Math.max(p.newTask - 1, 0),
                }))
              }
            />
            <Image
              src="/arrowright.svg"
              alt="right"
              width={24}
              height={24}
              className={
                pages.newTask === newTaskTotalPages - 1
                  ? "opacity-40"
                  : "cursor-pointer"
              }
              onClick={() =>
                setPages((p) => ({
                  ...p,
                  newTask: Math.min(p.newTask + 1, newTaskTotalPages - 1),
                }))
              }
            />
          </div>
        </div>

        <div className="flex mt-4.5 gap-6">
          {getVisibleTasks(newTasks, pages.newTask).map((task, idx) => (
            <UpcomingTaskCard key={idx} {...task} />
          ))}
        </div>
      </div>
    </div>
  );
}
