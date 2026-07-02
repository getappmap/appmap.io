import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/images/appmap-logo.svg";

export const VSCODE_INSTALL_URL =
  "https://marketplace.visualstudio.com/items?itemName=appland.appmap";
export const JETBRAINS_INSTALL_URL =
  "https://plugins.jetbrains.com/plugin/16701-appmap-free-ai-architect";
export const GITHUB_URL = "https://github.com/getappmap";

const navLinks = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Benchmarks", href: "/benchmarks" },
  { label: "Compatibility", href: "/compatibility" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Docs", href: "https://appmap.io/docs/appmap-docs.html" },
];

export interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#2c2353] bg-[rgba(13,10,26,0.85)] backdrop-blur-md ${className}`}
    >
      <div className="mx-auto flex h-16 max-w-[1120px] items-center gap-7 px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="AppMap" className="h-[26px] w-auto" />
        </Link>

        <nav className="ml-1 hidden gap-6 md:flex">
          {navLinks.map((l) =>
            l.href.startsWith("http") ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14.5px] text-[#a99fc7] transition-colors hover:text-[#f2effb]"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href as never}
                className="text-[14.5px] text-[#a99fc7] transition-colors hover:text-[#f2effb]"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <Link
            to="/get-appmap"
            className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-4 py-2 text-[14px] font-semibold text-white shadow-[0_6px_24px_-6px_rgba(255,7,170,0.5)] transition-[filter] hover:brightness-110"
          >
            Get AppMap
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex items-center justify-center rounded-md p-2 text-[#f2effb] md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[#2c2353] bg-[#0d0a1a] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((l) =>
              l.href.startsWith("http") ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-[#a99fc7] hover:text-[#f2effb]"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  to={l.href as never}
                  onClick={() => setOpen(false)}
                  className="text-[#a99fc7] hover:text-[#f2effb]"
                >
                  {l.label}
                </Link>
              )
            )}
            <div className="mt-3 flex flex-col gap-3 border-t border-[#2c2353] pt-3">
              <Link
                to="/get-appmap"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-gradient-to-r from-[#ff07aa] to-[#a21caf] px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Get AppMap
              </Link>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[#2c2353] px-4 py-2 text-center text-sm font-semibold text-[#f2effb]"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}