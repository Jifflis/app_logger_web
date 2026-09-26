import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Flutter SDK Documentation — App Logger",
  description: "Install, configure, and use the Simple App Logger Flutter SDK.",
};

const source = readFileSync(
  path.join(process.cwd(), "src/content/simple-app-logger.md"),
  "utf8",
);

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const resolveHref = (href: string) => {
  if (href.startsWith("http") || href.startsWith("#")) return href;
  return `https://github.com/Jifflis/simple_app_logger/blob/main/${href}`;
};

function inlineMarkdown(value: string): ReactNode[] {
  const tokens = value.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);

  return tokens.filter(Boolean).map((token, index) => {
    if (token.startsWith("`") && token.endsWith("`")) {
      return <code key={index}>{token.slice(1, -1)}</code>;
    }
    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={index}>{token.slice(2, -2)}</strong>;
    }
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return <a key={index} href={resolveHref(link[2])} target={link[2].startsWith("#") ? undefined : "_blank"} rel="noreferrer">{link[1]}</a>;
    }
    return token;
  });
}

type DocHeading = { level: number; title: string; id: string };

function getHeadings(markdown: string): DocHeading[] {
  return markdown.split("\n").flatMap((line) => {
    const match = line.match(/^(##|###)\s+(.+)$/);
    return match ? [{ level: match[1].length, title: match[2].replace(/`/g, ""), id: slugify(match[2]) }] : [];
  });
}

function MarkdownDocument({ markdown }: { markdown: string }) {
  const lines = markdown.split("\n");
  const blocks: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) { index += 1; continue; }

    const fence = line.match(/^```(.*)$/);
    if (fence) {
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith("```")) { code.push(lines[index]); index += 1; }
      index += 1;
      blocks.push(<div className="docs-code" key={`code-${index}`}><div><span>{fence[1] || "code"}</span><small>Simple App Logger</small></div><pre><code>{code.join("\n")}</code></pre></div>);
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const title = heading[2];
      const id = slugify(title);
      if (level === 1) blocks.push(<h1 id={id} key={id}>{inlineMarkdown(title)}</h1>);
      if (level === 2) blocks.push(<h2 id={id} key={id}>{inlineMarkdown(title)}<a className="heading-anchor" href={`#${id}`}>#</a></h2>);
      if (level === 3) blocks.push(<h3 id={id} key={id}>{inlineMarkdown(title)}<a className="heading-anchor" href={`#${id}`}>#</a></h3>);
      index += 1;
      continue;
    }

    if (line.startsWith("> ")) {
      const quote: string[] = [];
      while (index < lines.length && lines[index].startsWith(">")) { quote.push(lines[index].replace(/^>\s?/, "")); index += 1; }
      blocks.push(<blockquote key={`quote-${index}`}>{inlineMarkdown(quote.join(" "))}</blockquote>);
      continue;
    }

    if (line.includes("|") && index + 1 < lines.length && /^\|?[\s|:-]+\|?$/.test(lines[index + 1])) {
      const rows: string[][] = [];
      const cells = (row: string) => row.replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
      const headers = cells(line);
      index += 2;
      while (index < lines.length && lines[index].includes("|")) { rows.push(cells(lines[index])); index += 1; }
      blocks.push(<div className="docs-table-wrap" key={`table-${index}`}><table><thead><tr>{headers.map((cell) => <th key={cell}>{inlineMarkdown(cell)}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{inlineMarkdown(cell)}</td>)}</tr>)}</tbody></table></div>);
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index])) { items.push(lines[index].replace(/^[-*]\s+/, "")); index += 1; }
      blocks.push(<ul key={`ul-${index}`}>{items.map((item, itemIndex) => <li key={itemIndex}>{inlineMarkdown(item)}</li>)}</ul>);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index])) { items.push(lines[index].replace(/^\d+\.\s+/, "")); index += 1; }
      blocks.push(<ol key={`ol-${index}`}>{items.map((item, itemIndex) => <li key={itemIndex}>{inlineMarkdown(item)}</li>)}</ol>);
      continue;
    }

    const paragraph: string[] = [line];
    index += 1;
    while (index < lines.length && lines[index].trim() && !/^(#{1,3})\s|^```|^>\s|^[-*]\s|^\d+\.\s/.test(lines[index]) && !(lines[index].includes("|") && index + 1 < lines.length && /^\|?[\s|:-]+\|?$/.test(lines[index + 1]))) {
      paragraph.push(lines[index]); index += 1;
    }
    blocks.push(<p key={`p-${index}`}>{inlineMarkdown(paragraph.join(" "))}</p>);
  }

  return <>{blocks}</>;
}

export default function DocsPage() {
  const headings = getHeadings(source);
  const sections = headings.filter((heading) => heading.level === 2);

  return (
    <div className="docs-page">
      <header className="docs-header">
        <Link className="brand" href="/"><Image src="/app-logger-icon.png" alt="" width={38} height={38} priority /><span>App Logger</span><i>Docs</i></Link>
        <nav><Link href="/#product">Product</Link><Link href="/#features">Features</Link><Link className="active" href="/docs">Documentation</Link></nav>
        <a className="docs-github" href="https://github.com/Jifflis/simple_app_logger" target="_blank" rel="noreferrer">View on GitHub ↗</a>
      </header>
      <div className="docs-shell">
        <aside className="docs-sidebar">
          <div className="docs-sidebar-label">Flutter SDK</div>
          <a className="docs-overview-link" href="#simple-app-logger">Overview</a>
          <div className="docs-sidebar-label second">On this page</div>
          <nav>{sections.map((heading) => <a href={`#${heading.id}`} key={heading.id}>{heading.title}</a>)}</nav>
        </aside>
        <article className="docs-article">
          <div className="docs-badge">Flutter package documentation</div>
          <MarkdownDocument markdown={source} />
          <div className="docs-source-note"><div><b>Documentation source</b><span>This page is rendered from the Simple App Logger SDK README.</span></div><a href="https://github.com/Jifflis/simple_app_logger/blob/main/README.md" target="_blank" rel="noreferrer">Edit on GitHub ↗</a></div>
        </article>
        <aside className="docs-on-page">
          <span>In this guide</span>
          {headings.slice(0, 9).map((heading) => <a className={heading.level === 3 ? "nested" : ""} href={`#${heading.id}`} key={heading.id}>{heading.title}</a>)}
        </aside>
      </div>
    </div>
  );
}
