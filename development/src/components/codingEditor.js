"use client";
import MonacoEditor from "react-monaco-editor/lib/editor";
import { useTheme } from "next-themes";
import { useTabContext } from "@/composables/tabContext";
import io from "socket.io-client";
import { useEffect, useState } from "react";

function CodingEditor({ peerid }) {
  const { theme, setTheme } = useTheme();
  const { items } = useTabContext();
  const [codes, setCodes] = useState("");
  const language = items.filter((e) => e.active)[0].ext;
  const socket = io("http://localhost:3001");

  useEffect(() => {
    // socket.emit("join-room", peerid);
    // socket.on("text-update", (data) => {
    //   items.filter((e) => e.active)[0].code = data;
    //   setCodes(data);
    // });

    return () => {
     // socket.off("text-update");
    };
  }, [codes]);

  const editorDidMount = (editor, monaco) => {
    editor.focus();
  };

  const onChange = (newValue, e) => {
    items.filter((e) => e.active)[0].code = newValue;
    socket.emit("text-update", { peerid, newValue });
    setCodes(newValue);
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
        theme={theme == "dark" ? "vs-dark" : "vs-light"}
        value={items.filter((e) => e.active)[0].code}
        options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
    </div>
  );
}

export default CodingEditor;