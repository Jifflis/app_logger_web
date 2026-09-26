import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — App Logger",
  description:
    "Learn what information App Logger collects, why it is used, and the choices available to account holders and application users.",
};

const sections = [
  ["overview", "Overview"],
  ["information", "Information we collect"],
  ["use", "How we use information"],
  ["sharing", "How information is shared"],
  ["retention", "Retention and deletion"],
  ["security", "Security"],
  ["rights", "Your choices and rights"],
  ["international", "International transfers"],
  ["children", "Children"],
  ["changes", "Changes to this policy"],
  ["contact", "Contact us"],
] as const;

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <header className="legal-header">
        <Link className="brand" href="/" aria-label="App Logger home">
          <Image src="/app-logger-icon.png" alt="" width={36} height={36} priority />
          <span>App Logger</span>
        </Link>
        <nav aria-label="Legal page navigation">
          <Link href="/docs">Documentation</Link>
          <Link href="/">Back to home</Link>
        </nav>
      </header>

      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="docs-badge">Legal</div>
          <h1>Privacy Policy</h1>
          <p>
            App Logger helps development teams understand how their applications
            behave. This policy explains the information involved, how we use it,
            and the controls available to you.
          </p>
          <div className="legal-meta">
            <span><b>Effective date</b> September 24, 2026</span>
            <span><b>Service</b> App Logger website, dashboard, API, and SDK</span>
          </div>
        </div>
      </section>

      <div className="legal-layout">
        <aside className="legal-toc" aria-label="On this page">
          <span>On this page</span>
          <nav>
            {sections.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
          </nav>
        </aside>

        <article className="legal-content">
          <section id="overview">
            <h2>1. Overview</h2>
            <p>
              App Logger is an application observability service operated by ID Maker
              (collectively, “App Logger,” “we,” “us,” or “our”). It includes the App
              Logger website, dashboard applications, API, and the Simple App Logger
              SDK (the “Service”).
            </p>
            <div className="legal-callout">
              <strong>If you use the App Logger dashboard</strong>
              <p>We control the account and service-usage information described below.</p>
              <strong>If an app you use includes the App Logger SDK</strong>
              <p>
                The developer or organization that provides that app decides what events
                to collect and why. That organization is responsible for its own privacy
                notices and requests concerning that data. App Logger processes the data
                for that organization to provide the Service.
              </p>
            </div>
          </section>

          <section id="information">
            <h2>2. Information we collect</h2>

            <h3>Account and authentication information</h3>
            <p>
              When you create or manage an account, we collect your username, email
              address, password in hashed form, email-verification status, and account
              creation date. If you sign in with Google, we receive an identity token and
              store the provider, provider account identifier, and associated email address.
              Google and Firebase may also process authentication information under their
              own privacy terms.
            </p>

            <h3>Workspace and project information</h3>
            <p>
              We process project names, team membership, roles, invitation email addresses,
              project configuration, custom-field definitions, and API or installation
              credential metadata. Secret credentials are stored in hashed form where the
              Service supports hashing; newly generated API secrets are shown only when created.
            </p>

            <h3>Application telemetry submitted by customers</h3>
            <p>
              The Service receives information that customers configure their applications
              to send. Depending on that configuration, this may include:
            </p>
            <ul>
              <li>log messages, severity levels, tags, event identifiers, and timestamps;</li>
              <li>device or installation identifiers, device name and model, platform, app version, language, and country;</li>
              <li>session activity, last-active times, watch status, and action events;</li>
              <li>customer-defined fields and values, which may include text, numbers, dates, email addresses, or other application-specific context; and</li>
              <li>push-notification tokens when a customer enables that feature.</li>
            </ul>
            <p>
              Log messages and custom fields are defined by the customer. They may contain
              personal information if a customer or its app places personal information in
              those fields. Customers should avoid sending sensitive information that is not
              needed for application monitoring.
            </p>

            <h3>Technical, security, and local-device information</h3>
            <p>
              We process request details such as request path, method, response status,
              timing, project or account identifiers, app version, and pseudonymized source
              or installation identifiers for security auditing, reliability, rate limiting,
              and abuse prevention. The dashboard may store session tokens and preferences
              on your device or in browser storage so you can remain signed in and use the
              Service. The public website does not currently use advertising trackers.
            </p>
          </section>

          <section id="use">
            <h2>3. How we use information</h2>
            <p>We use information to:</p>
            <ul>
              <li>provide, maintain, and troubleshoot the Service;</li>
              <li>authenticate users, verify email addresses, and recover accounts;</li>
              <li>receive, organize, search, and display application logs and device context;</li>
              <li>support project collaboration, invitations, roles, and access controls;</li>
              <li>protect accounts, enforce usage limits, investigate abuse, and maintain audit records;</li>
              <li>communicate about the Service, including transactional and security messages; and</li>
              <li>comply with law and enforce our agreements.</li>
            </ul>
            <p>
              Where applicable law requires a legal basis, we rely on performance of our
              contract, our legitimate interests in operating and securing the Service,
              compliance with legal obligations, or consent where we specifically request it.
            </p>
          </section>

          <section id="sharing">
            <h2>4. How information is shared</h2>
            <p>We do not sell personal information or use customer telemetry for targeted advertising.</p>
            <p>We may disclose information in these limited circumstances:</p>
            <ul>
              <li><strong>Within a project:</strong> project owners, administrators, members, and viewers can access data according to their assigned role.</li>
              <li><strong>Service providers:</strong> vendors that provide hosting, databases, caching, authentication, email delivery, security, and similar infrastructure may process information for us under contractual or other appropriate restrictions. We require them to protect personal information to the same or an equivalent level as described in this policy and to use it only to provide services to us.</li>
              <li><strong>At your direction:</strong> when you enable an integration, invite a team member, or otherwise ask us to disclose information.</li>
              <li><strong>Legal and safety reasons:</strong> when reasonably necessary to comply with law, protect rights or safety, investigate fraud or abuse, or secure the Service.</li>
              <li><strong>Business transfers:</strong> as part of a merger, financing, acquisition, reorganization, or sale of assets, subject to appropriate safeguards.</li>
            </ul>
          </section>

          <section id="retention">
            <h2>5. Retention and deletion</h2>
            <p>
              We retain account information while an account is active and as reasonably
              necessary to provide the Service, resolve disputes, secure the Service, and meet
              legal obligations. Customer telemetry is retained according to the applicable
              project settings, customer instructions, and operational requirements.
            </p>
            <p>
              Project owners can remove individual project resources through available Service
              controls. Account holders may request account deletion using the contact details
              below. Deletion from active systems may not be immediate, and limited copies can
              remain temporarily in backups, security records, or records we must retain by law.
              If your information was submitted by an App Logger customer, direct your request
              to the developer or organization responsible for that app first.
            </p>
          </section>

          <section id="security">
            <h2>6. Security</h2>
            <p>
              We use administrative, technical, and organizational safeguards designed to
              protect information. These include encrypted transport, hashed passwords and
              supported credentials, short-lived access tokens, scoped machine credentials,
              role-based project access, rate limiting, security logging with credential
              redaction, and revocation controls. No system is completely secure, so we cannot
              guarantee absolute security.
            </p>
            <p>
              Customers are responsible for protecting their project credentials, limiting the
              personal information included in logs, and granting project access only to people
              who need it.
            </p>
          </section>

          <section id="rights">
            <h2>7. Your choices and rights</h2>
            <p>
              Depending on where you live, you may have rights to access, correct, delete, or
              receive a copy of your personal information; object to or restrict certain
              processing; withdraw consent; or appeal a decision about a request. You may also
              have the right to complain to your local data-protection authority.
            </p>
            <p>
              You can update certain account details in the Service. For other requests, contact
              us below. We may need to verify your identity and may retain information where an
              exception under applicable law applies. Authorized agents should provide proof of
              authority. We will not discriminate against you for exercising a privacy right.
            </p>
          </section>

          <section id="international">
            <h2>8. International data transfers</h2>
            <p>
              App Logger and its service providers may process information in countries other
              than the country where it was collected. Where required, we use appropriate legal
              safeguards for international transfers. Data-protection laws in those countries
              may differ from the laws where you live.
            </p>
          </section>

          <section id="children">
            <h2>9. Children</h2>
            <p>
              The Service is intended for developers and organizations and is not directed to
              children under 13, or a higher minimum age where local law requires it. We do not
              knowingly collect a child’s personal information through an App Logger account.
              Customers using the SDK are responsible for obtaining any permissions required
              for their own applications and audiences.
            </p>
          </section>

          <section id="changes">
            <h2>10. Changes to this policy</h2>
            <p>
              We may update this policy as the Service or legal requirements change. We will
              post the revised policy here and update the effective date. If a change is
              material, we will provide additional notice where required by law.
            </p>
          </section>

          <section id="contact">
            <h2>11. Contact us</h2>
            <p>
              For privacy questions or requests, email {" "}
              <a href="mailto:privacy@id-makers.com">privacy@id-makers.com</a>. Please include
              enough detail for us to understand your request, but do not send passwords, API
              keys, access tokens, or sensitive log content by email.
            </p>
          </section>
        </article>
      </div>

      <footer className="legal-footer">
        <Link className="brand" href="/">
          <Image src="/app-logger-icon.png" alt="" width={34} height={34} />
          <span>App Logger</span>
        </Link>
        <span>© {new Date().getFullYear()} App Logger</span>
        <nav><Link href="/docs">Documentation</Link><Link href="/support">Support</Link><Link href="/privacy">Privacy</Link></nav>
      </footer>
    </main>
  );
}
