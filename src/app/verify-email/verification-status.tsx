"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type VerificationState = "loading" | "success" | "error" | "missing";
const DASHBOARD_URL = "https://app.app-logger.com";

export default function VerificationStatus({ token }: { token?: string }) {
  const [state, setState] = useState<VerificationState>(token ? "loading" : "missing");
  const [message, setMessage] = useState("");
  const started = useRef(false);

  const verify = useCallback(async () => {
    if (!token) {
      setState("missing");
      return;
    }

    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error || "We could not verify this email address.");
      }

      setState("success");
      setMessage(data.message || "Your email address has been verified.");
      window.location.replace(DASHBOARD_URL);
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "We could not verify this email address.");
    }
  }, [token]);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    void verify();
  }, [verify]);

  const content = {
    loading: {
      eyebrow: "Securing your account",
      title: "Verifying your email",
      body: "Hold on for a moment while we confirm your verification link.",
    },
    success: {
      eyebrow: "Verification complete",
      title: "Your email is verified",
      body: message || "Your email address has been verified.",
    },
    error: {
      eyebrow: "Link not verified",
      title: "We couldn’t verify this link",
      body: message,
    },
    missing: {
      eyebrow: "Verification link required",
      title: "This link is incomplete",
      body: "Open the full verification link from your App Logger email and try again.",
    },
  }[state];

  return (
    <article className={`verification-card verification-${state}`} aria-live="polite">
      <div className="verification-mark" aria-hidden="true">
        {state === "loading" && <span className="verification-spinner" />}
        {state === "success" && <svg viewBox="0 0 24 24"><path d="m5 12 4.2 4.2L19 6.8" /></svg>}
        {(state === "error" || state === "missing") && <svg viewBox="0 0 24 24"><path d="M12 8v5m0 3.5v.1" /></svg>}
      </div>
      <span className="verification-eyebrow">{content.eyebrow}</span>
      <h1>{content.title}</h1>
      <p>{content.body}</p>

      {state === "success" && <Link className="verification-button" href={DASHBOARD_URL}>Continue to App Logger <span aria-hidden="true">→</span></Link>}
      {state === "error" && <button className="verification-button" type="button" onClick={verify}>Try again <span aria-hidden="true">↻</span></button>}
      {state === "missing" && <Link className="verification-button secondary" href="/support">Get support <span aria-hidden="true">→</span></Link>}

      <small>App Logger email verification <i /> Secure, single-use link</small>
    </article>
  );
}
