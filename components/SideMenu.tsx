"use client";

import { useEffect, useState } from "react";
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
          ? "bg-[var(--surface-secondary)] text-[var(--foreground)] font-medium"
          : "text-[var(--text-caption)]",
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
  const [darkMode, setDarkMode] = useState<boolean | null>(null); // null = unknown

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialDark =
      savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    setDarkMode(initialDark);

    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  // only render when darkMode is known
  if (darkMode === null) return null;

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
        return <Settings darkMode={darkMode} setDarkMode={setDarkMode} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen w-full overflow-x-hidden font-[Jakarta]">
      <div className="w-55 xl:w-63 shrink-0 bg-[var(--surface-primary)] p-5 xl:p-8 flex flex-col min-h-full border-r border-r-[var(--surface-secondary)]">
        <div className="flex items-center gap-3 mb-15">
          <Image src="/logo.svg" alt="logo" width={40} height={40} priority />
          <p className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
            Nuegas
          </p>
        </div>

        <nav className="space-y-6">
          <MenuItem
            label="Overview"
            isActive={activeMenu === "overview"}
            onClick={() => setActiveMenu("overview")}
            activeIcon={
              darkMode ? "/overviewicon(darkmode).svg" : "/overviewicon(active).svg"
            }
            inactiveIcon="/overviewicon.svg"
          />
          <MenuItem
            label="Task"
            isActive={activeMenu === "task"}
            onClick={() => setActiveMenu("task")}
            activeIcon={darkMode ? "/taskicon(darkmode).svg" : "/taskicon(active).svg"}
            inactiveIcon="/taskicon.svg"
          />
          <MenuItem
            label="Mentors"
            isActive={activeMenu === "mentors"}
            onClick={() => setActiveMenu("mentors")}
            activeIcon={
              darkMode ? "/mentoricon(darkmode).svg" : "/mentoricon(active).svg"
            }
            inactiveIcon="/mentoricon.svg"
          />
          <MenuItem
            label="Message"
            isActive={activeMenu === "message"}
            onClick={() => setActiveMenu("message")}
            activeIcon={
              darkMode ? "/messageicon(darkmode).svg" : "/messageicon(active).svg"
            }
            inactiveIcon="/messageicon.svg"
          />
          <MenuItem
            label="Settings"
            isActive={activeMenu === "settings"}
            onClick={() => setActiveMenu("settings")}
            activeIcon={
              darkMode ? "/settingicon(darkmode).svg" : "/settingicon(active).svg"
            }
            inactiveIcon="/settingicon.svg"
          />
        </nav>

        {/* Help Center */}
        <div className="mt-auto">
          <div className="relative mt-10 bg-[var(--card-bg)] p-4 flex flex-col text-center rounded-[10px] h-62">
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[10px] z-0">
              <div className="absolute -top-26 -left-26 w-40 h-40 rounded-full bg-[var(--background)]/20" />
              <div className="absolute -bottom-22 -right-22 w-40 h-40 rounded-full bg-[var(--background)]/20" />
            </div>

            <div className="relative z-20 flex justify-center -mt-12">
              <div
                className="w-16 h-16 bg-[var(--surface-primary)] rounded-full flex items-center justify-center"
                style={{
                  boxShadow: `0 -8px 20px 0 rgba(0,0,0,0.1), 0 8px 20px 0 rgba(255,255,255,0.25)`,
                }}
              >
                <div className="w-13 h-13 bg-[#141522] rounded-full flex items-center justify-center">
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

            <div className="flex flex-col items-center justify-center gap-3 flex-1 text-[var(--surface-secondary)]">
              <p className="text-[16px] tracking-wide">Help Center</p>
              <p className="text-[12px] font-[Jakartamd]">
                Having Trouble in Learning. Please contact us for more
                questions.
              </p>
            </div>

            <button className="w-full h-10 mt-auto flex items-center justify-center rounded-[10px] bg-[var(--surface-primary)] text-[12px] tracking-wide">
              Go To Help Center
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-full overflow-x-hidden bg-[var(--surface-secondary)]">
        {renderContent()}
      </main>
    </div>
  );
}
