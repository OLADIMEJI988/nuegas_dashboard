"use client";

import { useState } from "react";
import Image from "next/image";
import Overview from "@/app/overview/page";
import Task from "@/app/task/page";
import Mentors from "@/app/mentors/page";
import Message from "@/app/message/page";
import Settings from "@/app/settin/page";

type MenuItemProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
  activeIcon?: string;
  inactiveIcon?: string;
  iconOnActive?: boolean;
};

function MenuItem({
  label,
  isActive,
  onClick,
  activeIcon,
  inactiveIcon,
  iconOnActive = false,
}: MenuItemProps) {
  const showIcon = iconOnActive ? isActive : true;
  const iconSrc = isActive ? activeIcon : inactiveIcon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full flex items-center gap-3 px-5 py-2.5 text-[14px] rounded-[10px] transition cursor-pointer",
        isActive
          ? "bg-[#F5F5F7] text-foreground font-medium"
          : "text-[#8E92BC]",
      ].join(" ")}
    >
      {showIcon && iconSrc && (
        <Image src={iconSrc} alt={`${label} icon`} width={24} height={24} />
      )}
      <span>{label}</span>
    </button>
  );
}

export default function SideMenuLayout() {
  const [activeMenu, setActiveMenu] = useState("overview");

  const renderContent = () => {
    switch (activeMenu) {
      case "overview":
        return <Overview />;
      case "task":
        return <Task />;
      case "mentors":
        return <Mentors />;
      case "message":
        return <Message />;
      case "settings":
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen w-full overflow-x-hidden font-[Jakarta]">
      <div className="w-55 xl:w-63 shrink-0 bg-white p-5 xl:p-8 flex flex-col min-h-full border-r border-r-[#F5F5F7]">
        <div className="flex items-center gap-3 mb-15">
          <Image src="/logo.svg" alt="logo" width={40} height={40} priority />
          <p className="text-2xl font-bold tracking-tight">Nuegas</p>
        </div>

        <nav className="space-y-6">
          <MenuItem
            label="Overview"
            isActive={activeMenu === "overview"}
            onClick={() => setActiveMenu("overview")}
            activeIcon="/overviewicon(active).svg"
            inactiveIcon="/overviewicon.svg"
          />

          <MenuItem
            label="Task"
            isActive={activeMenu === "task"}
            onClick={() => setActiveMenu("task")}
            activeIcon="/taskicon(active).svg"
            inactiveIcon="/taskicon.svg"
          />

          <MenuItem
            label="Mentors"
            isActive={activeMenu === "mentors"}
            onClick={() => setActiveMenu("mentors")}
            activeIcon="/mentoricon(active).svg"
            inactiveIcon="/mentoricon.svg"
          />

          <MenuItem
            label="Message"
            isActive={activeMenu === "message"}
            onClick={() => setActiveMenu("message")}
            activeIcon="/messageicon(active).svg"
            inactiveIcon="/messageicon.svg"
          />

          <MenuItem
            label="Settings"
            isActive={activeMenu === "settings"}
            onClick={() => setActiveMenu("settings")}
            activeIcon="/settingicon(active).svg"
            inactiveIcon="/settingicon.svg"
          />
        </nav>

        <div className="mt-auto">
          <div className="mt-10 bg-foreground p-4 flex flex-col text-center rounded-[10px] h-62">
            <div className="flex justify-center -mt-12">
              <div
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                style={{
                  boxShadow: `
                                0 -8px 20px 0 rgba(0,0,0,0.1),
                                0 8px 20px 0 rgba(255,255,255,0.25)
                            `,
                }}
              >
                <div className="w-13 h-13 bg-foreground rounded-full flex items-center justify-center">
                  <Image
                    src="/whitequestionmark.svg"
                    alt="logo"
                    width={18}
                    height={18}
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="text-white flex flex-col items-center justify-center gap-3 flex-1">
              <p className="text-[16px] tracking-wide">Help Center</p>
              <p className="text-[12px] font-[Jakartamd]">
                Having Trouble in Learning. Please contact us for more
                questions.
              </p>
            </div>

            <button className="w-full h-10 mt-auto flex items-center justify-center rounded-[10px] bg-white text-foreground text-[12px] tracking-wide">
              Go To Help Center
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-full overflow-x-hidden bg-[#F5F5F7]">{renderContent()}</main>
    </div>
  );
}
