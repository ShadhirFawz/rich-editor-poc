"use client";

import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $isHorizontalRuleNode, HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";

import {
  HeadingNode,
  QuoteNode,
} from "@lexical/rich-text";
import {
  ListNode,
  ListItemNode,
} from "@lexical/list";
import {
  LinkNode,
  AutoLinkNode,
} from "@lexical/link";
import { CodeNode } from "@lexical/code";

import lexicalTheme from "@/lib/lexicaltheme";
import ToolbarPlugin from "./plugins/ToolbarPlugin";

const initialConfig = {
  namespace: "EnhancedLexicalEditor",
  theme: lexicalTheme,
  nodes: [
    HeadingNode,
    QuoteNode,
    ListNode,
    ListItemNode,
    LinkNode,
    AutoLinkNode,
    CodeNode,
    HorizontalRuleNode,
  ],
  onError(error: Error) {
    console.error(error);
  },
};

export default function LexicalEditor() {
  return (
    <div className="editor-wrapper">
      <LexicalComposer initialConfig={initialConfig}>
        <div className="mb-2 text-sm font-semibold text-gray-700">
          Lexical Editor (Enhanced)
        </div>

        <ToolbarPlugin />

        <div className="border rounded p-3 min-h-[150px]">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="outline-none min-h-[120px]" />
            }
            placeholder={<span className="text-gray-400">Type something...</span>}
            ErrorBoundary={({ children }) => <>{children}</>}
          />
          <HistoryPlugin />
          <ListPlugin />
          <LinkPlugin />
          <MarkdownShortcutPlugin />
          <OnChangePlugin
            onChange={() => {
            }}
          />
        </div>
      </LexicalComposer>
    </div>
  );
}
