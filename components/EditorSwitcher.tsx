'use client';

interface EditorSwitcherProps {
  activeEditor: string;
  setActiveEditor: (editor: string) => void;
}

const editors = [
  { id: 'tiptap', name: 'TipTap' },
  { id: 'lexical', name: 'Lexical' },
  { id: 'plate', name: 'Plate' },
  { id: 'quill', name: 'Quill' },
];

export default function EditorSwitcher({ activeEditor, setActiveEditor }: EditorSwitcherProps) {
  return (
    <div className="flex space-x-2 p-1 bg-gray-100 rounded-lg">
      {editors.map((editor) => (
        <button
          key={editor.id}
          onClick={() => setActiveEditor(editor.id)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            activeEditor === editor.id
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {editor.name}
        </button>
      ))}
    </div>
  );
}