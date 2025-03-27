"use client";

import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

// Minimal CSS for read-only
const contentEditableStyles = {
  // If you want to style the output differently, do it here
  minHeight: "0.5em",
};

type LexicalRendererProps = {
  content: any; // your Lexical JSON, e.g. therapist.biography
};

export default function LexicalRenderer({ content }: LexicalRendererProps) {
  // We'll pass the entire JSON as the "editorState" in initialConfig.
  // Mark the editor as non-editable (read-only).
  const initialConfig = {
    namespace: "MyEditor",
    editable: false,
    editorState: JSON.stringify(content),
    theme: {
      // Optionally define a theme for styling text, links, etc.
      // theme can be left empty if you prefer your own MUI styling.
    },
    onError: (error: Error) => {
      console.error("Lexical Editor Error:", error);
    },
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      {/* RichTextPlugin is used so Lexical knows how to render block/inline nodes, links, etc. */}
      <RichTextPlugin
        contentEditable={<ContentEditable style={contentEditableStyles} />}
        placeholder={<div />}
      />
      {/* Some optional Lexical plugins for read-only: */}
      <HistoryPlugin />
      <OnChangePlugin
        onChange={() => {
          /* read-only, do nothing */
        }}
      />
    </LexicalComposer>
  );
}
