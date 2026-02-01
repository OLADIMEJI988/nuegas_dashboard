"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function useIsMaxMd() {
  const [isMaxMd, setIsMaxMd] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");

    const update = () => setIsMaxMd(mq.matches);
    update();

    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMaxMd;
}

export default function ActivityChart() {
  const isMaxMd = useIsMaxMd();

  const offsetX = 45;
  const offsetY = 66;
  const dayFontsize = 12;

  const responsiveOffsetY = isMaxMd ? offsetY + 23 : offsetY;
  const responsiveOffsetX = isMaxMd ? offsetX + 10 : offsetX;
  const responsiveFontsize = isMaxMd ? dayFontsize + 2 : dayFontsize;

  const tooltip = {
    offsetX: isMaxMd ? responsiveOffsetX : offsetX,
    offsetY: isMaxMd ? responsiveOffsetY : responsiveOffsetY,

    width: isMaxMd ? 94 : 84,
    height: isMaxMd ? 50 : 40,
    radius: 10,

    textX: isMaxMd ? 47 : 42,
    textY: isMaxMd ? 31 : 25,
    fontSize: isMaxMd ? 17 : 14,

    arrowPoints: isMaxMd ? "50,49 62,46 55,57" : "40,39 52,36 45,45",
  };

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
  const chartHeight = isMaxMd ? 130 : 90;
  const chartWidth = 422;
  const padding = 5;

  const yValue = chartHeight + (isMaxMd ? 4 : 0);

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
    <div className="bg-[var(--surface-secondary)] rounded-[10px] p-5 w-full max-w-160 font-[Jakarta]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[16px]">Activity</h2>
        <div className="flex items-center gap-4 cursor-pointer">
          <p className="font-[Jakartamd] text-[12px] text-[var(--text-secondary)]">
            This Week
          </p>
          <Image src="/arrowdown.svg" alt="logo" width={12} height={12} />
        </div>
      </div>

      <div className="bg-[var(--surface-primary)] rounded-[13px] max-md:py-3 p-5 overflow-hidden">
        <svg
          width="100%"
          height={chartHeight}
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          preserveAspectRatio="xMidYMid meet"
          overflow="visible"
        >
          {/* Grid lines */}
          {[1, 2, 3].map((y) => (
            <line
              key={y}
              x1={padding}
              x2={chartWidth - padding}
              y1={getY(y)}
              y2={getY(y)}
              stroke="var(--border-subtle)"
              strokeWidth="1"
            />
          ))}

          {/* Soft background line */}
          <path
            d={softLinePath}
            fill="none"
            stroke="var(--surface-muted)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Main line */}
          <path
            d={linePath}
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Active point */}
          <circle
            cx={getX(activeIndex)}
            cy={getY(data[activeIndex].value)}
            r="10"
            fill="var(--accent-primary)"
          />
          <circle
            cx={getX(activeIndex)}
            cy={getY(data[activeIndex].value)}
            r="5"
            fill="var(--surface-primary)"
          />

          {/* Tooltip */}
          <g
            transform={`translate(
              ${getX(activeIndex) - tooltip.offsetX},
              ${getY(data[activeIndex].value) - tooltip.offsetY}
            )`}
          >
            <rect
              width={tooltip.width}
              height={tooltip.height}
              rx={tooltip.radius}
              fill="var(--foreground)"
            />

            <text
              x={tooltip.textX}
              y={tooltip.textY}
              textAnchor="middle"
              fill="var(--surface-primary)"
              fontSize={tooltip.fontSize}
            >
              2 Task
            </text>

            <polygon points={tooltip.arrowPoints} fill="var(--foreground)" />
          </g>

          {/* X-axis labels */}
          {data.map((d, i) => (
            <text
              key={i}
              x={getX(i)}
              y={yValue}
              textAnchor="middle"
              fontSize={responsiveFontsize}
              fill="var(--text-secondary)"
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
