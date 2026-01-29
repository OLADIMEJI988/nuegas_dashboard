"use client";

import Image from "next/image";

interface TodayTaskCardProps {
  img: string;
  title: string;
  role: string;
  progresspercent: string;
  daysleft: string;
  mentorsincharge: string[];
}

export default function TodayTaskCard({
  img,
  title,
  role,
  progresspercent,
  daysleft,
  mentorsincharge
}: TodayTaskCardProps) {
  const progress = progresspercent;

  return (
    <div className="font-[Jakarta] text-[var(--foreground)] bg-[var(--surface-primary)] rounded-[10px]">
      <Image src={img} alt="logo" width={280} height={110} priority />

      <div className="my-5 flex flex-col gap-1">
        <p className="text-[16px]">{title}</p>
        <p className="text-[12px] font-[Jakartamd] text-[var(--text-secondary)]">{role}</p>
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <div className="flex justify-between text-[16px]">
          <p>Progress</p>
          <p className="text-[var(--accent-primary)] opacity-90">{progress}%</p>
        </div>

        <div className="relative w-full h-2 rounded-full bg-[var(--surface-muted)]">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-[var(--accent-primary)]"
            style={{ width: `${progress}%` }}
          />

          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--accent-primary)] border-3 border-[var(--surface-primary)]"
            style={{
              left: `calc(${progress}% - 16px)`,
            }}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2">
          <Image src="/clock.svg" alt="logo" width={19} height={19} priority />
          <p className="text-[16px] font-[Jakartamd]">{daysleft}</p>
        </div>

        <div className="flex">
          {mentorsincharge.map((mentor, index) => (
            <div
              key={index}
              className={`bg-[var(--surface-primary)] w-6 h-6 rounded-full flex justify-center ${
                index !== 0 ? "-ml-1.75" : ""
              }`}
            >
              <Image
                src={mentor}
                alt="mentor"
                width={20}
                height={20}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}