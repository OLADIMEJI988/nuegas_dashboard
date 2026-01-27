"use client";

export default function TaskSkeleton() {
  return (
    <div className="font-[Jakarta] text-foreground bg-[#FAFAFA] w-full max-w-full overflow-x-hidden animate-pulse">
      <div className="p-8 bg-white">
        <div className="flex items-center mb-6">
          <div className="h-6 w-40 bg-[#E5E7EB] rounded" />

          <div className="ml-auto flex gap-6">
            <div className="w-13 h-13 rounded-full bg-[#E5E7EB]" />
            <div className="w-13 h-13 rounded-full bg-[#E5E7EB]" />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="w-120 h-12 rounded-[10px] bg-[#E5E7EB]" />

          <div className="flex gap-6">
            <div className="w-32 h-12 rounded-[10px] bg-[#E5E7EB]" />
            <div className="w-44 h-12 rounded-[10px] bg-[#E5E7EB]" />
          </div>
        </div>
      </div>

      {[1, 2].map((section) => (
        <div key={section} className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="h-6 w-32 bg-[#E5E7EB] rounded" />

            <div className="flex gap-3">
              <div className="w-6 h-6 rounded bg-[#E5E7EB]" />
              <div className="w-6 h-6 rounded bg-[#E5E7EB]" />
            </div>
          </div>

          <div className="flex justify-between gap-6">
            {[1, 2, 3].map((card) => (
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

                {/* Footer */}
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
      ))}
    </div>
  );
}
