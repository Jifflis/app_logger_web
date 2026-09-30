"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type ResetState = "idle" | "submitting" | "success" | "error";

export default function ResetPasswordForm({ token }: { token?: string }) {
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [state, setState] = useState<ResetState>("idle");
  const [message, setMessage] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!token) {
      setState("error");
      setMessage("Open the full password reset link from your App Logger email.");
      return;
    }
    if (password.length < 8) {
      setState("error");
      setMessage("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmation) {
      setState("error");
      setMessage("The passwords do not match.");
      return;
    }

    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error || "We could not reset your password.");
      }

      setPassword("");
      setConfirmation("");
      setState("success");
      setMessage(data.message || "Your password has been reset.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "We could not reset your password.");
    }
  };

  if (state === "success") {
    return (
      <article className="verification-card password-reset-card verification-success" aria-live="polite">
        <div className="verification-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="m5 12 4.2 4.2L19 6.8" /></svg>
        </div>
        <span className="verification-eyebrow">Password updated</span>
        <h1>Your password is reset</h1>
        <p>{message}</p>
        <Link className="verification-button" href="/">
          Continue to App Logger <span aria-hidden="true">→</span>
        </Link>
        <small>App Logger password reset <i /> Secure, single-use link</small>
      </article>
    );
  }

  return (
    <article className={`verification-card password-reset-card${!token ? " verification-missing" : ""}`}>
      <div className="verification-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M7.5 11V8.5a4.5 4.5 0 0 1 9 0V11M6 11h12v9H6z" />
        </svg>
      </div>
      <span className="verification-eyebrow">Secure your account</span>
      <h1>Choose a new password</h1>
      <p>Use at least 8 characters. Your reset link can only be used once.</p>

      {token ? (
        <form className="password-reset-form" onSubmit={submit}>
          <label htmlFor="password">New password</label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            minLength={8}
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label htmlFor="password-confirmation">Confirm new password</label>
          <input
            id="password-confirmation"
            type="password"
            autoComplete="new-password"
            minLength={8}
            required
            value={confirmation}
            onChange={(event) => setConfirmation(event.target.value)}
          />
          {state === "error" && <div className="password-reset-error" role="alert">{message}</div>}
          <button className="verification-button" type="submit" disabled={state === "submitting"}>
            {state === "submitting" ? "Resetting password…" : "Reset password"}
          </button>
        </form>
      ) : (
        <>
          <div className="password-reset-error" role="alert">
            Open the full password reset link from your App Logger email.
          </div>
          <Link className="verification-button secondary" href="/support">
            Get support <span aria-hidden="true">→</span>
          </Link>
        </>
      )}

      <small>App Logger password reset <i /> Secure, single-use link</small>
    </article>
  );
}
