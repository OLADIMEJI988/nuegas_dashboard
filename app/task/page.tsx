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
  ...timeLimitTasks,
];


export default function Task() {
  const [pages, setPages] = useState({ timeLimit: 0, newTask: 0 });
  const [pageSize, setPageSize] = useState<number | null>(null);


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


  useEffect(() => {
    const resolvePageSize = () => {
      setPageSize(window.innerWidth < 768 ? 1 : 3);
    };

    resolvePageSize();
    window.addEventListener("resize", resolvePageSize);

    return () => window.removeEventListener("resize", resolvePageSize);
  }, []);


  useEffect(() => {
    if (pageSize === null) return;
    setPages({ timeLimit: 0, newTask: 0 });
  }, [pageSize]);

  if ((isLoading && showSkeleton) || pageSize === null) {
    return <TaskSkeleton />;
  }

  const getTotalPages = (tasks: any[]) =>
    Math.ceil(tasks.length / pageSize);

  const renderCarousel = (
    tasks: any[],
    page: number,
    title: string,
    pageKey: "timeLimit" | "newTask",
  ) => {
    const totalPages = getTotalPages(tasks);

    return (
      <div className="p-8 max-md:px-5">
        <div className="flex justify-between mb-4 max-md:mb-4.5 items-center">
          <p className="text-[24px]">{title}</p>

          <div className="flex gap-2.5">
            <Image
              src="/arrowleft.svg"
              alt="left"
              width={24}
              height={24}
              className={`cursor-pointer ${
                page === 0 ? "opacity-40 pointer-events-none" : ""
              }`}
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
                page === totalPages - 1
                  ? "opacity-40 pointer-events-none"
                  : ""
              }`}
              onClick={() =>
                setPages((p) => ({
                  ...p,
                  [pageKey]: Math.min(
                    p[pageKey] + 1,
                    totalPages - 1,
                  ),
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
              <div
                key={i}
                className="w-full shrink-0 flex justify-between"
              >
                {tasks
                  .slice(i * pageSize, i * pageSize + pageSize)
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
      <div className="p-8 max-md:py-0 max-md:px-5 bg-[var(--surface-primary)]">
        <div className="flex items-center mb-6 max-md:hidden">
          <p className="text-[24px]">Explore Task</p>
          <div className="ml-auto flex gap-6">
            <button className="border border-[var(--surface-secondary)] w-13 h-13 flex justify-center rounded-full">
              <Image src="/notif.svg" alt="logo" width={24} height={24} />
            </button>
            <Image src="/boyinblack.svg" alt="logo" width={52} height={52} />
          </div>
        </div>

        <div className="hidden max-md:flex w-full pt-4">
          <p className="text-[24px]">Explore Task</p>
        </div>

        <div className="flex justify-between max-md:pt-8 max-md:pb-6 max-md:gap-4">
          <div className="relative w-120 max-md:w-full">
            <input
              type="text"
              placeholder="Search Task"
              className="w-full border border-[var(--surface-secondary)] rounded-[10px] py-3.5 max-md:py-4 pl-7 max-md:pl-5 pr-14 font-[Jakartarg] text-[12px] placeholder:text-[14px] max-md:text-[16px] outline-none"
            />
            <Image
              src="/searchicon.svg"
              alt="search"
              width={20}
              height={20}
              className="absolute right-7 max-md:right-5 top-1/2 -translate-y-1/2"
            />
          </div>

          <div className="flex gap-6 max-md:hidden">
            <div className="flex items-center py-3.5 px-7 gap-3 border border-[var(--surface-secondary)] rounded-[10px]">
              <Image src="/categoryicon.svg" alt="icon" width={20} height={20} />
              <p className="text-[12px]">Category</p>
            </div>
            <div className="flex items-center py-3.5 px-7 gap-3 border border-[var(--surface-secondary)] rounded-[10px]">
              <Image src="/sorticon.svg" alt="icon" width={20} height={20} />
              <p className="text-[12px]">Sort By : Deadline</p>
            </div>
          </div>

          <div className="hidden max-md:flex items-center p-3.5 border border-[var(--surface-secondary)] rounded-[10px]">
            <Image src="/settinicon.svg" alt="icon" width={24} height={24} />
          </div>
        </div>
      </div>

      {renderCarousel(
        timeLimitTasks,
        pages.timeLimit,
        "Time Limit",
        "timeLimit",
      )}

      {renderCarousel(
        newTasks,
        pages.newTask,
        "New Task",
        "newTask",
      )}
    </div>
  );
}
