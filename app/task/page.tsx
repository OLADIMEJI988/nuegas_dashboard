"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import UpcomingTaskCard from "@/components/UpcomingTaskCard";
import TaskSkeleton from "@/components/TaskSkeleton";

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
    title: "Creating Fresh Website",
    role: "Web Developer",
    progresspercent: "85",
    daysleft: "2 Hours",
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
    daysleft: "2 Hours",
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
    daysleft: "6 Hours",
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
    daysleft: "5 Hours",
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
    progresspercent: "45",
    daysleft: "5 Days Left",
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
    progresspercent: "75",
    daysleft: "3 Days Left",
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
    progresspercent: "80",
    daysleft: "2 Days Left",
    mentorsincharge: ["/boyincap.svg", "/girlinwhite.svg", "/blackdude.svg"],
  },
];

const PAGE_SIZE = 3;

export default function Task() {
  const [pages, setPages] = useState({ timeLimit: 0, newTask: 0 });

  const connection =
    typeof navigator !== "undefined" ? (navigator as any).connection : null;
  const isSlowNetwork =
    connection &&
    (connection.effectiveType === "2g" || connection.saveData === true);

  const [showSkeleton] = useState(isSlowNetwork);
  const [isLoading, setIsLoading] = useState(isSlowNetwork);

  const getTotalPages = (tasks: any[]) => Math.ceil(tasks.length / PAGE_SIZE);

  useEffect(() => {
    if (!showSkeleton) return;
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [showSkeleton]);

  if (isLoading && showSkeleton) {
    return <TaskSkeleton />;
  }

  const renderCarousel = (
    tasks: any[],
    page: number,
    title: string,
    pageKey: "timeLimit" | "newTask",
  ) => {
    const totalPages = getTotalPages(tasks);

    return (
      <div className="p-8">
        <div className="flex justify-between mb-4 items-center">
          <p className="text-[24px]">{title}</p>
          <div className="flex gap-2.5">
            <Image
              src="/arrowleft.svg"
              alt="left"
              width={24}
              height={24}
              className={`cursor-pointer ${page === 0 ? "opacity-40" : ""}`}
              onClick={() =>
                setPages((p) => ({
                  ...p,
                  [pageKey]: Math.max(p[pageKey] - 1, 0),
                }))
              }
            />
            <Image
              src="/arrow-left.svg"
              alt="right"
              width={24}
              height={24}
              className={`cursor-pointer rotate-180 ${
                page === totalPages - 1 ? "opacity-40" : ""
              }`}
              onClick={() =>
                setPages((p) => ({
                  ...p,
                  [pageKey]: Math.min(p[pageKey] + 1, totalPages - 1),
                }))
              }
            />
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, i) => (
              <div key={i} className="w-full shrink-0 flex justify-between">
                {tasks
                  .slice(i * PAGE_SIZE, i * PAGE_SIZE + PAGE_SIZE)
                  .map((task, idx) => (
                    <UpcomingTaskCard key={idx} {...task} />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="font-[Jakarta] text-foreground bg-[var(--background)] w-full max-w-full overflow-x-hidden">
      <div className="p-8 bg-[var(--surface-primary)]">
        <div className="flex items-center mb-6">
          <p className="text-[24px]">Explore Task</p>
          <div className="ml-auto flex gap-6">
            <button className="border border-[var(--surface-secondary)] w-13 h-13 flex justify-center rounded-full">
              <Image src="/notif.svg" alt="logo" width={24} height={24} />
            </button>
            <Image src="/boyinblack.svg" alt="logo" width={52} height={52} />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="relative w-120">
            <input
              type="text"
              placeholder="Search Task"
              className="w-full border border-[var(--surface-secondary)] rounded-[10px] py-3.5 pl-7 font-[Jakartarg] text-[12px] outline-none focus:border-[var(--surface-secondary)]"
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
            <div className="flex items-center py-3.5 px-7 gap-3 border border-[var(--surface-secondary)] rounded-[10px]">
              <Image src="/categoryicon.svg" alt="icon" width={20} height={20} />
              <p className="text-[12px]">Category</p>
            </div>
            <div className="flex items-center py-3.5 px-7 gap-3 border border-[var(--surface-secondary)] rounded-[10px]">
              <Image src="/sorticon.svg" alt="icon" width={20} height={20} />
              <p className="text-[12px]">Sort By : Deadline</p>
            </div>
          </div>
        </div>
      </div>

      {renderCarousel(timeLimitTasks, pages.timeLimit, "Time Limit", "timeLimit")}
      {renderCarousel(newTasks, pages.newTask, "New Task", "newTask")}
    </div>
  );
}