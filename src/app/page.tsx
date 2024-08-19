import HistoryContainer from "@/components/container/HistoryContainer";
import TopButton from "@/components/TopButton";
import { randomUUID } from "crypto";
import Image from "next/image";

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
          sizes="contain"
          priority
        />
      </h1>
      <TopButton roomID={roomID} />
      <HistoryContainer />
    </main>
  );
}
