import { Link } from "@tanstack/react-router";

export function HowItWorksReveal() {
  return (
    <section className="border-t border-b border-[color:var(--color-am-line)] bg-[color:var(--color-am-bg2)] px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[color:var(--color-am-ink)] sm:text-[34px]">
          The reason this works is simple.
        </h2>
        <p className="mt-4 max-w-[760px] text-[17px] leading-[1.6] text-[color:var(--color-am-muted)]">
          AppMap continuously builds the behavioral model of your software as it runs. Every map, every review, every answer is a view of that one model.
        </p>
        <div className="mt-6">
          <Link
            to="/how-it-works"
            className="text-[15px] font-semibold text-[color:var(--color-am-brand)] hover:underline"
          >
            Learn how it works →
          </Link>
        </div>
      </div>
    </section>
  );
}