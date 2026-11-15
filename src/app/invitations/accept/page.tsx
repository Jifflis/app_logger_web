import { redirect } from "next/navigation";

const DASHBOARD_INVITATION_URL =
  "https://app.app-logger.com/invitations/accept";

export default async function AcceptProjectInvitationPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string | string[] }>;
}) {
  const tokenParam = (await searchParams).token;
  const token = Array.isArray(tokenParam) ? tokenParam[0] : tokenParam;
  const destination = new URL(DASHBOARD_INVITATION_URL);

  if (token) {
    destination.searchParams.set("token", token);
  }

  redirect(destination.toString());
}
