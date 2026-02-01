"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import UpcomingTaskCard from "./UpcomingTaskCard";

const tasks = [
  { img: "/firsttaskimg.svg", title: "Creating Mobile App Design", role: "UI UX Design", progresspercent: "75", daysleft: "3 Days Left", mentorsincharge: ["/boyinredbg.svg","/girlonhoodie.svg","/girlinhat.svg","/girlwhandonhead.svg","/dudeonshades.svg"] },
  { img: "/secondtaskimg.svg", title: "Creating Perfect Website", role: "Web Developer", progresspercent: "45", daysleft: "6 Days Left", mentorsincharge: ["/girlinwhite.svg","/boyinred.svg","/girlinhijab.svg","/whitedudeinblack.svg","/blackdude.svg"] },
  { img: "/firsttaskimg.svg", title: "Dashboard Redesign", role: "Product Design", progresspercent: "60", daysleft: "4 Days Left", mentorsincharge: ["/boyincap.svg","/girlinwhite.svg","/blackdude.svg"] },
  { img: "/secondtaskimg.svg", title: "API Integration", role: "Backend Dev", progresspercent: "30", daysleft: "8 Days Left", mentorsincharge: ["/whitedudeinblack.svg","/boyinred.svg"] },
];

export default function UpcomingTask() {
  const [page, setPage] = useState(0);
  const [isMaxMd, setIsMaxMd] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMaxMd(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsPerPage = isMaxMd ? 1 : 2;
  const totalPages = Math.ceil(tasks.length / cardsPerPage);

  const next = () => setPage((p) => Math.min(p + 1, totalPages - 1));
  const prev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <div className="mt-8 font-[Jakarta] text-[var(--foreground)] flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="text-[24px]">Upcoming Task</p>

        <div className="flex w-14.5 justify-between">
          <Image
            src="/arrowleft.svg"
            alt="left"
            width={24}
            height={24}
            className={`cursor-pointer ${page === 0 ? "opacity-40" : ""}`}
            onClick={prev}
            priority
          />
          <Image
            src="/arrow-left.svg"
            alt="right"
            width={24}
            height={24}
            className={`cursor-pointer rotate-180 ${page === totalPages - 1 ? "opacity-40" : ""}`}
            onClick={next}
            priority
          />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex justify-between invisible pointer-events-none">
          <UpcomingTaskCard {...tasks[0]} />
          {!isMaxMd && <UpcomingTaskCard {...tasks[1]} />}
        </div>

        <div
          className="absolute inset-0 flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="w-full flex justify-between shrink-0">
              {tasks
                .slice(pageIndex * cardsPerPage, pageIndex * cardsPerPage + cardsPerPage)
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