"use client";

export default function MentorsSkeleton() {
  return (
    <div className="font-[Jakarta] bg-[#FAFAFA] animate-pulse">
      {/* HEADER */}
      <div className="p-8 bg-white">
        <div className="flex items-center">
          <div className="h-6 w-48 bg-gray-200 rounded" />

          <div className="ml-auto flex gap-6">
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
          </div>
        </div>

        {/* SEARCH + FILTERS */}
        <div className="mt-6 flex justify-between">
          <div className="w-120 h-11 bg-gray-200 rounded-[10px]" />

          <div className="flex gap-6">
            <div className="w-32 h-11 bg-gray-200 rounded-[10px]" />
            <div className="w-40 h-11 bg-gray-200 rounded-[10px]" />
          </div>
        </div>
      </div>

      {/* RECENT MENTORS */}
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="h-6 w-40 bg-gray-200 rounded" />

          <div className="flex gap-4">
            <div className="w-6 h-6 bg-gray-200 rounded" />
            <div className="w-6 h-6 bg-gray-200 rounded" />
          </div>
        </div>

        <div className="flex justify-between gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-[14px] p-5 w-full">
              {/* TOP */}
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

              {/* BOTTOM */}
              <div className="mt-6 flex justify-between">
                <div className="h-3 w-20 bg-gray-200 rounded" />
                <div className="h-3 w-28 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MENTORS GRID */}
      <div className="p-8 mt-5">
        <div className="mb-6">
          <div className="h-6 w-32 bg-gray-200 rounded" />
        </div>

        <div className="flex flex-wrap justify-between gap-y-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="xl:w-[32%] w-[32.7%]">
              <div className="bg-white rounded-[14px] p-5">
                {/* HEADER */}
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

                {/* ABOUT */}
                <div className="mt-4 space-y-2">
                  <div className="h-3 w-full bg-gray-200 rounded" />
                  <div className="h-3 w-5/6 bg-gray-200 rounded" />
                </div>

                {/* FOOTER */}
                <div className="mt-5 flex justify-between">
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                  <div className="h-3 w-28 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
