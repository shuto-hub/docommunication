"use client";
import Image from "next/image";
import { FC } from "react";
import ShareButton from "../ShareButton";
import Link from "next/link";
type HeaderProps = {
  roomID: string;
};
// ヘッダー
const Header: FC<HeaderProps> = ({ roomID }) => {
  return (
    <div className="items-center sticky flex top-0 z-10 w-screen h-10 bg-white border-b border-slate-300">
      <Link href="/">
        <Image
          src="/icon/logo_icon.png"
          alt="doccomunication"
          width="30"
          height="30"
        />
      </Link>
      <p className="ml-auto">ルームID：{roomID}</p>
      <ShareButton
        iconUrl="/icon/sns/x.svg"
        shareUrl={`http://twitter.com/share?url=https://docommunication.xyz/${roomID}&text=ここから編集に参加しましょう！&hashtags=#docommunication`}
        text="Xで共有する"
      />
    </div>
  );
};
export default Header;
