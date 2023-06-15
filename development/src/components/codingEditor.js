<<<<<<< HEAD
"use client";
import { useState } from "react";
import MonacoEditor from "react-monaco-editor/lib/editor";
import { useTheme } from "next-themes";
import { useTabContext } from "@/composables/tabContext";
=======
'use client';
import MonacoEditor from 'react-monaco-editor/lib/editor';
import { useTheme } from 'next-themes';
import { useTabContext } from '@/composables/tabContext';
>>>>>>> origin/main

function CodingEditor({ id }) {
  const { theme, setTheme } = useTheme();
  const { items } = useTabContext();
  const language = items.filter((e) => e.active)[0].ext;

  const editorDidMount = (editor, monaco) => {
    editor.focus();
  };

  const onChange = (newValue, e) => {
    items.filter((e) => e.active)[0].code = newValue;
  };

  const options = {
    selectOnLineNumbers: true,
    automaticLayout: true,
  };
  return (
    <div>
      <MonacoEditor
        height="95vh"
        language={
          language === ".js"
            ? "javascript"
            : language === ".css"
            ? "css"
            : language === ".html"
            ? "html"
            : "javascript"
        }
<<<<<<< HEAD
        theme={theme == "dark" ? "vs-dark" : "vs-light"}
=======
        theme={theme == 'dark' ? 'vs-dark' : 'vs-light'}
>>>>>>> origin/main
        value={items.filter((e) => e.active)[0].code}
        options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
    </div>
  );
}

export default CodingEditor;
