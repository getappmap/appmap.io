export function RuntimeReviewGraphic() {
  return (
    <section
      className="min-h-screen px-4 py-16"
      style={{ backgroundColor: "#0d0a1a" }}
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <h1
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "#f2effb" }}
          >
            See what changed before the code merges
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg" style={{ color: "#a99fc7" }}>
            The coding agent runs the tests. AppMap records and compares the behavior.
          </p>
        </header>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Step 1 */}
          <div
            className="flex flex-1 flex-col rounded-xl border p-6"
            style={{ backgroundColor: "#1c1538", borderColor: "#2c2353" }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
                style={{ backgroundColor: "#ff07aa", color: "#0d0a1a" }}
              >
                1
              </span>
              <div>
                <h2 className="text-lg font-semibold" style={{ color: "#f2effb" }}>
                  Coding agent runs the tests
                </h2>
                <p className="text-sm" style={{ color: "#a99fc7" }}>
                  In development or CI
                </p>
              </div>
            </div>
            <div className="flex flex-1 items-center">
              <div
                className="w-full rounded-lg border p-4 font-mono text-sm"
                style={{ backgroundColor: "#0d0a1a", borderColor: "#2c2353", color: "#f2effb" }}
              >
                <p style={{ color: "#a99fc7" }}>$ pytest tests/ --appmap</p>
                <p className="mt-1">collected 42 items</p>
                <p>42 passed in 3.12s</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="flex flex-1 flex-col rounded-xl border p-6"
            style={{ backgroundColor: "#1c1538", borderColor: "#2c2353" }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
                style={{ backgroundColor: "#ff07aa", color: "#0d0a1a" }}
              >
                2
              </span>
              <div>
                <h2 className="text-lg font-semibold" style={{ color: "#f2effb" }}>
                  AppMap records fresh traces
                </h2>
                <p className="text-sm" style={{ color: "#a99fc7" }}>
                  Each recorded run produces an AppMap trace
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-4">
              <div
                className="w-full overflow-hidden rounded-lg border"
                style={{ borderColor: "#2c2353" }}
              >
                <img
                  src="/marketing-assets/img/appmap/sequence.jpg"
                  alt="AppMap sequence diagram showing runtime interactions"
                  className="w-full"
                />
              </div>
              <div className="text-center text-sm" style={{ color: "#a99fc7" }}>
                <p>Developers see the maps.</p>
                <p>Coding agents query the same traces.</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="flex flex-1 flex-col rounded-xl border p-6"
            style={{ backgroundColor: "#1c1538", borderColor: "#2c2353" }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
                style={{ backgroundColor: "#ff07aa", color: "#0d0a1a" }}
              >
                3
              </span>
              <div>
                <h2 className="text-lg font-semibold" style={{ color: "#f2effb" }}>
                  AppMap compares behavior
                </h2>
                <p className="text-sm" style={{ color: "#a99fc7" }}>
                  Gold Traces for the head revision against Gold Traces for the base revision, before merge
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-4">
              <div
                className="w-full overflow-hidden rounded-lg border"
                style={{ borderColor: "#2c2353" }}
              >
                <img
                  src="/marketing-assets/review/trace-diff-diagram.png"
                  alt="AppMap trace diff comparing head and base revisions"
                  className="w-full"
                />
              </div>
              <div className="flex w-full justify-between text-xs" style={{ color: "#a99fc7" }}>
                <span>Head revision</span>
                <span>Base revision</span>
              </div>
              <p className="text-center text-sm" style={{ color: "#f2effb" }}>
                AppMap reports what changed
              </p>
            </div>
          </div>
        </div>

        {/* Outcome chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            style={{ backgroundColor: "#4ade80", color: "#0d0a1a" }}
          >
            Behavior held
          </span>
          <span
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            style={{ backgroundColor: "#a78bfa", color: "#0d0a1a" }}
          >
            Expected change
          </span>
          <span
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            style={{ backgroundColor: "#fb7185", color: "#0d0a1a" }}
          >
            Unexpected drift
          </span>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm" style={{ color: "#a99fc7" }}>
          Unexpected drift goes back to the coding agent with the traces as context.
        </p>
        <p
          className="mx-auto mt-2 max-w-2xl text-center text-base font-semibold"
          style={{ color: "#f2effb" }}
        >
          AppMap keeps the runtime comparison current as the code changes.
        </p>
      </div>
    </section>
  );
}
