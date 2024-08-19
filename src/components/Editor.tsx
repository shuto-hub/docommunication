"use client";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { TRANSFORMERS } from "@lexical/markdown";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { CodeNode, CodeHighlightNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListNode, ListItemNode } from "@lexical/list";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import React from "react";
import { LiveblocksYjsProvider } from "@liveblocks/yjs";
import * as Y from "yjs";
import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  LexicalEditor,
} from "lexical";
import { CollaborationPlugin } from "@lexical/react/LexicalCollaborationPlugin";
import { Provider } from "@lexical/yjs";
import { useRoom, useSelf } from "@liveblocks/react";

function initialEditorState(editor: LexicalEditor): void {
  const root = $getRoot();
  const paragraph = $createParagraphNode();
  const text = $createTextNode();
  paragraph.append(text);
  root.append(paragraph);
}

export const Editor: React.FC = () => {
  const room = useRoom();
  const userInfo = useSelf((me) => me.info);
  // Lexical config
  const initialConfig = {
    namespace: "LiveblocksDemo",
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      AutoLinkNode,
      LinkNode,
    ],
    theme: {},
    onError: (error: unknown) => {
      throw error;
    },
  };

  return (
    <div className={"p-2"}>
      <div
        className={
          "text-lg p-4 leading-loose bg-slate-900 text-white rounded-xl border-2 relative"
        }
      >
        <LexicalComposer initialConfig={initialConfig}>
          <RichTextPlugin
            contentEditable={<ContentEditable />}
            placeholder={
              <p className="text-slate-300 absolute top-4">
                please enter the text
              </p>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <CollaborationPlugin
            id="yjs-plugin"
            providerFactory={(id, yDocMap) => {
              const yDoc = new Y.Doc();
              yDocMap.set(id, yDoc);
              return new LiveblocksYjsProvider(room, yDoc) as Provider;
            }}
            initialEditorState={initialEditorState}
            shouldBootstrap={true}
            cursorColor={userInfo?.color}
            username={userInfo?.name}
          />
        </LexicalComposer>
      </div>
    </div>
  );
};
