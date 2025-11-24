import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Rich Editor POC",
  description: "POC: Tiptap / Lexical / Plate / Quill",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
