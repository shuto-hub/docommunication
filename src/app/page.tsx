import TopButton from "@/components/TopButton";
import { randomUUID } from "crypto";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const roomID = randomUUID();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="relative md:w-[500px] md:h-[500px] w-[350px] h-[350px]">
        <Image
          className="animate-fade-in-top"
          src="/icon/logo.png"
          alt="doccomunication"
          fill
        />
      </h1>
      <TopButton roomID={roomID} />
    </main>
  );
}
