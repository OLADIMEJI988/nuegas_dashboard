"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import MonthlyMentorCard from "@/components/MonthlyMentorCard";
import MentorsSkeleton from "@/components/MentorsSkeleton";

const recentmentors = [
  {
    img: "/boyincap.svg",
    name: "Curious George",
    role: "UI UX Design",
    tasknum: "40",
    rating: "4.7",
    reviewnum: "750",
  },
  {
    img: "/blackdude.svg",
    name: "Abraham Lincoln",
    role: "3D Design",
    tasknum: "32",
    rating: "4.9",
    reviewnum: "510",
  },
  {
    img: "/girlinhijab.svg",
    name: "Jane Doe",
    role: "Product Design",
    tasknum: "28",
    rating: "4.6",
    reviewnum: "320",
  },
  {
    img: "/whitedudeinblack.svg",
    name: "Oladimeji Smith",
    role: "Frontend Dev",
    tasknum: "36",
    rating: "4.8",
    reviewnum: "640",
  },
  {
    img: "/boyinred.svg",
    name: "Samuel Green",
    role: "Backend Dev",
    tasknum: "30",
    rating: "4.5",
    reviewnum: "410",
  },
  {
    img: "/girlinwhite.svg",
    name: "Amara Johnson",
    role: "UI Research",
    tasknum: "34",
    rating: "4.3",
    reviewnum: "290",
  },
];

const mentors = [
  {
    img: "/michealstone.svg",
    name: "Michael Stone",
    role: "UX Researcher",
    about:
      "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ",
    tasknum: "27",
    rating: "4.4",
    reviewnum: "305",
  },
  {
    img: "/girlinhat.svg",
    name: "Sophia Turner",
    role: "Visual Designer",
    about:
      "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ",
    tasknum: "41",
    rating: "4.8",
    reviewnum: "690",
  },
  {
    img: "/dudeonshades.svg",
    name: "Daniel Brooks",
    role: "Motion Designer",
    about:
      "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ",
    tasknum: "29",
    rating: "4.6",
    reviewnum: "380",
  },
  {
    img: "/boyincap.svg",
    name: "Curious George",
    role: "UI UX Design",
    tasknum: "40",
    rating: "4.7",
    about:
      "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ",
    reviewnum: "750",
  },
  {
    img: "/blackdude.svg",
    name: "Abraham Lincoln",
    role: "3D Design",
    tasknum: "32",
    rating: "4.9",
    about:
      "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ",
    reviewnum: "510",
  },
  {
    img: "/girlinhijab.svg",
    name: "Jane Doe",
    role: "Product Design",
    tasknum: "28",
    rating: "4.6",
    about:
      "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ",
    reviewnum: "320",
  },
  {
    img: "/whitedudeinblack.svg",
    name: "Oladimeji Smith",
    role: "Frontend Dev",
    about:
      "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ",
    tasknum: "36",
    rating: "4.8",
    reviewnum: "640",
  },
  {
    img: "/boyinred.svg",
    name: "Samuel Green",
    role: "Backend Dev",
    about:
      "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ",
    tasknum: "30",
    rating: "4.5",
    reviewnum: "410",
  },
  {
    img: "/girlinwhite.svg",
    name: "Amara Johnson",
    role: "UI Research",
    about:
      "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ",
    tasknum: "34",
    rating: "4.3",
    reviewnum: "290",
  },
  {
    img: "/girlonhoodie.svg",
    name: "Emily Carter",
    role: "UI Designer",
    about:
      "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ",
    tasknum: "33",
    rating: "4.7",
    reviewnum: "455",
  },
  {
    img: "/boyinredbg.svg",
    name: "Joshua Williams",
    role: "Fullstack Developer",
    about:
      "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ",
    tasknum: "38",
    rating: "4.9",
    reviewnum: "720",
  },
  {
    img: "/dudewlonghair.svg",
    name: "Kevin Adams",
    role: "Interaction Designer",
    about:
      "Hi, I'm Jessica Jane. I am a doctoral student at Harvard University majoring in Web . . . ",
    tasknum: "31",
    rating: "4.5",
    reviewnum: "398",
  },
];

export default function Mentors() {
  const showAbout = true;
  const [page, setPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(recentmentors.length / cardsPerPage);

  const next = () => setPage((p) => Math.min(p + 1, totalPages - 1));
  const prev = () => setPage((p) => Math.max(p - 1, 0));

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(t);
  }, []);

  if (isLoading) {
    return <MentorsSkeleton />;
  }

  return (
    <div className="font-[Jakarta] text-foreground bg-[#FAFAFA]">
      <div className="p-8 bg-white w-full">
        <div className="flex items-center">
          <p className="text-[24px]">Explore Mentors</p>

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

        <div className="mt-6 flex justify-between">
          <div className="relative w-120">
            <input
              type="text"
              placeholder="Search Mentors"
              className="w-full border border-[#F5F5F7] rounded-[10px] py-3.5 pl-7 font-[Jakartarg] text-[12px] outline-none focus:outline-none focus:ring-0 focus:border-[#F5F5F7]"
            />

            <Image
              src="/searchicon.svg"
              alt="search"
              width={20}
              height={20}
              className="absolute right-7 top-1/2 -translate-y-1/2 pointer-events-none"
              priority
            />
          </div>

          <div className="flex gap-6">
            <div className="flex items-center py-3.5 px-7 gap-3 border border-[#F5F5F7] rounded-[10px]">
              <Image
                src="/categoryicon.svg"
                alt="icon"
                width={20}
                height={20}
                priority
              />
              <p className="text-[12px]">Category</p>
            </div>

            <div className="flex items-center py-3.5 px-7 gap-3 border border-[#F5F5F7] rounded-[10px]">
              <Image
                src="/sorticon.svg"
                alt="icon"
                width={20}
                height={20}
                priority
              />
              <p className="text-[12px]">Sort By : Popular</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between">
          <p className="text-[24px]">Recent Mentors</p>
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
              className={`cursor-pointer ${
                page === totalPages - 1 ? "opacity-40" : ""
              }`}
              onClick={next}
              priority
            />
          </div>
        </div>

        <div className="relative overflow-hidden mt-4.5">
          <div className="flex justify-between invisible pointer-events-none">
            <MonthlyMentorCard {...recentmentors[0]} showAbout={showAbout} />
            <MonthlyMentorCard {...recentmentors[1]} showAbout={showAbout} />
          </div>

          <div
            className="absolute inset-0 flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="w-full flex justify-between shrink-0"
              >
                {recentmentors
                  .slice(
                    pageIndex * cardsPerPage,
                    pageIndex * cardsPerPage + cardsPerPage,
                  )
                  .map((recentmentor, i) => (
                    <MonthlyMentorCard
                      key={i}
                      {...recentmentor}
                      showAbout={showAbout}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-4.5">
          <p className="text-[24px]">Mentors</p>
        </div>

        <div className="flex flex-wrap justify-between gap-y-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="xl:w-[32%] w-[32.7%]">
              <MonthlyMentorCard {...mentor} showAbout={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
