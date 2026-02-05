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
        "w-full flex items-center gap-3 px-5 py-2.5 text-[14px] rounded-[10px] transition",
        isActive
          ? "bg-[var(--surface-secondary)] text-[var(--foreground)] font-medium"
          : "text-[var(--text-caption)]",
      ].join(" ")}
    >
      {showIcon && iconSrc && (
        <Image src={iconSrc} alt={label} width={24} height={24} />
      )}
      <span>{label}</span>
    </button>
  );
}

export default function SideMenuLayout() {
  const [activeMenu, setActiveMenu] = useState("overview");
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [messageMobileView, setMessageMobileView] = useState<"list" | "chat">(
    "list",
  );

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

  if (darkMode === null) return null;

  const handleNavClick = (menu: string) => {
    setActiveMenu(menu);
    setMobileNavOpen(false);
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "overview":
        return <Overview />;
      case "task":
        return <Task />;
      case "mentors":
        return <Mentors />;
      case "message":
        return (
          <Message
            mobileView={messageMobileView}
            setMobileView={setMessageMobileView}
          />
        );

      case "settings":
        return <Settings darkMode={darkMode} setDarkMode={setDarkMode} />;
      default:
        return null;
    }
  };

  const HelpCenterCard = (
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
            Having Trouble in Learning. Please contact us for more questions.
          </p>
        </div>

        <button className="w-full h-10 mt-auto flex items-center justify-center rounded-[10px] bg-[var(--surface-primary)] text-[12px] tracking-wide">
          Go To Help Center
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen w-full overflow-x-hidden font-[Jakarta]">
      {/* desktop menu */}
      <aside className="w-55 2xl:w-63 max-md:hidden shrink-0 bg-[var(--surface-primary)] p-5 2xl:p-8 flex flex-col border-r border-[var(--surface-secondary)]">
        <div className="flex items-center gap-3 mb-15">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <p className="text-2xl font-bold text-[var(--foreground)]">Nuegas</p>
        </div>

        <div className="flex flex-col flex-1">
          <nav className="space-y-6">
            <MenuItem
              label="Overview"
              isActive={activeMenu === "overview"}
              onClick={() => handleNavClick("overview")}
              activeIcon={
                darkMode
                  ? "/overviewicon(darkmode).svg"
                  : "/overviewicon(active).svg"
              }
              inactiveIcon="/overviewicon.svg"
            />
            <MenuItem
              label="Task"
              isActive={activeMenu === "task"}
              onClick={() => handleNavClick("task")}
              activeIcon={
                darkMode ? "/taskicon(darkmode).svg" : "/taskicon(active).svg"
              }
              inactiveIcon="/taskicon.svg"
            />
            <MenuItem
              label="Mentors"
              isActive={activeMenu === "mentors"}
              onClick={() => handleNavClick("mentors")}
              activeIcon={
                darkMode
                  ? "/mentoricon(darkmode).svg"
                  : "/mentoricon(active).svg"
              }
              inactiveIcon="/mentoricon.svg"
            />
            <MenuItem
              label="Message"
              isActive={activeMenu === "message"}
              onClick={() => handleNavClick("message")}
              activeIcon={
                darkMode
                  ? "/messageicon(darkmode).svg"
                  : "/messageicon(active).svg"
              }
              inactiveIcon="/messageicon.svg"
            />
            <MenuItem
              label="Settings"
              isActive={activeMenu === "settings"}
              onClick={() => handleNavClick("settings")}
              activeIcon={
                darkMode
                  ? "/settingicon(darkmode).svg"
                  : "/settingicon(active).svg"
              }
              inactiveIcon="/settingicon.svg"
            />
          </nav>

          {HelpCenterCard}
        </div>
      </aside>

      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* mobile menu */}
      <aside
        className={[
          "fixed top-0 left-0 z-50 h-full w-63 bg-[var(--surface-primary)] p-6 flex flex-col border-r border-[var(--surface-secondary)] transform transition-transform duration-300 md:hidden",
          mobileNavOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-15">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <p className="text-2xl font-bold text-[var(--foreground)]">
              Nuegas
            </p>
          </div>

          <nav className="space-y-6">
            <MenuItem
              label="Overview"
              isActive={activeMenu === "overview"}
              onClick={() => handleNavClick("overview")}
              activeIcon={
                darkMode
                  ? "/overviewicon(darkmode).svg"
                  : "/overviewicon(active).svg"
              }
              inactiveIcon="/overviewicon.svg"
            />
            <MenuItem
              label="Task"
              isActive={activeMenu === "task"}
              onClick={() => handleNavClick("task")}
              activeIcon={
                darkMode ? "/taskicon(darkmode).svg" : "/taskicon(active).svg"
              }
              inactiveIcon="/taskicon.svg"
            />
            <MenuItem
              label="Mentors"
              isActive={activeMenu === "mentors"}
              onClick={() => handleNavClick("mentors")}
              activeIcon={
                darkMode
                  ? "/mentoricon(darkmode).svg"
                  : "/mentoricon(active).svg"
              }
              inactiveIcon="/mentoricon.svg"
            />
            <MenuItem
              label="Message"
              isActive={activeMenu === "message"}
              onClick={() => handleNavClick("message")}
              activeIcon={
                darkMode
                  ? "/messageicon(darkmode).svg"
                  : "/messageicon(active).svg"
              }
              inactiveIcon="/messageicon.svg"
            />
            <MenuItem
              label="Settings"
              isActive={activeMenu === "settings"}
              onClick={() => handleNavClick("settings")}
              activeIcon={
                darkMode
                  ? "/settingicon(darkmode).svg"
                  : "/settingicon(active).svg"
              }
              inactiveIcon="/settingicon.svg"
            />
          </nav>

        </div>
      </aside>

      <div className="flex flex-col flex-1 min-w-0">
        {!(activeMenu === "message" && messageMobileView === "chat") && (
          <div className="hidden max-md:flex px-5 py-7 justify-between border-b border-[var(--surface-primary)] bg-[var(--surface-primary)]">
            <div
              onClick={() => setMobileNavOpen(true)}
              className="border border-[var(--surface-secondary)] w-11 h-11 flex items-center justify-center rounded-full cursor-pointer"
            >
              <Image src="/menu.svg" alt="menu" width={24} height={24} />
            </div>

            <div className="flex gap-4">
              <button className="border border-[var(--surface-secondary)] w-11 h-11 flex items-center justify-center rounded-full">
                <Image src="/notif.svg" alt="notif" width={20} height={20} />
              </button>
              <Image
                src="/boyinblack.svg"
                alt="profile"
                width={44}
                height={44}
              />
            </div>
          </div>
        )}

        <main className="flex-1 overflow-x-hidden bg-[var(--surface-secondary)]">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
