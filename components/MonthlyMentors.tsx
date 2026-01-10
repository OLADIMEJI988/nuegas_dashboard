"use client";

import { useState } from "react";
import Image from "next/image";
import MonthlyMentorCard from "./MonthlyMentorCard";

const mentors = [
  { img: "/boyincap.svg", name: "Curious George", role: "UI UX Design", tasknum: "40", rating: "4.7", reviewnum: "750" },
  { img: "/blackdude.svg", name: "Abraham Lincoln", role: "3D Design", tasknum: "32", rating: "4.9", reviewnum: "510" },
  { img: "/girlinhijab.svg", name: "Jane Doe", role: "Product Design", tasknum: "28", rating: "4.6", reviewnum: "320" },
  { img: "/whitedudeinblack.svg", name: "Oladimeji Smith", role: "Frontend Dev", tasknum: "36", rating: "4.8", reviewnum: "640" },
  { img: "/boyinred.svg", name: "Samuel Green", role: "Backend Dev", tasknum: "30", rating: "4.5", reviewnum: "410" },
  { img: "/girlinwhite.svg", name: "Amara Johnson", role: "UI Research", tasknum: "34", rating: "4.3", reviewnum: "290" },
];


export default function MonthlyMentors() {
  const [page, setPage] = useState(0);
  const cardsPerPage = 2;
  const totalPages = Math.ceil(mentors.length / cardsPerPage);

  const next = () => setPage((p) => Math.min(p + 1, totalPages - 1));
  const prev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <div className="mt-8 font-[Jakarta] text-foreground flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="text-[24px]">Monthly Mentors</p>
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
            src="/arrowright.svg"
            alt="right"
            width={24}
            height={24}
            className={`cursor-pointer ${page === totalPages - 1 ? "opacity-40" : ""}`}
            onClick={next}
            priority
          />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex justify-between invisible pointer-events-none">
          <MonthlyMentorCard {...mentors[0]} />
          <MonthlyMentorCard {...mentors[1]} />
        </div>

        <div
          className="absolute inset-0 flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="w-full flex justify-between shrink-0">
              {mentors
                .slice(pageIndex * cardsPerPage, pageIndex * cardsPerPage + cardsPerPage)
                .map((mentor, i) => (
                  <MonthlyMentorCard key={i} {...mentor} />
                ))}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
