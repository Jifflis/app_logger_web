"use client";

type LogLevel = "INFO" | "WARNING" | "ERROR";

const INSTANCE_STORAGE_KEY = "app_logger_web_instance_id";
const apiBaseUrl = process.env.NEXT_PUBLIC_LOGGER_URL?.replace(/\/$/, "");
const configuredApiKey = process.env.NEXT_PUBLIC_LOGGER_API_KEY?.trim();

let fallbackInstanceId: string | undefined;
let initialization: Promise<boolean> | undefined;

function newInstanceId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `web-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function getInstanceId() {
  if (typeof window === "undefined") return "app-logger-web-server";

  try {
    const existing = window.localStorage.getItem(INSTANCE_STORAGE_KEY);
    if (existing) return existing;

    const created = newInstanceId();
    window.localStorage.setItem(INSTANCE_STORAGE_KEY, created);
    return created;
  } catch {
    fallbackInstanceId ??= newInstanceId();
    return fallbackInstanceId;
  }
}

function authorizationHeader() {
  if (!configuredApiKey) return undefined;
  return configuredApiKey.startsWith("ApiKey ")
    ? configuredApiKey
    : `ApiKey ${configuredApiKey}`;
}

async function post(path: string, body: Record<string, unknown>) {
  const authorization = authorizationHeader();
  if (!apiBaseUrl || !authorization) return false;

  try {
    const response = await fetch(`${apiBaseUrl}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify(body),
      keepalive: true,
    });

    if (!response.ok) {
      console.warn(`App Logger request failed (${response.status})`);
      return false;
    }
    return true;
  } catch (error) {
    console.warn("App Logger request could not be delivered", error);
    return false;
  }
}

async function initializeBrowser() {
  if (typeof window === "undefined") return false;

  const instanceId = getInstanceId();
  return post("/api/devices/init", {
    instance_id: instanceId,
    device_id: instanceId,
    actual_log_time: new Date().toISOString(),
    name: (document.title || "App Logger website").slice(0, 100),
    model: navigator.userAgent.slice(0, 512),
    platform: "web",
    app_version: "website",
    language: navigator.language.slice(0, 100),
  });
}

export const AppLogger = {
  initialize() {
    initialization ??= initializeBrowser();
    return initialization;
  },

  async log(level: LogLevel, message: string, tag = "website") {
    if (!(await this.initialize())) return false;

    return post("/api/logs", {
      instance_id: getInstanceId(),
      actual_log_time: new Date().toISOString(),
      message: message.slice(0, 500),
      level,
      tag: tag.slice(0, 80),
    });
  },

  info(message: string, tag?: string) {
    return this.log("INFO", message, tag);
  },

  warning(message: string, tag?: string) {
    return this.log("WARNING", message, tag);
  },

  error(message: string, tag?: string) {
    return this.log("ERROR", message, tag);
  },
};
