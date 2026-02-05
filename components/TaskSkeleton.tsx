"use client";

export default function TaskSkeleton() {
  return (
    <div className="font-[Jakarta] text-foreground bg-[var(--background)] w-full max-w-full overflow-x-hidden animate-pulse">
      {/* ---------- HEADER ---------- */}
      <div className="p-8 max-md:py-0 max-md:px-4 bg-[var(--surface-primary)]">
        {/* Desktop header */}
        <div className="flex items-center mb-6 max-md:hidden">
          <div className="h-6 w-40 bg-[var(--surface-muted)] rounded" />

          <div className="ml-auto flex gap-6">
            <div className="w-13 h-13 rounded-full bg-[var(--surface-muted)]" />
            <div className="w-13 h-13 rounded-full bg-[var(--surface-muted)]" />
          </div>
        </div>

        {/* Mobile title */}
        <div className="hidden max-md:flex">
          <div className="h-6 w-40 bg-[var(--surface-muted)] rounded" />
        </div>

        {/* Search + filters */}
        <div className="flex justify-between max-md:pt-8 max-md:pb-6 max-md:gap-4">
          <div className="relative w-120 max-md:w-full h-12 bg-[var(--surface-muted)] rounded-[10px]" />

          {/* Desktop filters */}
          <div className="flex gap-6 max-md:hidden">
            <div className="w-32 h-12 rounded-[10px] bg-[var(--surface-muted)]" />
            <div className="w-44 h-12 rounded-[10px] bg-[var(--surface-muted)]" />
          </div>

          {/* Mobile settings */}
          <div className="hidden max-md:flex w-12 h-12 rounded-[10px] bg-[var(--surface-muted)]" />
        </div>
      </div>

      {/* ---------- CAROUSEL SECTIONS ---------- */}
      {[1, 2].map((section) => (
        <div key={section} className="p-8 max-md:px-4">
          {/* Section header */}
          <div className="flex justify-between mb-4 max-md:mb-4.5 items-center">
            <div className="h-6 w-32 bg-[var(--surface-muted)] rounded" />

            <div className="flex gap-2.5">
              <div className="w-6 h-6 bg-[var(--surface-muted)] rounded" />
              <div className="w-6 h-6 bg-[var(--surface-muted)] rounded" />
            </div>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex">
              {/* One "page" */}
              <div className="w-full shrink-0 flex justify-between gap-6">
                {/* Desktop = 3 cards | Mobile = 1 card (others hidden) */}
                {[1, 2, 3].map((card, idx) => (
                  <div
                    key={card}
                    className={`bg-[var(--surface-primary)] rounded-2xl p-5 space-y-4 w-full
                      ${idx > 0 ? "max-md:hidden" : ""}
                    `}
                  >
                    {/* Image */}
                    <div className="h-36 rounded-xl bg-[var(--surface-muted)]" />

                    {/* Title */}
                    <div className="h-4 w-3/4 bg-[var(--surface-muted)] rounded" />

                    {/* Role */}
                    <div className="h-3 w-1/3 bg-[var(--surface-muted)] rounded" />

                    {/* Progress */}
                    <div className="h-2 w-full bg-[var(--surface-muted)] rounded" />

                    {/* Footer */}
                    <div className="flex justify-between items-center pt-2">
                      <div className="h-3 w-20 bg-[var(--surface-muted)] rounded" />

                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((a) => (
                          <div
                            key={a}
                            className="w-7 h-7 rounded-full bg-[var(--surface-muted)] border-2 border-[var(--surface-primary)]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}