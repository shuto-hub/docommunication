import { randomUUID } from "crypto";
import Link from "next/link";

export default function Home() {
  const roomID = randomUUID();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 border-blue-500">
      <h1>Doccomunication</h1>
      <Link href={`/${roomID}`}>ルームを作る</Link>
    </main>
  );
}
