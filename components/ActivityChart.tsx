"use client";

import Image from "next/image";

export default function ActivityChart() {
  const data = [
    { day: "S", value: 1 },
    { day: "M", value: 2 },
    { day: "T", value: 1 },
    { day: "W", value: 2.5 },
    { day: "T", value: 1.4 },
    { day: "F", value: 2.1 },
    { day: "S", value: 1.8 },
  ];

  const maxY = 3;
  const chartHeight = 90;
  const chartWidth = 422;
  const padding = 5;

  const getX = (i: number) =>
    padding + (i * (chartWidth - padding * 2)) / (data.length - 1);

  const getY = (v: number) =>
    chartHeight - padding - (v / maxY) * (chartHeight - padding * 2);

  const linePath = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d.value)}`)
    .join(" ");

  const softLinePath = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d.value - 0.4)}`)
    .join(" ");

  const activeIndex = 2;

  return (
    <div className="bg-[#F5F5F7] rounded-[10px] p-5 w-full max-w-160 font-[Jakarta]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[16px]">Activity</h2>
        <div className="flex items-center gap-4 cursor-pointer">
          <p className="font-[Jakartamd] text-[12px]">This Week</p>
          <Image
            src="/arrowdown.svg"
            alt="logo"
            width={12}
            height={12}
            priority
          />
        </div>
      </div>

      {/* Chart Card */}
      <div className="bg-white rounded-[13px] p-5 overflow-hidden">
        <svg
          width="100%"
          height={chartHeight}
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          preserveAspectRatio="xMidYMid meet"
          overflow="visible"
        >
          {/* Grid Lines */}
          {[1, 2, 3].map((y) => (
            <line
              key={y}
              x1={padding}
              x2={chartWidth - padding}
              y1={getY(y)}
              y2={getY(y)}
              stroke="#E5E7EB"
              strokeWidth="1"
            />
          ))}

          {/* Soft Background Line */}
          <path
            d={softLinePath}
            fill="none"
            stroke="#EBEDF7"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Main Line */}
          <path
            d={linePath}
            fill="none"
            stroke="#141522"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Active Point */}
          <circle
            cx={getX(activeIndex)}
            cy={getY(data[activeIndex].value)}
            r="10"
            fill="#546FFF"
          />
          <circle
            cx={getX(activeIndex)}
            cy={getY(data[activeIndex].value)}
            r="5"
            fill="white"
          />

          {/* Tooltip */}
          <g
            transform={`translate(${getX(activeIndex) - 45}, ${
              getY(data[activeIndex].value) - 66
            })`}
          >
            <rect width="84" height="40" rx="10" fill="#141522" />
            <text x="42" y="25" textAnchor="middle" fill="white" fontSize="14">
              2 Task
            </text>
            <polygon points="40,39 52,36 45,45" fill="#141522" />
          </g>

          {/* X Labels */}
          {data.map((d, i) => (
            <text
              key={i}
              x={getX(i)}
              y={chartHeight}
              textAnchor="middle"
              fontSize="12"
              fill="#64748B"
              className="font-[Jakartamd]"
            >
              {d.day}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}
