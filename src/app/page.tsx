import Image from "next/image";

const ArrowIcon = () => <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" /></svg>;
const CheckIcon = () => <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 10 3 3 7-7" /></svg>;

const featureIcons = {
  cloud: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18a5 5 0 0 1-.6-9.96A7 7 0 0 1 20 10.5 3.75 3.75 0 0 1 19.25 18H7Z" /><path d="M12 11v5m-2-2 2 2 2-2" /></svg>,
  device: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2" /><path d="M10 5h4m-3 13.5h2" /></svg>,
  chart: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V9m6 10V5m6 14v-7m4 7H2" /></svg>,
  shield: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 20 5v6c0 5-3.4 9-8 11-4.6-2-8-6-8-11V5l8-3Z" /><path d="m9 12 2 2 4-5" /></svg>,
  team: <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3" /><path d="M3.5 20v-1.5A4.5 4.5 0 0 1 8 14h2a4.5 4.5 0 0 1 4.5 4.5V20M16 5.5a3 3 0 0 1 0 5.5m1 3a4 4 0 0 1 3.5 4V20" /></svg>,
  filter: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16M7 12h10m-7 7h4" /><circle cx="8" cy="5" r="1.5" /><circle cx="15" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" /></svg>,
  globe: <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z" /></svg>,
  action: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 3 14 8-6 2-3 6L5 3Z" /><path d="m14 14 4 4" /></svg>,
};

const features = [
  { icon: "cloud", title: "Offline-first delivery", text: "Logs stay safely queued on-device and sync automatically when connectivity returns." },
  { icon: "device", title: "Device-level context", text: "See platform, model, app version, language, custom fields, and persistent installation identity." },
  { icon: "globe", title: "Active devices by country", text: "Choose a period and instantly see how many devices were active—and how many are online—in every country." },
  { icon: "shield", title: "Scoped credentials", text: "Use project API keys and short-lived installation tokens with the minimum permissions needed." },
  { icon: "team", title: "Built for teams", text: "Organize work by project and invite owners, admins, members, or read-only viewers." },
  { icon: "action", title: "User action monitoring", text: "See which actions users perform and how many users completed each one, so adoption and issues are easy to monitor." },
] as const;

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="App Logger home"><Image src="/app-logger-icon.png" alt="" width={42} height={42} priority /><span>App Logger</span></a>
        <div className="nav-links"><a href="#product">Product</a><a href="#features">Features</a><a href="#developers">Developers</a><a href="/docs">Documentation</a><a href="#security">Security</a></div>
        <a className="nav-cta" href="#get-started">Get started <ArrowIcon /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
        <div className="hero-copy reveal">
          <div className="eyebrow"><span /> Observability built for Flutter teams</div>
          <h1>Know what your app is doing <em>in the wild.</em></h1>
          <p className="hero-lead">Collect reliable logs, understand real devices, and trace problems from first signal to full context—all in one focused workspace.</p>
          <div className="hero-actions"><a className="button button-primary" href="#get-started">Start logging <ArrowIcon /></a><a className="button button-secondary" href="#workflow">See how it works</a></div>
          <div className="hero-proof"><div className="proof-faces"><span>iOS</span><span>AN</span><span>WEB</span></div><p><strong>One SDK, every Flutter target.</strong><br />Android, iOS, macOS, Windows, Linux, and web.</p></div>
        </div>

        <div className="hero-visual reveal delay-1" aria-label="App Logger dashboard preview">
          <div className="dashboard-window">
            <div className="window-topbar"><div className="window-brand"><Image src="/app-logger-icon.png" alt="" width={28} height={28} /><span>App Logger</span></div><div className="window-search">⌕&nbsp;&nbsp; Search logs, devices, tags...</div><div className="avatar">JA</div></div>
            <div className="dashboard-body">
              <aside><span className="side-label">Workspace</span><a className="active" href="#product"><b>⌂</b> Overview</a><a href="#features"><b>▥</b> Devices</a><a href="#developers"><b>≡</b> Live logs <i>12</i></a><a href="#features"><b>◈</b> Reports</a><span className="side-label space">Manage</span><a href="#security"><b>◇</b> API keys</a><a href="#security"><b>◎</b> Team</a></aside>
              <div className="dashboard-content">
                <div className="dash-heading"><div><small>PRODUCTION</small><h3>Project overview</h3></div><button>Last 24 hours⌄</button></div>
                <div className="metric-grid"><div><span>Active devices</span><strong>2,481</strong><small className="up">↗ 12.4%</small></div><div><span>Total logs</span><strong>84.2k</strong><small className="up">↗ 8.1%</small></div><div><span>Errors</span><strong>142</strong><small className="down">↘ 18.6%</small></div></div>
                <div className="chart-card">
                  <div className="card-title"><div><span>Log activity</span><small>Logs received across all platforms</small></div><div className="legend"><i /> Logs <i /> Errors</div></div>
                  <svg viewBox="0 0 620 180" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#246bfd" stopOpacity=".24"/><stop offset="1" stopColor="#246bfd" stopOpacity="0"/></linearGradient></defs><path className="grid-line" d="M0 30h620M0 75h620M0 120h620M0 165h620" /><path className="area" d="M0 146 C36 142 52 122 87 128 S142 97 177 105 222 76 265 89 311 48 350 66 401 47 440 56 492 20 528 42 577 24 620 31 V180H0Z" /><path className="line" d="M0 146 C36 142 52 122 87 128 S142 97 177 105 222 76 265 89 311 48 350 66 401 47 440 56 492 20 528 42 577 24 620 31" /><path className="error-line" d="M0 165 C80 163 103 151 160 158 S244 144 300 154 389 138 437 148 523 131 620 140" /></svg>
                  <div className="axis"><span>12 AM</span><span>6 AM</span><span>12 PM</span><span>6 PM</span><span>Now</span></div>
                </div>
                <div className="mini-grid"><div className="platform-card"><span>Platforms</span><div className="platform-row"><b>iOS</b><i><em style={{width:"74%"}} /></i><small>1,224</small></div><div className="platform-row"><b>Android</b><i><em style={{width:"56%"}} /></i><small>946</small></div><div className="platform-row"><b>Web</b><i><em style={{width:"22%"}} /></i><small>311</small></div></div><div className="log-card"><span>Recent event</span><div><i className="error-dot" /><p><b>Payment request failed</b><small>payments · iPhone 16 Pro</small></p><time>now</time></div><div><i className="info-dot" /><p><b>Checkout opened</b><small>checkout · Pixel 9</small></p><time>2m</time></div></div></div>
              </div>
            </div>
          </div>
          <div className="floating-alert"><span>!</span><div><small>ERROR SPIKE DETECTED</small><strong>Checkout · iOS 18.2</strong></div><b>+34%</b></div>
        </div>
      </section>

      <section className="platform-strip" aria-label="Supported platforms"><span>Built for the full Flutter ecosystem</span><div><b>● Android</b><b>● iOS</b><b>◼ macOS</b><b>⊞ Windows</b><b>◆ Linux</b><b>◎ Web</b></div></section>

      <section className="section product-section" id="product">
        <div className="section-kicker">From signal to answer</div>
        <div className="section-heading split"><h2>Stop guessing.<br />Start seeing the story.</h2><p>App Logger connects what happened, where it happened, and who it affected—without turning your debugging workflow into another project.</p></div>
        <div className="story-grid">
          <article className="story-card story-card-dark"><div className="story-copy"><span>01 · CAPTURE</span><h3>Never lose the clue that matters.</h3><p>Every event is queued locally first. Batching, automatic retries, and idempotent delivery keep your logs reliable through flaky networks.</p></div><div className="queue-visual"><div><span className="dot green" /><p><b>Application started</b><small>INFO · lifecycle</small></p><time>10:31:02</time></div><div><span className="dot amber" /><p><b>Checkout response was slow</b><small>WARNING · checkout</small></p><time>10:31:18</time></div><div><span className="dot red" /><p><b>Payment request failed</b><small>ERROR · payments</small></p><time>10:31:24</time></div><footer><span>Offline queue</span><b>3 events ready to sync</b><i /></footer></div></article>
          <article className="story-card story-card-light"><div className="story-copy"><span>02 · UNDERSTAND</span><h3>Context, already attached.</h3><p>Go beyond a stack of messages. Connect every log to the device, app version, language, session, country, and custom fields that explain it.</p></div><div className="device-visual"><div className="device-head"><div className="device-avatar">IP</div><div><b>Jeffrey&apos;s iPhone</b><small>Active 2 minutes ago</small></div><span>WATCHING</span></div><dl><div><dt>Platform</dt><dd>iOS 18.2</dd></div><div><dt>App version</dt><dd>2.4.1</dd></div><div><dt>Country</dt><dd>Philippines</dd></div><div><dt>Plan</dt><dd>Pro</dd></div></dl><div className="timeline"><i /><i /><i /><span /></div></div></article>
        </div>
      </section>

      <section className="insights-section" aria-labelledby="insights-title">
        <div className="section insights-inner">
          <div className="insights-heading">
            <div className="section-kicker light">Live audience intelligence</div>
            <h2 id="insights-title">See where users are active—and what they do next.</h2>
            <p>Select any day or month to compare active and online devices, open the full device list, review logs per device, and monitor user actions—all from one operational view.</p>
          </div>
          <div className="insight-cards">
            <article className="country-insight">
              <header><div><span>Devices by country</span><small>Selected period · Today</small></div><b><i /> Live</b></header>
              <div className="country-summary"><div><small>Active devices</small><strong>2,481</strong><em>during selected period</em></div><div><small>Online now</small><strong>786</strong><em>31.7% of active</em></div></div>
              <div className="country-list"><div><span><i>PH</i> Philippines</span><b>924</b><em><u style={{width:"88%"}} /></em><small>312 online</small></div><div><span><i>US</i> United States</span><b>641</b><em><u style={{width:"65%"}} /></em><small>201 online</small></div><div><span><i>SG</i> Singapore</span><b>386</b><em><u style={{width:"42%"}} /></em><small>128 online</small></div><div><span><i>AU</i> Australia</span><b>274</b><em><u style={{width:"30%"}} /></em><small>89 online</small></div></div>
            </article>
            <article className="action-insight">
              <header><div><span>User actions</span><small>Unique users · Selected period</small></div><button>Today⌄</button></header>
              <div className="action-total"><span>Tracked actions</span><strong>18,420</strong><small>across 2,481 active devices</small></div>
              <div className="action-list"><div><span className="action-rank">01</span><p><b>Opened checkout</b><small>checkout_opened</small></p><strong>1,284</strong><em>users</em></div><div><span className="action-rank">02</span><p><b>Completed purchase</b><small>purchase_completed</small></p><strong>876</strong><em>users</em></div><div><span className="action-rank">03</span><p><b>Used search</b><small>search_submitted</small></p><strong>642</strong><em>users</em></div></div>
              <footer><span>Conversion from checkout</span><strong>68.2%</strong><i><em /></i></footer>
            </article>
            <article className="device-logs-insight">
              <header><div><span>Active devices</span><small>Every device active during the selected period</small></div><button>Today⌄</button></header>
              <div className="device-table-head"><span>Device</span><span>Status</span><span>Last active</span><span>Total logs</span><span>Errors</span><span /></div>
              <div className="device-table-row"><div><i className="device-platform ios">iOS</i><p><b>Jeffrey&apos;s iPhone</b><small>iPhone 16 Pro · v2.4.1</small></p></div><span className="online-status"><i /> Online</span><time>Just now</time><strong>1,248</strong><em>12</em><button aria-label="View logs for Jeffrey's iPhone">View logs →</button></div>
              <div className="device-table-row"><div><i className="device-platform android">AN</i><p><b>Pixel QA Device</b><small>Pixel 9 · v2.4.1</small></p></div><span className="online-status"><i /> Online</span><time>2 min ago</time><strong>936</strong><em>4</em><button aria-label="View logs for Pixel QA Device">View logs →</button></div>
              <div className="device-table-row"><div><i className="device-platform web">WEB</i><p><b>Chrome Session</b><small>Chrome 134 · v2.4.0</small></p></div><span className="offline-status"><i /> Offline</span><time>18 min ago</time><strong>524</strong><em>0</em><button aria-label="View logs for Chrome Session">View logs →</button></div>
              <footer><p><b>From device list to full log history</b><small>Select any device to review its information, warnings, errors, tags, actions, and session timeline.</small></p><strong>2,481 devices in this period</strong></footer>
            </article>
          </div>
        </div>
      </section>

      <section className="logs-showcase" aria-labelledby="logs-title">
        <div className="section logs-showcase-heading">
          <div><div className="section-kicker">Per-device investigation</div><h2 id="logs-title">Every log. The context around it.</h2></div>
          <p>Open any active device to inspect its complete log history. Search messages, narrow the timeline by severity or tag, and open an event for the details needed to diagnose it.</p>
        </div>
        <div className="section logs-screen">
          <div className="logs-screen-topbar">
            <div className="logs-breadcrumb"><span>Devices</span><i>›</i><b>Jeffrey&apos;s iPhone</b></div>
            <div className="logs-period">Sep 23, 2026 <span>⌄</span></div>
          </div>
          <div className="logs-device-summary">
            <div className="logs-device-title"><i>iOS</i><div><h3>Jeffrey&apos;s iPhone</h3><p>iPhone 16 Pro · iOS 18.2 · App v2.4.1</p></div><span><i /> Online now</span></div>
            <div className="logs-summary-stats"><div><span>Total logs</span><b>1,248</b></div><div><span>Information</span><b>1,172</b></div><div><span>Warnings</span><b>64</b></div><div><span>Errors</span><b>12</b></div></div>
          </div>
          <div className="logs-toolbar"><div className="logs-search">⌕&nbsp;&nbsp; Search log messages</div><button className="selected">All logs <b>1,248</b></button><button><i className="level-info" /> Info</button><button><i className="level-warning" /> Warning</button><button><i className="level-error" /> Error</button><button>Tag: All <span>⌄</span></button></div>
          <div className="logs-layout">
            <div className="logs-feed">
              <div className="logs-feed-head"><span>Time</span><span>Level</span><span>Message</span><span>Tag</span></div>
              <div className="logs-feed-row"><time>10:31:24.482</time><span className="log-level error">Error</span><p><b>Payment request failed</b><small>POST /v1/payment returned status 500</small></p><em>payments</em></div>
              <div className="logs-feed-row active"><time>10:31:23.904</time><span className="log-level warning">Warning</span><p><b>Checkout response was slow</b><small>Request completed in 3,842 ms</small></p><em>checkout</em></div>
              <div className="logs-feed-row"><time>10:31:20.117</time><span className="log-level info">Info</span><p><b>Checkout screen opened</b><small>Navigation completed successfully</small></p><em>checkout</em></div>
              <div className="logs-feed-row"><time>10:31:18.006</time><span className="log-level info">Info</span><p><b>Cart restored</b><small>3 items restored from local storage</small></p><em>cart</em></div>
              <div className="logs-feed-row"><time>10:31:02.331</time><span className="log-level info">Info</span><p><b>Application started</b><small>Session 8e4f initialized</small></p><em>lifecycle</em></div>
              <div className="logs-pagination"><span>Showing 1–20 of 1,248 logs</span><div><button>‹</button><button className="current">1</button><button>2</button><button>3</button><button>›</button></div></div>
            </div>
            <aside className="log-detail-panel">
              <header><div><span>Log details</span><small>Warning · 10:31:23.904</small></div><button aria-label="Close log details">×</button></header>
              <div className="detail-message"><span>Message</span><p>Checkout response was slow</p></div>
              <dl><div><dt>Level</dt><dd><i className="level-warning" /> Warning</dd></div><div><dt>Tag</dt><dd>checkout</dd></div><div><dt>Device</dt><dd>Jeffrey&apos;s iPhone</dd></div><div><dt>Instance ID</dt><dd>ios-a8f2…31de</dd></div><div><dt>Recorded</dt><dd>Sep 23 · 10:31:23</dd></div></dl>
              <div className="detail-payload"><span>Event context</span><pre>{`{
  "duration_ms": 3842,
  "screen": "checkout",
  "network": "wifi"
}`}</pre></div>
              <footer><span>Previous event</span><b>Application started</b></footer>
            </aside>
          </div>
        </div>
        <div className="section logs-benefits"><div><span>01</span><p><b>Filter the noise</b><small>Search by message and narrow results by date, severity, and log tag.</small></p></div><div><span>02</span><p><b>Follow one device</b><small>Keep device identity, platform, app version, and status visible while investigating.</small></p></div><div><span>03</span><p><b>Inspect every event</b><small>Open log details and event context without losing your place in the timeline.</small></p></div></div>
      </section>

      <section className="workflow-section" id="workflow"><div className="section workflow-inner">
        <div className="workflow-copy"><div className="section-kicker light">Designed for the real world</div><h2>Ship once.<br />Stay informed.</h2><p>App Logger works quietly in the background, doing the hard parts before your first user ever reports a problem.</p><ul><li><CheckIcon /><span><b>Persistent local queue</b>Capture events immediately, even while offline.</span></li><li><CheckIcon /><span><b>Automatic recovery</b>Retry safely with capped backoff when the network returns.</span></li><li><CheckIcon /><span><b>Bounded storage</b>Keep recent signals without consuming unlimited device space.</span></li></ul></div>
        <div className="flow-diagram"><div className="flow-node app-node"><span>01</span><div className="mini-phone"><i /><i /><i /></div><b>Your Flutter app</b><small>Records events locally</small></div><div className="flow-arrow"><i /><small>encrypted<br />delivery</small></div><div className="flow-node api-node"><span>02</span><div className="api-mark"><i /><i /><i /></div><b>App Logger API</b><small>Validates &amp; organizes</small></div><div className="flow-arrow"><i /><small>live<br />insights</small></div><div className="flow-node dash-node"><span>03</span><div className="mini-chart"><i /><i /><i /><i /></div><b>Your dashboard</b><small>Turns signals into answers</small></div></div>
      </div></section>

      <section className="section features-section" id="features"><div className="section-kicker">Everything in context</div><div className="section-heading"><h2>Observability without the overhead.</h2><p>A focused toolset for finding the devices, sessions, and events behind real-world app behavior.</p></div><div className="feature-grid">{features.map((feature) => <article key={feature.title}><div className="feature-icon">{featureIcons[feature.icon]}</div><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></section>

      <section className="developer-section" id="developers"><div className="section developer-inner">
        <div className="code-window"><div className="code-top"><div><i /><i /><i /></div><span>main.dart</span><small>Flutter</small></div><pre><code><span>await SimpleAppLogger.init(</span>{"\n"}<span>  key: </span><span className="string">&apos;your-project-api-key&apos;</span><span>,</span>{"\n"}<span>  captureUnhandledError: </span><span className="bool">true</span><span>,</span>{"\n"}<span>);</span>{"\n\n"}<span>await SimpleAppLogger.info(</span>{"\n"}<span className="string">  &apos;Checkout opened&apos;</span><span>,</span>{"\n"}<span>);</span>{"\n\n"}<span>await SimpleAppLogger.error(</span>{"\n"}<span className="string">  &apos;Payment request failed&apos;</span><span>,</span>{"\n"}<span>  tag: </span><span className="string">&apos;payments&apos;</span><span>,</span>{"\n"}<span>);</span></code></pre><div className="code-status"><span><i /> Logger ready</span><small>Queued events sync automatically</small></div></div>
        <div className="developer-copy"><div className="section-kicker light">Developer friendly</div><h2>Three lines to your first signal.</h2><p>Add the Flutter package, initialize it with a scoped project key, and log the events that matter. App Logger handles queues, batches, retries, and device registration behind the scenes.</p><div className="install-command"><code>flutter pub add simple_app_logger</code><span>⌘</span></div><a href="https://github.com/Jifflis/simple_app_logger" target="_blank" rel="noreferrer">Explore the SDK on GitHub <ArrowIcon /></a></div>
      </div></section>

      <section className="security-section" id="security"><div className="section security-inner"><div><div className="section-kicker">Security by design</div><h2>Access stays scoped.<br />Your data stays yours.</h2></div><div className="security-list"><article><span>01</span><div><h3>Short-lived installation tokens</h3><p>Distributed apps exchange a restricted bootstrap credential for revocable, expiring installation access.</p></div></article><article><span>02</span><div><h3>Role-based project access</h3><p>Keep owners, admins, members, and viewers aligned with the access each person actually needs.</p></div></article><article><span>03</span><div><h3>Explicit API scopes</h3><p>Separate permissions for logs, devices, sessions, custom fields, push tokens, and more.</p></div></article></div></div></section>

      <section className="cta-section" id="get-started"><div className="cta-orbit one" /><div className="cta-orbit two" /><Image src="/app-logger-icon.png" alt="App Logger" width={82} height={82} /><div className="section-kicker light centered">Your app is already talking</div><h2>Start listening.</h2><p>Give your Flutter team a clearer view of every device, event, and issue in production.</p><div className="hero-actions"><a className="button button-white" href="https://github.com/Jifflis/simple_app_logger" target="_blank" rel="noreferrer">Get the Flutter SDK <ArrowIcon /></a><a className="button button-ghost" href="#product">Explore the product</a></div></section>

      <footer><div className="footer-top"><a className="brand" href="#top"><Image src="/app-logger-icon.png" alt="" width={38} height={38} /><span>App Logger</span></a><p>Reliable app logs. Useful context. Faster answers.</p><a href="https://github.com/Jifflis/simple_app_logger" target="_blank" rel="noreferrer">GitHub ↗</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} App Logger</span><div className="footer-links"><a href="/docs">Documentation</a><a href="/support">Support</a><a href="/privacy">Privacy Policy</a></div></div></footer>
    </main>
  );
}
