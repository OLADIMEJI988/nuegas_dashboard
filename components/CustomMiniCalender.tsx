"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

export default function Calendar() {
  const [baseDate, setBaseDate] = useState(new Date());
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 60 * 1000); 

    return () => clearInterval(interval);
  }, []);

  const changeWeek = (dir: "prev" | "next") => {
    const d = new Date(baseDate);
    d.setDate(d.getDate() + (dir === "next" ? 7 : -7));
    setBaseDate(d);
  };

  const changeMonth = (dir: "prev" | "next") => {
    const d = new Date(baseDate);
    d.setMonth(d.getMonth() + (dir === "next" ? 1 : -1));
    setBaseDate(d);
  };

  const weekDates = DAYS.map((_, i) => {
    const d = new Date(baseDate);
    d.setDate(baseDate.getDate() - baseDate.getDay() + i);
    return d;
  });

  return (
    <div className="bg-white w-full rounded-[10px] p-4 xl:p-6 flex flex-col gap-7">
      <div className="flex justify-between items-center">
        <button onClick={() => changeMonth("prev")} className="flex cursor-pointer">
          <Image
            src="/arrow-left.svg"
            alt="month-prev"
            width={20}
            height={20}
          />
          <Image
            src="/arrow-left.svg"
            alt="month-prev"
            width={20}
            height={20}
            className="-ml-2"
          />
        </button>

        <button onClick={() => changeWeek("prev")} className="cursor-pointer">
          <Image src="/arrow-left.svg" alt="week-prev" width={20} height={20} />
        </button>

        <p className="text-[14px] font-medium">
          {baseDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </p>

        <button onClick={() => changeWeek("next")} className="cursor-pointer">
          <Image
            src="/arrow-left.svg"
            alt="week-next"
            width={20}
            height={20}
            className="rotate-180"
          />
        </button>

        <button onClick={() => changeMonth("next")} className="flex cursor-pointer">
          <Image
            src="/arrow-left.svg"
            alt="month-next"
            width={20}
            height={20}
            className="rotate-180"
          />
          <Image
            src="/arrow-left.svg"
            alt="month-next"
            width={20}
            height={20}
            className="rotate-180 -ml-2"
          />
        </button>
      </div>

      <div className="flex justify-between gap-0.5">
        {weekDates.map((date, i) => {
          const isToday = date.toDateString() === today.toDateString();

          return (
            <div
              key={i}
              className={`flex flex-col h-17 p-1 rounded-t-full rounded-b-full items-center ${
                isToday ? "bg-foreground text-white" : "text-foreground"
              }`}
            >
              <p className="text-[12px] mb-auto">{DAYS[i]}</p>

              <div
                className={`w-8 h-8 text-[12px] flex items-center justify-center rounded-full ${
                  isToday ? "bg-[#546FFF]" : "bg-[#F5F5F7]"
                }`}
              >
                <p>{date.getDate()}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
