'use client';

import { Plate } from '@udecode/plate/react';
import { createPlateEditor } from '@udecode/plate/react';

// Create editor instance
const editor = createPlateEditor();

const initialValue = [
  {
    type: 'p',
    children: [{ text: 'Hello from Plate editor! Start typing here...' }],
  },
];

export default function PlateEditor() {
  return (
    <div className="border rounded-lg p-4 min-h-[200px]">
      <Plate editor={editor} initialValue={initialValue}>
        <div 
          className="outline-none min-h-[150px]" 
          contentEditable 
          suppressContentEditableWarning
        />
      </Plate>
    </div>
  );
}