"use client";
import { BlockNoteEditor, locales } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { getRandomUser } from "@/utils/randomUser";
import * as Y from "yjs";
import { FC } from "react";
import { IndexeddbPersistence } from "y-indexeddb";

const doc = new Y.Doc();

/**
 * y-websocketを使ったプロバイダを設定
 */
const { WebsocketProvider } = require("y-websocket");
type EditorProps = {
  roomID: string;
};

const Editor: FC<EditorProps> = ({ roomID }) => {
  const provider = new WebsocketProvider(
    `ws://${process.env.NEXT_PUBLIC_WEBSOCKET_HOST_URL}:1234`,
    roomID,
    doc,
    {
      WebSocketPolyfill: WebSocket,
    }
  );

  new IndexeddbPersistence(roomID, doc);

  const editor: BlockNoteEditor | null = useCreateBlockNote({
    dictionary: locales.ja,
    collaboration: {
      provider,
      fragment: doc.getXmlFragment("document-store"),
      user: getRandomUser(),
    },
  });

  return (
    <div className="w-full">
      <BlockNoteView editor={editor} />
    </div>
  );
};
export default Editor;
