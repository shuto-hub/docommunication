"use client";
import SideMenu from "@/components/SideMenu";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
const Editor = dynamic(() => import("@/components/Editor"), {
  ssr: false,
  loading: () => (
    <div
      className="flex md:w-[80%] w-full h-full justify-center items-center"
      aria-label="読み込み中"
    >
      <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
      <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full mx-4"></div>
      <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
    </div>
  ),
});
export default function Home() {
  // パスパラメータから値を取得
  const { id } = useParams();
  // FIXME: 簡易エラー表示
  if (typeof id !== "string") {
    throw new Error("Invalid ID");
  }
  return (
    <div className="p-2 h-screen flex">
      <Editor roomID={id} />
      <SideMenu roomID={id} />
    </div>
  );
}
