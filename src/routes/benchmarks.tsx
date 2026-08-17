import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";

export const Route = createFileRoute("/benchmarks")({
  component: BenchmarksLayout,
});

function BenchmarksLayout() {
  return (
    <div className="min-h-screen bg-[#0d0a1a]">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
