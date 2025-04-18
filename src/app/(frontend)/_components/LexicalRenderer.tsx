"use client";

import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { GlobalStyles, useTheme } from "@mui/material";

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

  const theme = useTheme();

  return (
    <>
      {/* @TODO add rest of styles needed */}
      <GlobalStyles
        styles={{
          h1: {
            ...theme.typography.h1,
          },
          h2: {
            ...theme.typography.h2,
          },
          h3: {
            ...theme.typography.h3,
          },
          h4: {
            ...theme.typography.h4,
          },
          h5: {
            ...theme.typography.h5,
          },
          h6: {
            ...theme.typography.h6,
          },
          p: {
            ...theme.typography.body1,
            marginBottom: theme.spacing(4),
          },
        }}
      />
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
    </>
  );
}
