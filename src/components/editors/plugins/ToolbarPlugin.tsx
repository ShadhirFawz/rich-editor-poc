"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  FORMAT_TEXT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
} from "lexical";
import {
  INSERT_UNORDERED_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
} from "@lexical/list";
import { JSX, useEffect, useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Undo,
  Redo,
} from "lucide-react";

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderline, setUnderline] = useState(false);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      () => {
        editor.getEditorState().read(() => {
          const selection = window.getSelection();
          if (!selection || selection.rangeCount === 0) return;

          // DOM-based formatting checks
          const anchor = selection.anchorNode?.parentElement;
          setBold(anchor?.tagName === "B");
          setItalic(anchor?.tagName === "I");
          setUnderline(anchor?.tagName === "U");
        });
        return false;
      },
      COMMAND_PRIORITY_CRITICAL
    );
  }, [editor]);

  const toolbarButton = (
    icon: JSX.Element,
    active: boolean,
    command?: any,
    payload?: any
  ) => (
    <button
      onClick={() => command && editor.dispatchCommand(command, payload)}
      className={`p-2 rounded-md border transition hover:bg-gray-200 ${
        active
          ? "bg-gray-300 border-gray-400"
          : "bg-white border-gray-300"
      }`}
    >
      {icon}
    </button>
  );

  return (
    <div className="flex gap-2 mb-2 bg-white border p-2 rounded-lg shadow-sm">
      {toolbarButton(<Undo size={18} />, false, UNDO_COMMAND)}
      {toolbarButton(<Redo size={18} />, false, REDO_COMMAND)}

      <div className="w-px bg-gray-300 mx-1" />

      {toolbarButton(<Bold size={18} />, isBold, FORMAT_TEXT_COMMAND, "bold")}
      {toolbarButton(
        <Italic size={18} />,
        isItalic,
        FORMAT_TEXT_COMMAND,
        "italic"
      )}
      {toolbarButton(
        <Underline size={18} />,
        isUnderline,
        FORMAT_TEXT_COMMAND,
        "underline"
      )}

      <div className="w-px bg-gray-300 mx-1" />

      {toolbarButton(<List size={18} />, false, INSERT_UNORDERED_LIST_COMMAND)}
      {toolbarButton(<ListOrdered size={18} />, false, INSERT_ORDERED_LIST_COMMAND)}
    </div>
  );
}
