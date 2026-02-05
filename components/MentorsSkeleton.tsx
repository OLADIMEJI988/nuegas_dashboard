"use client";

export default function MentorsSkeleton() {
  return (
    <div className="font-[Jakarta] bg-[var(--background)] animate-pulse">
      {/* Header */}
      <div className="p-8 max-md:py-0 max-md:px-4 bg-[var(--surface-primary)] w-full">
        {/* Desktop header */}
        <div className="flex items-center max-md:hidden">
          <div className="h-6 w-48 bg-[var(--surface-muted)] rounded" />

          <div className="ml-auto flex gap-6">
            <div className="w-13 h-13 bg-[var(--surface-muted)] rounded-full" />
            <div className="w-13 h-13 bg-[var(--surface-muted)] rounded-full" />
          </div>
        </div>

        {/* Mobile header */}
        <div className="hidden max-md:flex w-full pt-4">
          <div className="h-6 w-48 bg-[var(--surface-muted)] rounded" />
        </div>

        {/* Search + actions */}
        <div className="mt-6 flex justify-between max-md:mt-0 max-md:pt-8 max-md:pb-6 max-md:gap-4">
          <div className="relative w-120 max-md:w-full">
            <div className="h-11 max-md:h-12 w-full bg-[var(--surface-muted)] rounded-[10px]" />
          </div>

          {/* Desktop filters */}
          <div className="flex gap-6 max-md:hidden">
            <div className="w-32 h-11 bg-[var(--surface-muted)] rounded-[10px]" />
            <div className="w-40 h-11 bg-[var(--surface-muted)] rounded-[10px]" />
          </div>

          {/* Mobile settings */}
          <div className="hidden max-md:flex w-12 h-12 bg-[var(--surface-muted)] rounded-[10px]" />
        </div>
      </div>

      {/* Recent Mentors */}
      <div className="p-8 max-md:px-4">
        <div className="flex justify-between">
          <div className="h-6 w-40 bg-[var(--surface-muted)] rounded" />

          <div className="flex w-14.5 justify-between">
            <div className="w-6 h-6 bg-[var(--surface-muted)] rounded" />
            <div className="w-6 h-6 bg-[var(--surface-muted)] rounded" />
          </div>
        </div>

        <div className="mt-4.5 flex justify-between gap-6 max-md:flex-col">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[var(--surface-primary)] rounded-[14px] p-5 w-full"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[var(--surface-muted)] rounded-full" />
                  <div className="space-y-2">
                    <div className="h-4 w-28 bg-[var(--surface-muted)] rounded" />
                    <div className="h-3 w-20 bg-[var(--surface-muted)] rounded" />
                  </div>
                </div>

                <div className="h-3 w-14 bg-[var(--surface-muted)] rounded" />
              </div>

              <div className="mt-6 flex justify-between">
                <div className="h-3 w-20 bg-[var(--surface-muted)] rounded" />
                <div className="h-3 w-28 bg-[var(--surface-muted)] rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="p-8 max-md:p-6">
        <div className="mb-4.5">
          <div className="h-6 w-32 bg-[var(--surface-muted)] rounded" />
        </div>

        <div className="flex max-md:flex-col flex-wrap justify-between gap-y-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="xl:w-[32%] w-[32.7%] max-md:w-full"
            >
              <div className="bg-[var(--surface-primary)] rounded-[14px] p-5">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-[var(--surface-muted)] rounded-full" />
                    <div className="space-y-2">
                      <div className="h-4 w-28 bg-[var(--surface-muted)] rounded" />
                      <div className="h-3 w-20 bg-[var(--surface-muted)] rounded" />
                    </div>
                  </div>

                  <div className="h-3 w-14 bg-[var(--surface-muted)] rounded" />
                </div>

                <div className="mt-4 space-y-2">
                  <div className="h-3 w-full bg-[var(--surface-muted)] rounded" />
                  <div className="h-3 w-5/6 bg-[var(--surface-muted)] rounded" />
                </div>

                <div className="mt-5 flex justify-between">
                  <div className="h-3 w-20 bg-[var(--surface-muted)] rounded" />
                  <div className="h-3 w-28 bg-[var(--surface-muted)] rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}