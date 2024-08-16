import { randomUUID } from "crypto";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const roomID = randomUUID();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>
        <Image
          className="animate-fade-in-top"
          src="/icon/logo.png"
          alt="doccomunication"
          width="300"
          height="300"
        />
      </h1>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 text-[#393d45] hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
        <Link
          className="relative px-5 py-2.5 ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
          href={`/${roomID}`}
        >
          ルームを作る
        </Link>
      </button>
    </main>
  );
}
