'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function TiptapEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello from TipTap editor!</p>',
  });

  return (
    <div className="border rounded-lg p-4 min-h-[200px]">
      <EditorContent editor={editor} />
    </div>
  );
}