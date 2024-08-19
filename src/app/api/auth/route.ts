import { Liveblocks } from "@liveblocks/node";
import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_API_KEY!,
});

export async function POST(request: NextRequest) {
  const userInfo = {
    // 表示名は niwatori で固定にしています
    name: 'niwatori',
    // カーソルなどに使用する色のカラーコードをランダム生成しています
    color: '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6),
    // 画像は固定
    picture: 'https://avatars.githubusercontent.com/u/6592938?v=4',
  }

  const liveSession = liveblocks.prepareSession(nanoid(), {
    userInfo
  });

  const { room } = await request.json();
  liveSession.allow(room, liveSession.FULL_ACCESS);

  const { body, status } = await liveSession.authorize();
  return new NextResponse(body, { status });
}