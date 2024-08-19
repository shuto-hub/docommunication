"use client";
import { useHistoryStore } from "@/store/historyStore";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
const HistoryContainer: FC = () => {
  const { histories } = useHistoryStore();
  const [renderHistories, setRenderHistories] = useState<string[]>();

  useEffect(() => {
    setRenderHistories(histories);
  }, [histories]);
  return (
    <>
      {renderHistories?.length && (
        <div className="fixed overflow-auto md:top-3 md:right-3 bottom-20 max-h-40 md:max-h-64 p-4 border-[#00acb5] border-2 rounded animate-fade-in-top">
          <p>最近見たルーム</p>
          <ul>
            {renderHistories.map((history, index) => {
              return (
                <li key={index}>
                  <Link target="_blank" href={`/${history}`}>
                    {history}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
export default HistoryContainer;
