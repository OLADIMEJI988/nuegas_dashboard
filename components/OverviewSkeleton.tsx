"use client";

export default function OverviewSkeleton() {
  return (
    <div className="flex font-[Jakarta] text-foreground animate-pulse">
      {/* LEFT SIDE */}
      <div className="xl:p-8 p-5 bg-[#FAFAFA] w-full">
        <div className="flex items-center">
          <div className="flex flex-col gap-3">
            <div className="h-6 w-40 rounded bg-[#E5E7EB]" />
            <div className="h-4 w-56 rounded bg-[#E5E7EB]" />
          </div>

          <div className="ml-auto flex gap-6">
            <div className="w-13 h-13 rounded-full bg-[#E5E7EB]" />
            <div className="w-13 h-13 rounded-full bg-[#E5E7EB]" />
          </div>
        </div>

        <div className="mt-11 flex gap-8">
          {/* Running Task Card */}
          <div className="bg-[#0F172A] w-48.5 rounded-[10px] p-5 flex flex-col justify-between">
            <div className="h-4 w-24 bg-[#1E293B] rounded" />
            <div className="h-8 w-16 bg-[#1E293B] rounded mt-3" />

            <div className="flex items-center gap-4.5 mt-6">
              <div className="w-17 h-17 rounded-full bg-[#1E293B]" />
              <div className="space-y-2">
                <div className="h-5 w-10 bg-[#1E293B] rounded" />
                <div className="h-4 w-12 bg-[#1E293B] rounded" />
              </div>
            </div>
          </div>

          {/* Activity Chart Skeleton */}
          <div className="bg-white rounded-[13px] p-5 w-full">
            <div className="h-4 w-24 bg-[#E5E7EB] rounded mb-4" />
            <div className="h-24 w-full bg-[#E5E7EB] rounded" />
          </div>
        </div>

        {/* Monthly Mentors */}
        <div className="mt-15">
          <div className="flex justify-between items-center mb-6">
            <div className="h-6 w-40 bg-gray-200 rounded" />

            <div className="flex gap-4">
              <div className="w-6 h-6 bg-gray-200 rounded" />
              <div className="w-6 h-6 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="flex justify-between gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-[14px] p-5 w-full">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    <div className="space-y-2">
                      <div className="h-4 w-28 bg-gray-200 rounded" />
                      <div className="h-3 w-20 bg-gray-200 rounded" />
                    </div>
                  </div>

                  <div className="h-3 w-14 bg-gray-200 rounded" />
                </div>

                <div className="mt-6 flex justify-between">
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                  <div className="h-3 w-28 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Task */}
        <div className="mt-15">
          <div className="flex justify-between items-center mb-6">
            <div className="h-6 w-40 bg-gray-200 rounded" />

            <div className="flex gap-4">
              <div className="w-6 h-6 bg-gray-200 rounded" />
              <div className="w-6 h-6 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="flex justify-between gap-6">
            {[1, 2].map((card) => (
              <div
                key={card}
                className="w-full max-w-90 bg-white rounded-2xl p-5 space-y-4"
              >
                {/* Image */}
                <div className="h-36 rounded-xl bg-[#E5E7EB]" />

                {/* Title */}
                <div className="h-4 w-3/4 bg-[#E5E7EB] rounded" />

                {/* Role */}
                <div className="h-3 w-1/3 bg-[#E5E7EB] rounded" />

                {/* Progress */}
                <div className="h-2 w-full bg-[#E5E7EB] rounded" />

                <div className="flex justify-between items-center mt-4">
                  <div className="h-3 w-20 bg-[#E5E7EB] rounded" />
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((a) => (
                      <div
                        key={a}
                        className="w-7 h-7 rounded-full bg-[#E5E7EB] border-2 border-white"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="xl:w-[50%] p-4 xl:p-6 flex flex-col gap-5 xl:gap-7">
        {/* Calendar */}
        <div className="h-64 rounded-[10px] bg-[#E5E7EB]" />

        {/* Today Task */}
        <div className="bg-white h-full rounded-[10px] p-6 flex flex-col">
          <div className="flex justify-between items-center mb-5">
            <div className="h-4 w-24 bg-[#E5E7EB] rounded" />
            <div className="h-4 w-4 bg-[#E5E7EB] rounded" />
          </div>

          {/* Today Task Card */}
          <div className="w-full bg-white rounded-2xl space-y-4">
            {/* Image */}
            <div className="h-36 rounded-xl bg-[#E5E7EB]" />

            {/* Title */}
            <div className="h-4 w-3/4 bg-[#E5E7EB] rounded" />

            {/* Role */}
            <div className="h-3 w-1/3 bg-[#E5E7EB] rounded" />

            {/* Progress */}
            <div className="h-2 w-full bg-[#E5E7EB] rounded" />

            <div className="flex justify-between items-center mt-4">
              <div className="h-3 w-20 bg-[#E5E7EB] rounded" />
              <div className="flex -space-x-2">
                {[1, 2, 3].map((a) => (
                  <div
                    key={a}
                    className="w-7 h-7 rounded-full bg-[#E5E7EB] border-2 border-white"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Detail Task */}
          <div className="mt-16 flex flex-col flex-1">
            <div className="flex justify-between">
              <div className="h-4 w-24 bg-[#E5E7EB] rounded" />
              <div className="h-3 w-32 bg-[#E5E7EB] rounded" />
            </div>

            <div className="mt-5 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3 items-center">
                  <div className="w-9 h-9 rounded-[10px] bg-[#E5E7EB]" />
                  <div className="h-4 flex-1 bg-[#E5E7EB] rounded" />
                </div>
              ))}
            </div>

            <div className="h-10 w-full bg-[#E5E7EB] rounded-[10px] mt-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
