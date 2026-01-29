"use client";

export default function OverviewSkeleton() {
  return (
    <div className="flex font-[Jakarta] text-foreground animate-pulse">
      {/* LEFT */}
      <div className="xl:p-8 p-5 bg-[var(--background)] w-full">
        <div className="flex items-center">
          <div className="flex flex-col gap-3">
            <div className="h-6 w-40 rounded bg-[var(--surface-muted)]" />
            <div className="h-4 w-56 rounded bg-[var(--surface-muted)]" />
          </div>

          <div className="ml-auto flex gap-6">
            <div className="w-13 h-13 rounded-full bg-[var(--surface-muted)]" />
            <div className="w-13 h-13 rounded-full bg-[var(--surface-muted)]" />
          </div>
        </div>

        <div className="mt-11 flex gap-8">
          <div className="bg-[var(--card-bg)] w-48.5 rounded-[10px] p-5 flex flex-col justify-between">
            <div className="h-4 w-24 bg-[var(--progress-bg)] rounded" />
            <div className="h-8 w-16 bg-[var(--progress-bg)] rounded mt-3" />

            <div className="flex items-center gap-4.5 mt-6">
              <div className="w-17 h-17 rounded-full bg-[var(--progress-bg)]" />
              <div className="space-y-2">
                <div className="h-5 w-10 bg-[var(--progress-bg)] rounded" />
                <div className="h-4 w-12 bg-[var(--progress-bg)] rounded" />
              </div>
            </div>
          </div>

          <div className="bg-[var(--surface-primary)] rounded-[13px] p-5 w-full">
            <div className="h-4 w-24 bg-[var(--surface-muted)] rounded mb-4" />
            <div className="h-24 w-full bg-[var(--surface-muted)] rounded" />
          </div>
        </div>

        <div className="mt-15">
          <div className="flex justify-between items-center mb-6">
            <div className="h-6 w-40 bg-[var(--surface-muted)] rounded" />

            <div className="flex gap-4">
              <div className="w-6 h-6 bg-[var(--surface-muted)] rounded" />
              <div className="w-6 h-6 bg-[var(--surface-muted)] rounded" />
            </div>
          </div>

          <div className="flex justify-between gap-6">
            {[1, 2].map((i) => (
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

        <div className="mt-15">
          <div className="flex justify-between items-center mb-6">
            <div className="h-6 w-40 bg-[var(--surface-muted)] rounded" />

            <div className="flex gap-4">
              <div className="w-6 h-6 bg-[var(--surface-muted)] rounded" />
              <div className="w-6 h-6 bg-[var(--surface-muted)] rounded" />
            </div>
          </div>

          <div className="flex justify-between gap-6">
            {[1, 2].map((card) => (
              <div
                key={card}
                className="w-full max-w-90 bg-[var(--surface-primary)] rounded-2xl p-5 space-y-4"
              >
                <div className="h-36 rounded-xl bg-[var(--surface-muted)]" />
                <div className="h-4 w-3/4 bg-[var(--surface-muted)] rounded" />
                <div className="h-3 w-1/3 bg-[var(--surface-muted)] rounded" />
                <div className="h-2 w-full bg-[var(--surface-muted)] rounded" />

                <div className="flex justify-between items-center mt-4">
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

      {/* RIGHT */}
      <div className="xl:w-[50%] p-4 xl:p-6 flex flex-col gap-5 xl:gap-7">
        <div className="h-64 rounded-[10px] bg-[var(--surface-muted)]" />

        <div className="bg-[var(--surface-primary)] h-full rounded-[10px] p-6 flex flex-col">
          <div className="flex justify-between items-center mb-5">
            <div className="h-4 w-24 bg-[var(--surface-muted)] rounded" />
            <div className="h-4 w-4 bg-[var(--surface-muted)] rounded" />
          </div>

          <div className="space-y-4">
            <div className="h-36 rounded-xl bg-[var(--surface-muted)]" />
            <div className="h-4 w-3/4 bg-[var(--surface-muted)] rounded" />
            <div className="h-3 w-1/3 bg-[var(--surface-muted)] rounded" />
            <div className="h-2 w-full bg-[var(--surface-muted)] rounded" />

            <div className="flex justify-between items-center mt-4">
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

          <div className="mt-16 flex flex-col flex-1">
            <div className="flex justify-between">
              <div className="h-4 w-24 bg-[var(--surface-muted)] rounded" />
              <div className="h-3 w-32 bg-[var(--surface-muted)] rounded" />
            </div>

            <div className="mt-5 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3 items-center">
                  <div className="w-9 h-9 rounded-[10px] bg-[var(--surface-muted)]" />
                  <div className="h-4 flex-1 bg-[var(--surface-muted)] rounded" />
                </div>
              ))}
            </div>

            <div className="h-10 w-full bg-[var(--surface-muted)] rounded-[10px] mt-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}