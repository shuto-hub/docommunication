"use client";
import Header from "@/components/layout/Header";
import { useHistoryStore } from "@/store/historyStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import {
  ClientSideSuspense,
  createRoomContext,
  useUser,
} from "@liveblocks/react";
import { Editor } from "@/components/Editor";
import { createClient } from "@liveblocks/client";

const Detail = () => {
  const { addHistory } = useHistoryStore();
  // パスパラメータから値を取得
  const { id } = useParams();
  // FIXME: 簡易エラー表示
  if (typeof id !== "string") {
    throw new Error("Invalid ID");
  }
  const client = createClient({
    authEndpoint: "/api/auth",
  });

  const { RoomProvider } = createRoomContext(client);
  // 履歴にルームidを追加
  useEffect(() => {
    addHistory(id);
  }, [addHistory, id]);
  return (
    <>
      <Header roomID={id} />
      <div className="p-2">
        <RoomProvider id={id} initialPresence={{}}>
          <ClientSideSuspense
            fallback={
              <div
                className="bg-slate-900 rounded-xl m-2 h-[72px] flex justify-center border-2 items-center"
                aria-label="読み込み中"
              >
                <div className="animate-ping h-2 w-2 bg-white rounded-full"></div>
                <div className="animate-ping h-2 w-2 bg-white rounded-full mx-4"></div>
                <div className="animate-ping h-2 w-2 bg-white rounded-full"></div>
              </div>
            }
          >
            <Editor />
          </ClientSideSuspense>
        </RoomProvider>
      </div>
    </>
  );
};
export default Detail;
