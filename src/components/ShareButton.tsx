"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
type ShareButtonProps = {
  iconUrl: string;
  shareUrl: string;
  text: string;
};
const ShareButton: FC<ShareButtonProps> = ({ iconUrl, shareUrl, text }) => {
  return (
    <button
      data-testid="share-button"
      className="min-w-fit h-8 text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mx-2"
    >
      <Image src={iconUrl} height="15" width="15" alt="" />
      <Link target="_blank" className="ml-2" href={shareUrl}>
        <p>{text}</p>
      </Link>
    </button>
  );
};
export default ShareButton;
