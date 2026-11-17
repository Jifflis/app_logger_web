export async function POST() {
  return Response.json(
    {
      error:
        "Email verification has moved to the App Logger dashboard. Open the verification link from your email again.",
    },
    { status: 410 },
  );
}
