"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css"; // use the new fork's css

// dynamic import because Quill uses window
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function QuillEditor() {
  const [value, setValue] = useState("<p>Hello from Quill (react-quill-new)</p>");

  return (
    <div className="editor-wrapper">
      <div className="mb-3 text-sm text-gray-600">Quill (react-quill-new)</div>

      <div className="min-h-[200px]">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </div>
  );
}
