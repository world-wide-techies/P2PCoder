'use client';
import { useState } from 'react';
import MonacoEditor from 'react-monaco-editor/lib/editor';
import { useTheme } from 'next-themes';

function CodingEditor({ language }) {
  const { theme, setTheme } = useTheme();
  const [code, setCode] = useState(
    '// Welcome to P2P Coder, a Community Prepared Platform...'
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
        width="91vw"
        height="98vh"
        language={
          language === '.js'
            ? 'javascript'
            : language === '.css'
            ? 'css'
            : language === '.html'
            ? 'html'
            : 'javascript'
        }
        theme={theme == 'dark' ? 'vs-dark' : 'vs-light'}
        value={code}
        options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
    </div>
  );
}

export default CodingEditor;
