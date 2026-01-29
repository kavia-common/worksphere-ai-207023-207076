export default function DashboardPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight text-white/90">
        Overview
      </h1>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-white/60">Employees</div>
          <div className="mt-1 text-2xl font-semibold text-white/90">—</div>
          <div className="mt-2 text-xs text-white/50">
            Placeholder metric (connect API later)
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-white/60">Today’s attendance</div>
          <div className="mt-1 text-2xl font-semibold text-white/90">—</div>
          <div className="mt-2 text-xs text-white/50">
            Placeholder metric (connect API later)
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-white/60">Open leave requests</div>
          <div className="mt-1 text-2xl font-semibold text-white/90">—</div>
          <div className="mt-2 text-xs text-white/50">
            Placeholder metric (connect API later)
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm font-medium text-white/90">
          Welcome to WorkSphere
        </div>
        <p className="mt-2 text-sm text-white/60">
          This is a basic dashboard shell (sidebar + topbar). Add modules under{" "}
          <code className="rounded bg-black/30 px-1 py-0.5 text-white/80">
            /dashboard/*
          </code>{" "}
          and they’ll automatically render inside this layout.
        </p>
      </div>
    </section>
  );
}
