import { Liveblocks } from "@liveblocks/node";
import { NextRequest, NextResponse } from "next/server";
import { getRandomUser } from "@/utils/randomUser";

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_API_KEY!,
});

export async function POST(request: NextRequest) {

  const liveSession = liveblocks.prepareSession("test-user", {

    // Optional, custom static metadata for the session
    userInfo: {
      name: getRandomUser().name,
      picture: "",
      color: getRandomUser().color,
    },

  });

  const { room } = await request.json();
  liveSession.allow(room, liveSession.FULL_ACCESS);

  const { body, status } = await liveSession.authorize();
  return new NextResponse(body, { status });
}