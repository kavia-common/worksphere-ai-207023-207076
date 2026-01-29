import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <h1 className="title">WorkSphere AI</h1>
      <p className="subtitle">
        Next.js frontend initialized. Start building dashboards and workflows
        from here.
      </p>

      <section className="card">
        <h2>Quick links</h2>
        <ul>
          <li>
            <Link href="/login" className="underline underline-offset-4">
              /login
            </Link>{" "}
            — sign in (placeholder)
          </li>
          <li>
            <Link href="/dashboard" className="underline underline-offset-4">
              /dashboard
            </Link>{" "}
            — protected (redirects to /login when signed out)
          </li>
        </ul>
      </section>

      <section className="card" style={{ marginTop: 16 }}>
        <h2>Next steps</h2>
        <ul>
          <li>Add real authentication/SSO flow</li>
          <li>Connect to Backend API</li>
          <li>Build role-based dashboards (Admin/HR/Manager/Employee)</li>
        </ul>
      </section>
    </main>
  );
}
