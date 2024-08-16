import { FC } from "react";

type SideMenuProps = {
  roomID: string;
  children?: React.ReactNode;
};

// PC用サイドメニュー
const SideMenu: FC<SideMenuProps> = ({ roomID }) => {
  return (
    <div
      data-testid="sidemenu"
      className={"rounded border-slate-600 bg-slate-300"}
    >
      <a className="block" href={roomID}>
        ルームID：{roomID}
      </a>
      <a
        className="block"
        href="http://twitter.com/share?url=docommunication.com&text=ここから編集に参加しましょう！&hashtags=#docommunication"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Xで共有する
      </a>
      <a
        className="block"
        href="https://social-plugins.line.me/lineit/share?url=docommunication.com"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        LINEで送る
      </a>
    </div>
  );
};
export default SideMenu;
