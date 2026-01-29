import type { ReactNode } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import MobileSidebar from "@/components/dashboard/MobileSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh">
      <MobileSidebar>
        {({ open }) => (
          <>
            <div className="flex min-h-dvh">
              {/* Desktop sidebar */}
              <aside className="hidden w-72 border-r border-white/10 bg-black/10 lg:block">
                <Sidebar />
              </aside>

              {/* Main column */}
              <div className="flex min-w-0 flex-1 flex-col">
                <Topbar onOpenSidebar={open} />
                <main className="flex-1 p-4 sm:p-6">
                  <div className="mx-auto w-full max-w-6xl">{children}</div>
                </main>
              </div>
            </div>
          </>
        )}
      </MobileSidebar>
    </div>
  );
}
