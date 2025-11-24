export const EDITORS = ["tiptap", "lexical", "plate", "quill"] as const;
export type EditorKey = (typeof EDITORS)[number];
