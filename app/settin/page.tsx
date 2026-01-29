"use client";

import { useState } from "react";
import Image from "next/image";

interface SettingsProps {
  darkMode: boolean | null;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const languages = [
  "English (Default)",
  "French",
  "Spanish",
  "German",
  "Portuguese",
];

const timezones = [
  "GMT +1 (West Africa)",
  "GMT 0 (London)",
  "GMT -5 (New York)",
  "GMT +2 (Berlin)",
];

const notifications = [
  { id: "message", label: "Message" },
  { id: "task_update", label: "Task Update" },
  { id: "task_deadline", label: "Task Deadline" },
  { id: "mentor_help", label: "Mentor Help" },
];

export default function Settings({ darkMode, setDarkMode }: SettingsProps) {
  const [activeTab, setActiveTab] = useState<"general" | "notification">(
    "general",
  );

  const [languageOpen, setLanguageOpen] = useState(false);
  const [timezoneOpen, setTimezoneOpen] = useState(false);
  const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("24h");

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedTimezone, setSelectedTimezone] = useState(timezones[0]);

  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    message: true,
    task_update: false,
    task_deadline: true,
    mentor_help: false,
  });

  const toggleTheme = () => {
    if (darkMode === null) return;
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const toggle = (id: string) => {
    setEnabled((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="font-[Jakarta] h-full bg-[var(--background)] text-[var(--foreground)]">
      <div className="p-8 bg-[var(--surface-primary)]">
        <div className="flex items-center">
          <p className="text-[24px]">Settings</p>
          <div className="ml-auto flex gap-6">
            <button className="w-13 h-13 flex justify-center rounded-full border border-[var(--border-subtle)]">
              <Image src="/notif.svg" alt="logo" width={24} height={24} />
            </button>
            <Image src="/boyinblack.svg" alt="logo" width={52} height={52} />
          </div>
        </div>
      </div>

      <div className="m-8 p-8 bg-[var(--surface-primary)] rounded-[10px]">
        {/* Tabs */}
        <div className="flex w-full pt-5 gap-6 border-b border-[var(--surface-secondary)]">
          {["general", "notification"].map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className="flex flex-col gap-3 text-center cursor-pointer"
            >
              <p
                className={`text-[14px] px-3 ${
                  activeTab === tab
                    ? "font-[Jakartamd] text-[var(--foreground)]"
                    : "font-[Jakartarg] text-[var(--text-caption)]"
                }`}
              >
                {tab === "general" ? "General" : "Notification"}
              </p>

              {activeTab === tab && (
                <div className="w-full h-0.5 translate-y-px bg-[var(--accent-primary)]" />
              )}
            </div>
          ))}
        </div>

        {activeTab === "general" && (
          <>
            <div className="mt-9 mb-8 flex flex-col gap-4">
              <p className="text-[14px]">Language</p>
              <div className="relative w-full max-w-md font-[Jakartamd]">
                <button
                  onClick={() => {
                    setLanguageOpen(!languageOpen);
                    setTimezoneOpen(false);
                  }}
                  className="w-full px-5 py-[17.5px] flex items-center justify-between rounded-[10px] text-[12px] cursor-pointer border bg-[var(--surface-primary)] border-[var(--surface-secondary)]"
                >
                  <span>{selectedLanguage}</span>
                  <Image
                    src="/arrowdnicon.svg"
                    alt="toggle"
                    width={15}
                    height={15}
                    className={`transition-transform ${languageOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {languageOpen && (
                  <div className="absolute z-20 top-full left-0 w-full mt-2 bg-[var(--surface-primary)] border border-[var(--surface-secondary)] rounded-[10px] shadow-lg overflow-hidden">
                    {languages.map((lang) => (
                      <div
                        key={lang}
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setLanguageOpen(false);
                        }}
                        className={`p-5 text-[12px] cursor-pointer hover:bg-[var(--surface-secondary)] ${
                          selectedLanguage === lang ? "text-[#546FFF]" : ""
                        }`}
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[14px]">Timezone</p>
              <div className="relative w-full max-w-md font-[Jakartamd]">
                <button
                  onClick={() => {
                    setTimezoneOpen(!timezoneOpen);
                    setLanguageOpen(false);
                  }}
                  className="w-full px-5 py-[17.5px] flex items-center justify-between rounded-[10px] text-[12px] cursor-pointer border bg-[var(--surface-primary)] border-[var(--surface-secondary)]"
                >
                  <span>{selectedTimezone}</span>
                  <Image
                    src="/arrowdnicon.svg"
                    alt="toggle"
                    width={15}
                    height={15}
                  />
                </button>

                {timezoneOpen && (
                  <div className="absolute z-20 top-full left-0 w-full mt-2 bg-[var(--surface-primary)] border border-[var(--surface-secondary)] rounded-[10px] shadow-lg overflow-hidden">
                    {timezones.map((zone) => (
                      <div
                        key={zone}
                        onClick={() => {
                          setSelectedTimezone(zone);
                          setTimezoneOpen(false);
                        }}
                        className={`p-5 text-[12px] cursor-pointer hover:bg-[var(--surface-secondary)] ${
                          selectedTimezone === zone ? "text-[#546FFF]" : ""
                        }`}
                      >
                        {zone}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <p className="text-[14px]">Time Format</p>
              <div className="flex gap-8">
                {["24h", "12h"].map((format) => (
                  <div
                    key={format}
                    onClick={() => setTimeFormat(format as any)}
                    className={`w-46 py-3.75 px-5 rounded-[10px] border flex items-center cursor-pointer ${
                      timeFormat === format
                        ? "border-[var(--accent-primary)]"
                        : "border-[var(--surface-secondary)]"
                    }`}
                  >
                    <p className="font-[Jakartamd] text-[12px]">
                      {format === "24h" ? "24 Hours" : "12 Hours"}
                    </p>
                    <div
                      className={`w-5 h-5 rounded-full ml-auto ${
                        timeFormat === format
                          ? "border-4 border-[var(--accent-primary)]"
                          : "border-2 border-[var(--surface-secondary)]"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <button
                type="button"
                onClick={toggleTheme}
                className={`w-13.75 h-7.5 rounded-full p-[3.7px] transition-colors duration-300 cursor-pointer border ${
                  darkMode
                    ? "bg-[var(--surface-muted)] border-[var(--surface-muted)]"
                    : "bg-[var(--surface-secondary)] border-[var(--surface-secondary)]"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full transition-transform duration-300 ${
                    darkMode
                      ? "bg-[var(--accent-primary)] translate-x-[26.5px]"
                      : "bg-[var(--border-subtle)]"
                  }`}
                />
              </button>
              <p className="text-[14px] select-none">Dark Mode</p>
            </div>
          </>
        )}

        {activeTab === "notification" && (
          <div className="flex flex-col gap-6 mt-9">
            {notifications.map((item) => {
              const isOn = enabled[item.id];
              return (
                <div key={item.id} className="flex items-center gap-6">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className={`w-13.75 h-7.5 rounded-full p-[3.7px] transition-colors duration-300 cursor-pointer border ${
                      isOn
                        ? "bg-[var(--surface-muted)] border-[var(--surface-muted)]"
                        : "bg-[var(--surface-secondary)] border-[var(--surface-secondary)]"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full transition-transform duration-300 ${
                        isOn
                          ? "bg-[var(--accent-primary)] translate-x-[26.5px]"
                          : "bg-[var(--border-subtle)]"
                      }`}
                    />
                  </button>
                  <p className="text-[14px] select-none">{item.label}</p>
                </div>
              );
            })}
          </div>
        )}

        <button className="mt-16 w-54 py-3 rounded-[10px] text-[14px] text-[var(--surface-primary)] bg-[var(--accent-primary)] cursor-pointer">
          Save Changes
        </button>
      </div>
    </div>
  );
}
