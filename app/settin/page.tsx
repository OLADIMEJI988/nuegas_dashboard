"use client";

import { useState } from "react";
import Image from "next/image";

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

export default function Settings() {
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

  const toggle = (id: string) => {
    setEnabled((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="font-[Jakarta] text-foreground bg-[#FAFAFA] h-full">
      <div className="p-8 bg-white">
        <div className="flex items-center">
          <p className="text-[24px]">Settings</p>
          <div className="ml-auto flex gap-6">
            <button className="border border-[#F5F5F7] w-13 h-13 flex justify-center rounded-full">
              <Image src="/notif.svg" alt="logo" width={24} height={24} />
            </button>
            <Image src="/boyinblack.svg" alt="logo" width={52} height={52} />
          </div>
        </div>
      </div>

      <div className="bg-white m-8 p-8 rounded-[10px]">
        <div className="flex w-full pt-5 gap-6 border-b border-[#F5F5F7]">
          <div
            onClick={() => setActiveTab("general")}
            className="flex flex-col gap-3 text-center cursor-pointer"
          >
            <p
              className={`text-[14px] px-3 ${
                activeTab === "general"
                  ? "font-[Jakartamd] text-black"
                  : "font-[Jakartarg] text-[#8E92BC]"
              }`}
            >
              General
            </p>

            {activeTab === "general" && (
              <div className="w-full bg-[#546FFF] h-0.5 translate-y-px" />
            )}
          </div>

          <div
            onClick={() => setActiveTab("notification")}
            className="flex flex-col gap-3 text-center cursor-pointer"
          >
            <p
              className={`text-[14px] px-3 ${
                activeTab === "notification"
                  ? "font-[Jakartamd] text-black"
                  : "font-[Jakartarg] text-[#8E92BC]"
              }`}
            >
              Notification
            </p>

            {activeTab === "notification" && (
              <div className="w-full bg-[#546FFF] h-0.5 translate-y-px" />
            )}
          </div>
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
                  className="w-full bg-white border border-[#F5F5F7] rounded-[10px] px-5 py-[17.5px] flex items-center justify-between text-[12px] cursor-pointer"
                >
                  <span>{selectedLanguage}</span>

                  <Image
                    src="/arrowdnicon.svg"
                    alt="toggle"
                    width={15}
                    height={15}
                    className={`transition-transform ${
                      languageOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {languageOpen && (
                  <div className="absolute z-10 mt-2 w-full border border-[#F5F5F7] rounded-[10px] shadow-sm shadow-[#EFF1FA] bg-white overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setLanguageOpen(false);
                        }}
                        className={`w-full text-left px-5 py-[17.5px] text-[12px] hover:bg-[#F5F5F7] cursor-pointer ${
                          selectedLanguage === lang ? "text-[#546FFF]" : ""
                        }`}
                      >
                        {lang}
                      </button>
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
                  className="w-full bg-white border border-[#F5F5F7] rounded-[10px] px-5 py-[17.5px] flex items-center justify-between text-[12px] cursor-pointer"
                >
                  <span>{selectedTimezone}</span>

                  <Image
                    src="/arrowdnicon.svg"
                    alt="toggle"
                    width={15}
                    height={15}
                    className={`transition-transform ${
                      timezoneOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {timezoneOpen && (
                  <div className="absolute z-10 mt-2 w-full border border-[#F5F5F7] rounded-[10px] shadow-sm shadow-[#EFF1FA] bg-white overflow-hidden">
                    {timezones.map((zone) => (
                      <button
                        key={zone}
                        onClick={() => {
                          setSelectedTimezone(zone);
                          setTimezoneOpen(false);
                        }}
                        className={`w-full text-left px-5 py-[17.5px] text-[12px] hover:bg-[#F5F5F7] cursor-pointer ${
                          selectedTimezone === zone ? "text-[#546FFF]" : ""
                        }`}
                      >
                        {zone}
                      </button>
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
                    onClick={() => setTimeFormat(format as "12h" | "24h")}
                    className={`w-46 py-3.75 px-5 rounded-[10px] border flex items-center cursor-pointer
                    ${
                      timeFormat === format
                        ? "border-[#546FFF]"
                        : "border-[#F5F5F7]"
                    }`}
                  >
                    <p className="font-[Jakartamd] text-[12px]">
                      {format === "24h" ? "24 Hours" : "12 Hours"}
                    </p>

                    <div
                      className={`w-5 h-5 rounded-full ml-auto ${
                        timeFormat === format
                          ? "border-4 border-[#546FFF]"
                          : "border-2 border-[#F5F5F7]"
                      }`}
                    />
                  </div>
                ))}
              </div>
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
                    className={`w-13.75 h-7.5 rounded-full p-[3.7px] transition-colors duration-300 focus:outline-none cursor-pointer border
              ${isOn ? "bg-[#E9ECFF] border-[#E9ECFF]" : "bg-[#F5F5F7] border-[#F5F5F7]"}`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full transition-transform duration-300
                ${isOn ? "bg-[#546FFF] translate-x-[26.5px]" : "bg-[#E0E0E0]"}`}
                    />
                  </button>

                  <p className="text-[14px] select-none">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <button className="mt-16 w-54 py-3 text-white text-[14px] bg-[#546FFF] rounded-[10px] cursor-pointer">
          Save Changes
        </button>
      </div>
    </div>
  );
}
