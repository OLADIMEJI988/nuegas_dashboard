"use client";

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
  const chartHeight = 160;
  const chartWidth = 520;
  const padding = 30;

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

  const activeIndex = 2; // Monday

  return (
    <div className="bg-[#F7F8FA] rounded-[16px] p-6 w-full max-w-[640px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[20px] font-semibold text-[#0F172A]">
          Activity
        </h2>
        <div className="flex items-center gap-2 text-[#0F172A] opacity-70">
          <span>This Week</span>
          <span>⌄</span>
        </div>
      </div>

      {/* Chart Card */}
      <div className="bg-white rounded-[16px] p-4">
        <svg width={chartWidth} height={chartHeight} className="w-full">
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
            stroke="#E6EAF5"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Main Line */}
          <path
            d={linePath}
            fill="none"
            stroke="#0F172A"
            strokeWidth="4"
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
            r="4"
            fill="white"
          />

          {/* Tooltip */}
          <g
            transform={`translate(${getX(activeIndex) - 45}, ${
              getY(data[activeIndex].value) - 55
            })`}
          >
            <rect
              width="90"
              height="36"
              rx="12"
              fill="#0F172A"
            />
            <text
              x="45"
              y="23"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="500"
            >
              2 Task
            </text>
            <polygon
              points="40,36 50,36 45,44"
              fill="#0F172A"
            />
          </g>

          {/* X Labels */}
          {data.map((d, i) => (
            <text
              key={i}
              x={getX(i)}
              y={chartHeight - 6}
              textAnchor="middle"
              fontSize="12"
              fill="#64748B"
            >
              {d.day}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}
