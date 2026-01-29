"use client";

import { logoutAction } from "@/app/login/actions";

type TopbarProps = {
  onOpenSidebar: () => void;
};

// PUBLIC_INTERFACE
export default function Topbar({ onOpenSidebar }: TopbarProps) {
  /** Top navigation bar for dashboard pages, including a mobile sidebar toggle and logout button. */
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/20 backdrop-blur">
      <div className="flex h-14 items-center gap-3 px-4">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/10 lg:hidden"
          aria-label="Open sidebar"
        >
          {/* Hamburger icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="text-white/80"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="flex min-w-0 flex-1 items-center gap-2">
          <div className="truncate text-sm font-medium text-white/90">
            Dashboard
          </div>
          <div className="hidden text-xs text-white/50 sm:block">
            HRMS workspace
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden text-xs text-white/60 sm:block">
            Signed in (cookie)
          </div>

          <form action={logoutAction}>
            <button
              type="submit"
              className="inline-flex h-9 items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              Logout
            </button>
          </form>

          <div className="h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/10" />
        </div>
      </div>
    </header>
  );
}
