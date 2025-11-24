"use client";
import React from "react";
import clsx from "clsx";

type Props<T extends string> = {
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
};

export default function EditorSwitcher<T extends string>({
  options,
  value,
  onChange,
}: Props<T>) {
  return (
    <div className="flex gap-2">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={clsx(
            "px-3 py-1 rounded-md border",
            value === o
              ? "bg-white border-gray-300 shadow-sm font-semibold"
              : "bg-transparent border-transparent text-gray-600 hover:bg-white hover:border-gray-200"
          )}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
