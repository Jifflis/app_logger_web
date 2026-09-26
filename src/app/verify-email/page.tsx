import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VerificationStatus from "./verification-status";

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
        <VerificationStatus token={token} />
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
