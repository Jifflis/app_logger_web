import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — App Logger",
  description:
    "Get help with App Logger accounts, privacy requests, projects, and account deletion.",
};

export default function SupportPage() {
  return (
    <main className="privacy-page">
      <header className="legal-header">
        <Link className="brand" href="/" aria-label="App Logger home">
          <Image src="/app-logger-icon.png" alt="" width={36} height={36} priority />
          <span>App Logger</span>
        </Link>
        <nav aria-label="Support page navigation">
          <Link href="/docs">Documentation</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/">Back to home</Link>
        </nav>
      </header>

      <section className="legal-hero support-hero">
        <div className="legal-hero-inner">
          <div className="docs-badge">Help center</div>
          <h1>How can we help?</h1>
          <p>
            Find documentation, get help with your account, or contact the App
            Logger team about privacy and data requests.
          </p>
        </div>
      </section>

      <section className="support-content">
        <div className="support-grid">
          <article>
            <span>01</span>
            <h2>Product help</h2>
            <p>Set up the SDK, configure a project, and troubleshoot delivery.</p>
            <Link href="/docs">Read the documentation →</Link>
          </article>
          <article>
            <span>02</span>
            <h2>Privacy requests</h2>
            <p>Ask about your App Logger account or exercise a privacy right.</p>
            <a href="mailto:privacy@id-makers.com">privacy@id-makers.com →</a>
          </article>
          <article>
            <span>03</span>
            <h2>SDK end users</h2>
            <p>
              If another app sends information to App Logger, contact that app’s
              developer first. They decide what their app collects.
            </p>
            <Link href="/privacy#overview">Learn about data roles →</Link>
          </article>
        </div>

        <article className="deletion-guide" id="delete-account">
          <div>
            <span className="section-kicker">Account control</span>
            <h2>Delete your App Logger account</h2>
            <p>
              Account deletion is available directly in the App Logger Dashboard.
              It permanently removes your account. Projects you own and their
              associated logs, devices, sessions, custom fields, credentials, and
              push tokens are also deleted, except for limited records we must retain
              for security or legal reasons.
            </p>
          </div>
          <ol>
            <li>Open the App Logger Dashboard and sign in.</li>
            <li>Select your account name on the Projects screen.</li>
            <li>Open <strong>Privacy &amp; account</strong>.</li>
            <li>Select <strong>Delete account</strong>.</li>
            <li>Confirm your identity with your password or Google sign-in.</li>
          </ol>
          <p className="support-note">
            If you cannot access your account, email {" "}
            <a href="mailto:privacy@id-makers.com">privacy@id-makers.com</a> from
            the address associated with it. Never email passwords or API keys.
          </p>
        </article>
      </section>

      <footer className="legal-footer">
        <Link className="brand" href="/">
          <Image src="/app-logger-icon.png" alt="" width={34} height={34} />
          <span>App Logger</span>
        </Link>
        <span>© {new Date().getFullYear()} App Logger</span>
        <nav><Link href="/docs">Documentation</Link><Link href="/privacy">Privacy</Link></nav>
      </footer>
    </main>
  );
}
