"use client";

import { useCallback, useState } from "react";
import Sidebar, { type DashboardNavItem } from "./Sidebar";

type MobileSidebarProps = {
  navItems?: DashboardNavItem[];
  children: (api: { open: () => void }) => React.ReactNode;
};

// PUBLIC_INTERFACE
export default function MobileSidebar({
  navItems,
  children
}: MobileSidebarProps) {
  /** Provides a mobile sidebar drawer and exposes an `open()` handler to children. */
  const [open, setOpen] = useState(false);

  const openSidebar = useCallback(() => setOpen(true), []);
  const closeSidebar = useCallback(() => setOpen(false), []);

  return (
    <>
      {children({ open: openSidebar })}

      {/* Overlay */}
      {open ? (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      ) : null}

      {/* Drawer */}
      <aside
        className={[
          "fixed left-0 top-0 z-50 h-dvh w-72 border-r border-white/10 bg-[#0b1220]/95 backdrop-blur lg:hidden",
          "transition-transform duration-200",
          open ? "translate-x-0" : "-translate-x-full"
        ].join(" ")}
        aria-hidden={!open}
      >
        <div className="flex h-14 items-center justify-between px-4">
          <div className="text-sm font-semibold text-white/90">Menu</div>
          <button
            type="button"
            onClick={closeSidebar}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/10"
            aria-label="Close sidebar"
          >
            {/* X icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="text-white/80"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <Sidebar navItems={navItems} />
      </aside>
    </>
  );
}
