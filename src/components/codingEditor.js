"use client";
import { useState } from "react";
import MonacoEditor from "react-monaco-editor/lib/editor";

function CodingEditor({}) {
  const [code, setCode] = useState(
    "// Welcome to P2P Coder, a Community Prepared Platform..."
  );

  const editorDidMount = (editor, monaco) => {
    editor.focus();
  };

  const onChange = (newValue, e) => {};

  const options = {
    selectOnLineNumbers: true,
  };
  return (
    <div>
      <MonacoEditor
        width="600"
        height="800"
        language="javascript"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
    </div>
  );
}

export default CodingEditor;
