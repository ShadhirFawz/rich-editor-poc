import React from "react";
import { 
  useEditorRef,
  useEditorSelector 
} from "@udecode/plate-common/react";

const ToolbarButton = ({ format, label }: { format: string; label: string }) => {
  const editor = useEditorRef();
  
  const isActive = useEditorSelector((editor) => {
    if (!editor) return false;
    
    // For marks (bold, italic, etc.)
    if (['bold', 'italic', 'underline', 'strikethrough', 'code'].includes(format)) {
      const marks = editor.getActiveMarks?.();
      return marks?.some((mark: any) => mark?.type === format);
    }
    
    // For block types - simplified check
    try {
      const [node] = editor.nodes({ match: { type: format } });
      return !!node;
    } catch {
      return false;
    }
  }, [format]);

  const handleClick = () => {
    if (!editor) return;
    
    if (['bold', 'italic', 'underline', 'strikethrough', 'code'].includes(format)) {
      editor.toggleMark?.(format);
    } else {
      // For block types, use setNodes
      editor.toggleNode?.(format, 'p');
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`px-2 py-1 rounded-md border ${
        isActive ? "bg-gray-300 border-gray-500" : "bg-white border-gray-300"
      } mr-2`}
    >
      {label}
    </button>
  );
};

export function Toolbar() {
  return (
    <div className="mb-2 flex flex-wrap gap-1">
      <ToolbarButton format="bold" label="Bold" />
      <ToolbarButton format="italic" label="Italic" />
      <ToolbarButton format="underline" label="Underline" />
      <ToolbarButton format="strikethrough" label="Strike" />
      <ToolbarButton format="h1" label="H1" />
      <ToolbarButton format="h2" label="H2" />
      <ToolbarButton format="blockquote" label="Quote" />
      <ToolbarButton format="code_block" label="Code Block" />
      <ToolbarButton format="ul" label="• List" />
      <ToolbarButton format="ol" label="1. List" />
      <ToolbarButton format="hr" label="― HR" />
      <ToolbarButton format="table" label="Table" />
    </div>
  );
}