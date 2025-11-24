"use client";

import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

const initialConfig = {
  namespace: "LexicalEditor",
  nodes: [],
  onError(error: Error) {
    // use your error handler in production
    console.error(error);
  },
};

export default function LexicalEditor() {
  return (
    <div className="editor-wrapper">
      <LexicalComposer initialConfig={initialConfig}>
        <div className="mb-3 text-sm text-gray-600">Lexical (basic)</div>

        <div className="border rounded p-2 min-h-40">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="editor-content min-h-[120px] outline-none" />
            }
            placeholder={<div className="text-gray-400">Type here...</div>}
            ErrorBoundary={({ children }: { children?: React.ReactNode }) => <>{children}</>}
          />
          <HistoryPlugin />
          <OnChangePlugin onChange={() => {
            // serialize / debug here if needed
            // e.g. editorState.read(() => { ... })
          }} />
        </div>
      </LexicalComposer>
    </div>
  );
}
