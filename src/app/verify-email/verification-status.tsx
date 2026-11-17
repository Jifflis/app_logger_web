import Link from "next/link";
export default function VerificationStatus() {
  return (
    <article className="verification-card verification-missing" aria-live="polite">
      <div className="verification-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M12 8v5m0 3.5v.1" /></svg>
      </div>
      <span className="verification-eyebrow">Verification link required</span>
      <h1>This link is incomplete</h1>
      <p>Open the full verification link from your App Logger email and try again.</p>

      <Link className="verification-button secondary" href="/support">Get support <span aria-hidden="true">→</span></Link>

      <small>App Logger email verification <i /> Secure, single-use link</small>
    </article>
  );
}
