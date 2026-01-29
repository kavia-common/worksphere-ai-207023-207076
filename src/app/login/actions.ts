"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_NAME, type AuthCookieValue } from "@/lib/auth";

type LoginState = {
  error?: string;
};

// PUBLIC_INTERFACE
export async function loginAction(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  /** Server action that performs a minimal (placeholder) login and sets an auth cookie. */
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();

  // Minimal validation (placeholder). Replace with backend API call later.
  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const value: AuthCookieValue = "1";

  cookies().set(AUTH_COOKIE_NAME, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/"
  });

  redirect("/dashboard");
}

// PUBLIC_INTERFACE
export async function logoutAction(): Promise<void> {
  /** Server action that clears the auth cookie and redirects to /login. */
  cookies().delete(AUTH_COOKIE_NAME);
  redirect("/login");
}
