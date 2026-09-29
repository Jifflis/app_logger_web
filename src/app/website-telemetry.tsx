"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { AppLogger } from "@/lib/app-logger";

const viewedPaths = new Set<string>();
let launchLogged = false;

function safeText(value: string, fallback: string) {
  const normalized = value.replace(/\s+/g, " ").trim();
  return (normalized || fallback).slice(0, 100);
}

function safeDestination(anchor: HTMLAnchorElement) {
  try {
    const url = new URL(anchor.href, window.location.origin);
    return url.origin === window.location.origin
      ? `${url.pathname}${url.hash}`
      : `${url.origin}${url.pathname}`;
  } catch {
    return "unknown destination";
  }
}

export default function WebsiteTelemetry() {
  const pathname = usePathname();

  useEffect(() => {
    if (!launchLogged) {
      launchLogged = true;
      void AppLogger.info("Website launched", "lifecycle");
    }
  }, []);

  useEffect(() => {
    if (viewedPaths.has(pathname)) return;
    viewedPaths.add(pathname);
    void AppLogger.info(`Page viewed: ${pathname}`, "page_view");
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const control = event.target.closest<HTMLAnchorElement | HTMLButtonElement>(
        "a, button",
      );
      if (!control) return;

      const label = safeText(
        control.getAttribute("aria-label") || control.textContent || "",
        control instanceof HTMLAnchorElement ? "link" : "button",
      );
      const destination =
        control instanceof HTMLAnchorElement
          ? ` → ${safeDestination(control)}`
          : "";
      void AppLogger.info(`Clicked ${label}${destination}`, "navigation");
    };

    const onError = (event: ErrorEvent) => {
      void AppLogger.error(
        `Browser error: ${safeText(event.message, "Unknown error")}`,
        "client_error",
      );
    };

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason =
        event.reason instanceof Error
          ? event.reason.message
          : String(event.reason || "Unknown rejection");
      void AppLogger.error(
        `Unhandled promise rejection: ${safeText(reason, "Unknown rejection")}`,
        "client_error",
      );
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onUnhandledRejection);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  return null;
}
