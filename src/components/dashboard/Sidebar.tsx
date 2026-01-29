import Link from "next/link";

export type DashboardNavItem = {
  label: string;
  href: string;
};

const defaultNav: DashboardNavItem[] = [
  { label: "Overview", href: "/dashboard" },
  { label: "Employees", href: "/dashboard/employees" },
  { label: "Attendance", href: "/dashboard/attendance" },
  { label: "Leave", href: "/dashboard/leave" }
];

// PUBLIC_INTERFACE
export default function Sidebar({
  navItems = defaultNav
}: {
  /** List of navigation items to render in the sidebar. */
  navItems?: DashboardNavItem[];
}) {
  return (
    <nav className="flex h-full flex-col gap-2 p-4">
      <div className="px-2 py-2">
        <div className="text-sm font-semibold tracking-wide text-white/90">
          WorkSphere AI
        </div>
        <div className="text-xs text-white/60">Dashboard</div>
      </div>

      <div className="mt-2 flex flex-1 flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="mt-auto px-2 py-2 text-xs text-white/50">
        © {new Date().getFullYear()} WorkSphere
      </div>
    </nav>
  );
}
