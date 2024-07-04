import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export const GET = (request: NextRequest) => {
  const path = request.nextUrl.searchParams.get("path") || "";
  revalidatePath(path);
  return new Response("OK", { status: 200 });
};
