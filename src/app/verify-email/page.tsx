import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import VerificationStatus from "./verification-status";

const DASHBOARD_VERIFICATION_URL =
  "https://app.app-logger.com/verify-email";

export const metadata: Metadata = {
  title: "Verify your email — App Logger",
  description: "Confirm your email address for your App Logger account.",
};

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string | string[] }>;
}) {
  const tokenParam = (await searchParams).token;
  const token = Array.isArray(tokenParam) ? tokenParam[0] : tokenParam;

  if (token) {
    const destination = new URL(DASHBOARD_VERIFICATION_URL);
    destination.searchParams.set("token", token);
    redirect(destination.toString());
  }

  return (
    <main className="verification-page">
      <header className="verification-header">
        <Link className="brand" href="/" aria-label="App Logger home">
          <Image src="/app-logger-icon.png" alt="" width={38} height={38} priority />
          <span>App Logger</span>
        </Link>
        <Link href="/support">Need help?</Link>
      </header>

      <section className="verification-main">
        <div className="verification-grid" aria-hidden="true" />
        <div className="verification-glow" aria-hidden="true" />
        <VerificationStatus />
      </section>

      <footer className="verification-footer">
        <span>© {new Date().getFullYear()} App Logger</span>
        <nav aria-label="Footer navigation">
          <Link href="/privacy">Privacy</Link>
          <Link href="/support">Support</Link>
        </nav>
      </footer>
    </main>
  );
}
