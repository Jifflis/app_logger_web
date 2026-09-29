const API_BASE_URL = (
  process.env.APP_LOGGER_API_URL || "https://api.app-logger.com"
).replace(/\/$/, "");

export async function POST(request: Request) {
  let token: unknown;

  try {
    ({ token } = (await request.json()) as { token?: unknown });
  } catch {
    return Response.json({ error: "Invalid verification request." }, { status: 400 });
  }

  if (typeof token !== "string" || !token || token.length > 512) {
    return Response.json({ error: "A valid verification token is required." }, { status: 400 });
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/email/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
      cache: "no-store",
    });
    const data = (await response.json().catch(() => ({}))) as {
      message?: string;
      error?: string;
    };

    if (!response.ok) {
      return Response.json(
        { error: data.error || "This verification link is invalid or has expired." },
        { status: response.status >= 400 && response.status < 500 ? response.status : 502 },
      );
    }

    return Response.json({ message: data.message || "Email verified" });
  } catch {
    return Response.json(
      { error: "The verification service is temporarily unavailable. Please try again." },
      { status: 502 },
    );
  }
}
