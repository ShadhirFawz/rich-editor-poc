"use client";

import { useState } from "react";
import EditorSwitcher from "@/components/EditorSwitcher";
import LexicalEditor from "@/components/editors/LexicalEditor";
import PlateEditor from "@/components/editors/PlateEditor";
import QuillEditor from "@/components/editors/QuillEditor";
import dynamic from "next/dynamic";

const editors = ["tiptap", "lexical", "plate", "quill"] as const;
type EditorKey = (typeof editors)[number];

const TiptapEditor = dynamic(() => import("@/components/editors/TipTapEditor"), {
  ssr: false,
});

export default function Home() {
  const [selected, setSelected] = useState<EditorKey>("tiptap");

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Rich Editor POC</h1>

      <EditorSwitcher
        options={editors}
        value={selected}
        onChange={(v) => setSelected(v)}
      />

      <section className="mt-6">
        {selected === "tiptap" && <TiptapEditor />}
        {selected === "lexical" && <LexicalEditor />}
        {selected === "plate" && <PlateEditor />}
        {selected === "quill" && <QuillEditor />}
      </section>
    </div>
  );
}
