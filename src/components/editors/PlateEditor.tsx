"use client";

import React from "react";
import {
  usePlateEditor,
  Plate,
  PlateContent,
} from "@udecode/plate-common/react"; // this path is recommended in docs

export default function PlateEditor() {
  const editor = usePlateEditor();

  return (
    <div className="editor-wrapper">
      <div className="mb-3 text-sm text-gray-600">Plate (basic)</div>

      <div className="border rounded p-2 min-h-40">
        <Plate editor={editor}>
          <PlateContent placeholder="Type here..." />
        </Plate>
      </div>
    </div>
  );
}
