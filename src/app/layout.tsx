import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/css/globals.css";
import "@/css/reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "docommunication",
  description: "気軽にシェアできるリアルタイムドキュメントエディタ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
