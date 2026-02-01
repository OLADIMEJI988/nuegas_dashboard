"use client";

import { useEffect, useRef, useState } from "react";
import ChatDisplay from "@/components/ChatDisplay";
import Image from "next/image";

interface Message {
  text: string;
  image?: string;
  fromMe: boolean;
  createdAt: Date;
  deleted?: boolean;
}

interface Chat {
  img: string;
  name: string;
  message_shot: string;
  isRead: boolean;
  messages: Message[];
}

const MAX_SHOT_LENGTH = 30;

const formatBubbleTime = (date: Date) => {
  const now = new Date();
  const isToday = now.toDateString() === date.toDateString();

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${isToday ? "Today" : date.toLocaleDateString()} ${time}`;
};

const timeAgo = (date: Date) => {
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);

  if (diff < 60) return `${diff}s`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  return `${Math.floor(diff / 86400)}d`;
};

const initialChats: Chat[] = [
  {
    img: "/girlinhijab.svg",
    name: "Angelie Crison",
    message_shot: "Thank you very much. I’m glad...",
    isRead: false,
    messages: [
      {
        text: "Thank you very much. I’m glad you came",
        fromMe: false,
        createdAt: new Date(Date.now() - 10 * 60 * 1000),
        deleted: false,
      },
    ],
  },
  {
    img: "/boyincap.svg",
    name: "Michael Brown",
    message_shot: "Can we reschedule the meeting?",
    isRead: true,
    messages: [
      {
        text: "Can we reschedule the meeting?",
        fromMe: false,
        createdAt: new Date(Date.now() - 26 * 60 * 60 * 1000),
        deleted: false,
      },
    ],
  },
  {
    img: "/blackdude.svg",
    name: "Samuel Green",
    message_shot: "I’ve reviewed the design you sent.",
    isRead: true,
    messages: [
      {
        text: "I’ve reviewed the design you sent.",
        fromMe: false,
        createdAt: new Date(Date.now() - 3 * 60 * 1000),
        deleted: false,
      },
    ],
  },
  {
    img: "/girlinwhite.svg",
    name: "Amara Johnson",
    message_shot: "Hey… remember that crazy messa...",
    isRead: false,
    messages: [
      {
        text: "Hey… remember that crazy message you sent about not giving up? I can’t stop thinking about it, what was going through your mind?",
        fromMe: false,
        createdAt: new Date(Date.now() - 50 * 60 * 60 * 1000),
        deleted: false,
      },
    ],
  },
  {
    img: "/michealstone.svg",
    name: "Michael Stone",
    message_shot: "I'll send the report by tonight.",
    isRead: true,
    messages: [
      {
        text: "I'll send the report by tonight.",
        fromMe: false,
        createdAt: new Date(Date.now() - 7 * 60 * 1000),
        deleted: false,
      },
    ],
  },
  {
    img: "/girlinhat.svg",
    name: "Sophia Turner",
    message_shot: "Can you review my code?",
    isRead: false,
    messages: [
      {
        text: "Can you review my code?",
        fromMe: false,
        createdAt: new Date(Date.now() - 2 * 60 * 1000),
        deleted: false,
      },
    ],
  },
  {
    img: "/dudeonshades.svg",
    name: "Daniel Brooks",
    message_shot: "Let's finalize the project timeline.",
    isRead: false,
    messages: [
      {
        text: "Let's finalize the project timeline.",
        fromMe: false,
        createdAt: new Date(Date.now() - 6 * 60 * 1000),
        deleted: false,
      },
    ],
  },
];

export default function Message() {
  const [, forceUpdate] = useState(0);
  const leftRef = useRef<HTMLDivElement>(null);
  const [leftHeight, setLeftHeight] = useState(0);
  const [chats, setChats] = useState<Chat[]>(initialChats);
  const [selectedChat, setSelectedChat] = useState<Chat>(initialChats[0]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [mobileView, setMobileView] = useState<"list" | "chat">("list");
  const [deleteTarget, setDeleteTarget] = useState<{
    chatName: string;
    index: number;
  } | null>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [rightHeight, setRightHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const updateHeight = () => {
      if (!leftRef.current) return;

      const topHeader = document.querySelector(
        ".max-md\\:flex.px-4.py-7",
      ) as HTMLElement;
      const headerHeight = topHeader?.offsetHeight || 0;

      const desktopHeight = leftRef.current.offsetHeight;

      const mobileHeight =
        window.innerHeight - (mobileView === "chat" ? headerHeight : 0);

      if (window.innerWidth >= 768) {
        setRightHeight(desktopHeight);
      } else {
        setRightHeight(mobileHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [mobileView]);

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((v) => v + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (leftRef.current) setLeftHeight(leftRef.current.offsetHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleImagePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() && !imagePreview) return;

    const now = new Date();

    const newMsg: Message = {
      text: newMessage,
      image: imagePreview ?? undefined,
      fromMe: true,
      createdAt: now,
    };

    const updatedMessages = [...selectedChat.messages, newMsg];

    const shotText = newMessage.trim() || (imagePreview ? "📸 Image" : "");

    const updatedChat: Chat = {
      ...selectedChat,
      messages: updatedMessages,
      message_shot:
        shotText.length > MAX_SHOT_LENGTH
          ? shotText.slice(0, MAX_SHOT_LENGTH) + "..."
          : shotText,
    };

    setChats(
      chats.map((c) => (c.name === selectedChat.name ? updatedChat : c)),
    );
    setSelectedChat(updatedChat);

    setNewMessage("");
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";

    setTimeout(scrollToBottom, 50);
  };

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="h-full flex flex-col font-[Jakarta] text-[var(--foreground)] bg-[var(--background)]">
      <div className="p-8 bg-[var(--surface-primary)] border-b border-[var(--surface-secondary)] max-md:hidden">
        <div className="flex items-center">
          <p className="text-[24px]">Message</p>
          <div className="ml-auto flex gap-6">
            <button className="border border-[var(--surface-secondary)] w-13 h-13 flex justify-center rounded-full">
              <Image src="/notif.svg" alt="logo" width={24} height={24} />
            </button>
            <Image src="/boyinblack.svg" alt="logo" width={52} height={52} />
          </div>
        </div>
      </div>

      {mobileView === "list" && (
        <div className="hidden max-md:flex w-full pt-4 px-6 bg-[var(--surface-primary)]">
          <p className="text-[24px]">Message</p>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        <div
          ref={leftRef}
          className={`w-[37%] max-md:w-full shrink-0 border-r border-[var(--surface-secondary)] p-6 max-md:py-8 bg-[var(--surface-primary)] flex flex-col
                    ${mobileView === "chat" ? "max-md:hidden" : ""}`}
        >
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-[var(--surface-secondary)] rounded-[10px] py-3.5 max-md:py-4 pl-7 text-[12px] outline-none"
            />
            <Image
              src="/searchicon.svg"
              alt="search"
              width={20}
              height={20}
              className="absolute right-7 top-1/2 -translate-y-1/2"
            />
          </div>

          <div className="mt-4 flex flex-col overflow-y-auto custom-scrollbar flex-1">
            {filteredChats.map((chat, index) => {
              const lastMessage = chat.messages[chat.messages.length - 1];

              return (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedChat(chat);
                    setMobileView("chat");
                  }}
                  className="cursor-pointer"
                >
                  <ChatDisplay
                    {...chat}
                    time={lastMessage ? timeAgo(lastMessage.createdAt) : ""}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side */}
        <div
          className={`flex-1 min-w-0 bg-[var(--background)] flex flex-col
          ${mobileView === "list" ? "max-md:hidden" : ""}`}
          style={{ height: rightHeight }}
        >
          <div className="py-6 px-12 max-md:px-4 flex justify-between bg-[var(--surface-primary)]">
            <div className="flex gap-3 items-center">
              <button
                onClick={() => setMobileView("list")}
                className="hidden max-md:flex items-center justify-center mr-4"
              >
                <Image
                  src="/greybackarrow.svg"
                  alt="logo"
                  width={20}
                  height={20}
                  priority
                />
              </button>

              <Image
                src={selectedChat.img}
                alt="logo"
                width={52}
                height={52}
                className="max-md:w-11 max-md:h-11"
                priority
              />
              <div>
                <p className="text-[14px]">{selectedChat.name}</p>
                <div className="flex gap-3 items-center mt-2 px-2">
                  <div className="bg-[#25C78B] w-2 h-2 rounded-full mt-0.5"></div>
                  <p className="text-[12px] font-[Jakartamd]">Online</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 max-md:gap-4">
              <div className="w-13 h-13 max-md:w-11 max-md:h-11 border border-[var(--surface-secondary)] rounded-full flex items-center justify-center">
                <Image
                  src="/videoicon.svg"
                  alt="logo"
                  width={24}
                  height={24}
                  className="max-md:w-5 max-md:h-5"
                  priority
                />
              </div>
              <div className="w-13 h-13 max-md:w-11 max-md:h-11 border border-[var(--surface-secondary)] rounded-full flex items-center justify-center">
                <Image
                  src="/phoneicon.svg"
                  alt="logo"
                  width={24}
                  height={24}
                  className="max-md:w-5 max-md:h-5"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto overflow-x-hidden px-8 custom-scrollbar min-h-0">
            {selectedChat.messages.map((msg, i) => {
              const prev = selectedChat.messages[i - 1];
              const next = selectedChat.messages[i + 1];

              let sameTimeAsPrev = false;
              if (
                prev &&
                prev.fromMe === msg.fromMe &&
                prev.createdAt &&
                msg.createdAt
              ) {
                sameTimeAsPrev =
                  prev.createdAt.getMinutes() === msg.createdAt.getMinutes() &&
                  prev.createdAt.getHours() === msg.createdAt.getHours() &&
                  prev.createdAt.getDate() === msg.createdAt.getDate();
              }

              const marginTop = sameTimeAsPrev ? "mt-2" : "mt-5";

              let showTime = false;
              if (msg.createdAt) {
                if (!next || next.fromMe !== msg.fromMe) {
                  showTime = true;
                } else {
                  const msgMinute = msg.createdAt.getMinutes();
                  const nextMinute = next.createdAt.getMinutes();
                  const msgHour = msg.createdAt.getHours();
                  const nextHour = next.createdAt.getHours();
                  const msgDay = msg.createdAt.getDate();
                  const nextDay = next.createdAt.getDate();

                  if (
                    msgMinute !== nextMinute ||
                    msgHour !== nextHour ||
                    msgDay !== nextDay
                  ) {
                    showTime = true;
                  }
                }
              }

              const showDayLabel =
                !prev ||
                prev.createdAt.toDateString() !== msg.createdAt.toDateString();

              const formatDayLabel = (date: Date) => {
                const now = new Date();
                const today = new Date(
                  now.getFullYear(),
                  now.getMonth(),
                  now.getDate(),
                );
                const yesterday = new Date(today);
                yesterday.setDate(today.getDate() - 1);

                const msgDate = new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate(),
                );

                if (msgDate.getTime() === today.getTime()) return "Today";
                if (msgDate.getTime() === yesterday.getTime())
                  return "Yesterday";

                return date.toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });
              };

              return (
                <div key={i}>
                  {showDayLabel && (
                    <div className="flex justify-center mt-5.5 mb-5.75">
                      <div className="flex items-center justify-center bg-[var(--foreground)] text-[var(--surface-primary)] mx-auto text-[14px] rounded-[10px] px-3 h-9.25">
                        {formatDayLabel(msg.createdAt)}
                      </div>
                    </div>
                  )}

                  <div
                    className={`${marginTop} flex ${
                      msg.fromMe ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className="max-w-[50%] max-md:max-w-full flex flex-col">
                      <div
                        onContextMenu={(e) => {
                          e.preventDefault();
                          setDeleteTarget({
                            chatName: selectedChat.name,
                            index: i,
                          });
                        }}
                        className={`px-3 py-2 text-[14px] rounded-[10px] font-[Jakartamd] whitespace-pre-wrap wrap-break-word cursor-pointer ${
                          msg.fromMe
                            ? "bg-[#546FFF] text-white rounded-tr-none"
                            : "bg-[var(--surface-primary)] shadow-sm rounded-tl-none"
                        } ${msg.deleted ? "italic text-[var(--card-caption)]" : ""}`}
                        style={{ boxShadow: "var(--bubble-shadow)" }}
                      >
                        {msg.image && !msg.deleted && (
                          <img
                            src={msg.image}
                            alt="sent"
                            className="mb-2 rounded-lg max-h-60"
                          />
                        )}

                        {msg.deleted ? "You deleted this message" : msg.text}
                      </div>

                      {showTime && msg.createdAt && (
                        <p
                          className={`mt-0.5 text-[10px] text-[var(--card-caption)] font-[Jakartarg] ${
                            msg.fromMe ? "text-right" : "text-right mt-1"
                          }`}
                        >
                          {formatBubbleTime(msg.createdAt)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          <div className="bg-[var(--surface-primary)] border-t border-[var(--surface-secondary)] px-6 py-4 flex flex-col gap-3">
            {imagePreview && (
              <div className="relative w-32">
                <img src={imagePreview} alt="preview" className="rounded-lg" />
                <button
                  onClick={() => setImagePreview(null)}
                  className="absolute -top-2 -right-2 bg-[var(--foreground)] text-[var(--surface-primary)] w-5.5 h-5.5 rounded-full flex items-center justify-center text-[19px] cursor-pointer"
                >
                  <p className="-mt-1.75">×</p>
                </button>
              </div>
            )}

            <div className="flex items-center gap-5">
              <input
                type="text"
                placeholder="Send your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 font-[Jakartamd] text-[14px] placeholder-[var(--muted-foreground)] outline-none"
              />

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleImagePick}
              />

              <Image
                src="/attachicon.svg"
                alt="attach"
                width={24}
                height={24}
                priority
                className="cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              />

              <button
                onClick={handleSendMessage}
                className="flex items-center justify-center bg-[#546FFF] p-3 rounded-[10px] cursor-pointer"
              >
                <Image
                  src="/sendicon.svg"
                  alt="send"
                  width={19}
                  height={19}
                  priority
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-[var(--surface-primary)] rounded-[10px] w-[320px] p-5">
            <p className="text-[14px] font-[Jakartamd] mb-4 text-[var(--foreground)]">
              Delete this message?
            </p>

            <div className="flex justify-end gap-4 text-[14px]">
              <button
                onClick={() => {
                  const updatedChats = chats.map((c) => {
                    if (c.name !== deleteTarget.chatName) return c;

                    const msgs = [...c.messages];
                    const targetMsg = msgs[deleteTarget.index];

                    msgs[deleteTarget.index] = {
                      ...targetMsg,
                      deleted: true,
                      text: "",
                    };

                    const lastMsg = msgs[msgs.length - 1];
                    let message_shot = "";

                    if (lastMsg) {
                      if (lastMsg.deleted) {
                        message_shot = lastMsg.fromMe
                          ? "You deleted this message"
                          : "This message was deleted";
                      } else {
                        message_shot =
                          lastMsg.text.length > MAX_SHOT_LENGTH
                            ? lastMsg.text.slice(0, MAX_SHOT_LENGTH) + "..."
                            : lastMsg.text;
                      }
                    }

                    return {
                      ...c,
                      messages: msgs,
                      message_shot,
                    };
                  });

                  setChats(updatedChats);
                  setSelectedChat(
                    updatedChats.find((c) => c.name === deleteTarget.chatName)!,
                  );
                  setDeleteTarget(null);
                }}
                className="text-[var(--primary)] font-[Jakartamd]"
              >
                Delete
              </button>

              <button
                onClick={() => setDeleteTarget(null)}
                className="text-[var(--muted-foreground)] font-[Jakartamd]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
