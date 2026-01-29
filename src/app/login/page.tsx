"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { loginAction } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-white/90 px-4 text-sm font-semibold text-black transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Signing in…" : "Sign in"}
    </button>
  );
}

export default function LoginPage() {
  const [state, formAction] = useFormState(loginAction, { error: undefined });

  return (
    <main className="container">
      <div className="mx-auto w-full max-w-md">
        <h1 className="title">Sign in</h1>
        <p className="subtitle">
          Minimal auth placeholder. Any non-empty credentials will sign you in.
        </p>

        <section className="card">
          <form action={formAction} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm text-white/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="h-11 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm text-white/90 outline-none ring-0 placeholder:text-white/30 focus:border-white/20"
                placeholder="you@company.com"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="text-sm text-white/80">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="h-11 w-full rounded-lg border border-white/10 bg-black/20 px-3 text-sm text-white/90 outline-none ring-0 placeholder:text-white/30 focus:border-white/20"
                placeholder="••••••••"
              />
            </div>

            {state?.error ? (
              <p role="alert" className="text-sm text-red-300">
                {state.error}
              </p>
            ) : null}

            <SubmitButton />

            <div className="text-center text-xs text-white/50">
              <Link href="/" className="hover:text-white/80">
                Back to home
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
