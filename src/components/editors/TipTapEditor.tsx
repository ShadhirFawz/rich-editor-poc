"use client";
import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function TiptapEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello from Tiptap — try bold, italic, headings.</p>",

    // IMPORTANT FIX for Next.js:
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <div className="editor-wrapper">
      <div className="mb-3 flex gap-2">
        <button
          className="px-2 py-1 border rounded"
          onClick={() => editor?.chain().focus().toggleBold().run()}
        >
          Bold
        </button>
        <button
          className="px-2 py-1 border rounded"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
        >
          Italic
        </button>
        <button
          className="px-2 py-1 border rounded"
          onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          H2
        </button>
      </div>

      <EditorContent className="editor-content prose prose-sm max-w-none" editor={editor} />
    </div>
  );
}
