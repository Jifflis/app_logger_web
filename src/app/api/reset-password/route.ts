const API_BASE_URL = (
  process.env.APP_LOGGER_API_URL || "https://api.app-logger.com"
).replace(/\/$/, "");

export async function POST(request: Request) {
  let token: unknown;
  let password: unknown;

  try {
    ({ token, password } = (await request.json()) as {
      token?: unknown;
      password?: unknown;
    });
  } catch {
    return Response.json({ error: "Invalid password reset request." }, { status: 400 });
  }

  if (typeof token !== "string" || !token || token.length > 512) {
    return Response.json({ error: "A valid reset token is required." }, { status: 400 });
  }
  if (typeof password !== "string" || password.length < 8) {
    return Response.json(
      { error: "Password must be at least 8 characters." },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/password/reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
      cache: "no-store",
    });
    const data = (await response.json().catch(() => ({}))) as {
      message?: string;
      error?: string;
    };

    if (!response.ok) {
      return Response.json(
        { error: data.error || "This password reset link is invalid or has expired." },
        { status: response.status >= 400 && response.status < 500 ? response.status : 502 },
      );
    }

    return Response.json({ message: data.message || "Password reset successful" });
  } catch {
    return Response.json(
      { error: "The password reset service is temporarily unavailable. Please try again." },
      { status: 502 },
    );
  }
}
