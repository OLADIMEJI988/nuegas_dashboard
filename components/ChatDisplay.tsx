"use client";

import Image from "next/image";

interface CardDisplayProps {
  img: string;
  name: string;
  time: string;
  message_shot: string;
  isRead: boolean;
  deleted?: boolean;
}

export default function ChatDisplay({
  img,
  name,
  time,
  message_shot,
  isRead,
}: CardDisplayProps) {
  return (
    <div className="w-full font-[Jakarta] mt-4">
      <div className="flex gap-3 bg-[#FAFAFA] py-2.5 px-5 rounded-[10px]">
        <Image src={img} alt="logo" width={48} height={48} priority />

        <div className="flex flex-col flex-1 gap-2">
          <div className="flex items-center w-full">
            <p className="text-[14px]">{name}</p>
            <p className="ml-auto font-[Jakartarg] text-[12px] text-[#8E92BC]">
              {time} Ago
            </p>
          </div>

          <div className="flex items-center w-full">
            <p
              className={`text-[12px] font-[Jakartarg] ${
                isRead ? "text-[#8E92BC]" : "text-foreground"
              }`}
            >
              {message_shot}
            </p>

            <div className="ml-auto flex items-center">
              {!isRead && <div className="w-2 h-2 bg-[#DB5962] rounded-full" />}

              {isRead && (
                <Image
                  src="/readicon.svg"
                  alt="read"
                  width={18}
                  height={18}
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-4">
        <div className="w-full bg-[#F5F5F7] rounded-[10px] h-px"></div>
      </div>
    </div>
  );
}
