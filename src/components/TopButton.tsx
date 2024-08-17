"use client";
import Link from "next/link";
import { FC } from "react";
type TopButtonProps = {
  roomID: string;
};
const TopButton: FC<TopButtonProps> = ({ roomID }) => {
  const hand = () => console.log("");
  return (
    <button
      onClick={hand}
      className="md:static fixed bottom-0 inline-flex items-center justify-center p-0.5 mb-2 md:me-2 overflow-hidden text-sm font-medium text-white md:text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
    >
      <Link
        className="md:w-40 w-screen px-5 py-2.5 ease-in duration-75 md:bg-white rounded-md md:group-hover:bg-opacity-0"
        href={`/${roomID}`}
      >
        ルームを作る
      </Link>
    </button>
  );
};
export default TopButton;
