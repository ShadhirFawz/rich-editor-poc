"use client";
import React, { JSX, useCallback } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import {
  Bold,
  Italic,
  Underline,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
} from "lucide-react";

export default function TiptapEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder: "Start writing your content...",
      }),
    ],
    content: "<p>Hello Tiptap 👋</p>",
    immediatelyRender: false,
  });

  const toggle = useCallback(
    (cmd: "toggleBold" | "toggleItalic" | "toggleUnderline" | "toggleBulletList" | "toggleOrderedList") => editor?.chain().focus()[cmd]().run(),
    [editor]
  );

  if (!editor) return null;

  const Button = ({
    icon,
    active,
    onClick,
  }: {
    icon: JSX.Element;
    active: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`p-2 rounded-md border transition hover:bg-gray-200 ${
        active ? "bg-gray-300 border-gray-400" : "bg-white border-gray-300"
      }`}
    >
      {icon}
    </button>
  );

  return (
    <div className="editor-wrapper">
      <div className="flex gap-2 mb-2 bg-white border p-2 rounded-lg shadow-sm">

        {/* Bold */}
        <Button
          icon={<Bold size={18} />}
          active={editor.isActive("bold")}
          onClick={() => toggle("toggleBold")}
        />

        {/* Italic */}
        <Button
          icon={<Italic size={18} />}
          active={editor.isActive("italic")}
          onClick={() => toggle("toggleItalic")}
        />

        {/* Underline */}
        <Button
          icon={<Underline size={18} />}
          active={editor.isActive("underline")}
          onClick={() => toggle("toggleUnderline")}
        />

        <div className="w-px bg-gray-300 mx-1"></div>

        {/* Headings */}
        <Button
          icon={<Heading1 size={18} />}
          active={editor.isActive("heading", { level: 1 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        />
        <Button
          icon={<Heading2 size={18} />}
          active={editor.isActive("heading", { level: 2 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        />
        <Button
          icon={<Heading3 size={18} />}
          active={editor.isActive("heading", { level: 3 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        />

        <div className="w-px bg-gray-300 mx-1"></div>

        {/* Lists */}
        <Button
          icon={<List size={18} />}
          active={editor.isActive("bulletList")}
          onClick={() => toggle("toggleBulletList")}
        />
        <Button
          icon={<ListOrdered size={18} />}
          active={editor.isActive("orderedList")}
          onClick={() => toggle("toggleOrderedList")}
        />
      </div>

      <div
        className="
          bg-white border rounded-lg shadow-sm
          p-3 min-h-40
        "
      >
        <EditorContent
          editor={editor}
          className="outline-none min-h-[120px] prose max-w-none"
        />
      </div>
    </div>
  );
}
