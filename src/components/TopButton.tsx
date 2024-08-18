"use client";
import Link from "next/link";
import { FC, useState } from "react";
type TopButtonProps = {
  roomID: string;
};
const TopButton: FC<TopButtonProps> = ({ roomID }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(true);
  return (
    <button
      onClick={handleClick}
      className="md:static fixed bottom-0 inline-flex items-center justify-center p-0.5 mb-2 md:me-2 overflow-hidden text-sm font-medium text-white md:text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
    >
      <Link
        className="md:w-40 w-screen px-5 py-2.5 ease-in duration-75 md:bg-white rounded-md md:group-hover:bg-opacity-0"
        href={`/${roomID}`}
      >
        {isLoading ? (
          <div className="mx-auto animate-spin h-5 w-5 border-4 border-blue-500 rounded-full border-t-transparent" />
        ) : (
          <p>ルームを作る</p>
        )}
      </Link>
    </button>
  );
};
export default TopButton;
