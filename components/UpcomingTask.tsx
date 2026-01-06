"use client";

import { useState } from "react";
import Image from "next/image";
import UpcomingTaskCard from "./UpcomingTaskCard";

const tasks = [
  {
    img: "/firsttaskimg.svg",
    title: "Creating Mobile App Design",
    role: "UI UX Design",
    progresspercent: "75",
    daysleft: "3",
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
    daysleft: "6",
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
    daysleft: "4",
    mentorsincharge: [
      "/boyincap.svg",
      "/girlinwhite.svg",
      "/blackdude.svg",
    ],
  },
  {
    img: "/secondtaskimg.svg",
    title: "API Integration",
    role: "Backend Dev",
    progresspercent: "30",
    daysleft: "8",
    mentorsincharge: [
      "/whitedudeinblack.svg",
      "/boyinred.svg",
    ],
  },
];

const PAGE_SIZE = 2;
const totalPages = Math.ceil(tasks.length / PAGE_SIZE);

export default function UpcomingTask() {
  const [page, setPage] = useState(0);

  return (
    <div className="mt-8 font-[Jakarta] text-foreground flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="text-[24px]">Upcoming Task</p>

        <div className="flex w-14.5 justify-between">
          <Image
            src="/arrowleft.svg"
            alt="left"
            width={24}
            height={24}
            className={`cursor-pointer ${page === 0 ? "opacity-40" : ""}`}
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            priority
          />

          <Image
            src="/arrowright.svg"
            alt="right"
            width={24}
            height={24}
            className={`cursor-pointer ${
              page === totalPages - 1 ? "opacity-40" : ""
            }`}
            onClick={() =>
              setPage((p) => Math.min(p + 1, totalPages - 1))
            }
            priority
          />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex justify-between invisible pointer-events-none">
          <UpcomingTaskCard {...tasks[0]} />
          <UpcomingTaskCard {...tasks[1]} />
        </div>

        <div
          className="absolute inset-0 flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${page * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className="w-full flex justify-between shrink-0"
            >
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
}
