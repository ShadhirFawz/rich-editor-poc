'use client';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';

const theme = {
  // Theme styling can be added here
};

function onError(error: Error) {
  console.error(error);
}

const initialConfig = {
  namespace: 'MyEditor',
  theme,
  onError,
  nodes: [],
};

export default function LexicalEditor() {
  return (
    <div className="border rounded-lg p-4 min-h-[200px]">
      <LexicalComposer initialConfig={initialConfig}>
        <div className="relative">
          <RichTextPlugin
            contentEditable={<ContentEditable className="min-h-[150px] outline-none" />}
            placeholder={<div className="absolute top-0 text-gray-400">Enter some text...</div>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
        </div>
      </LexicalComposer>
    </div>
  );
}