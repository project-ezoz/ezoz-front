import React, { useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export const InputTextArea = () => {
  const [contents, setContents] = useState<string>("");
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",

    "list",
    "bullet",
    "link",
    "image",
  ];
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
          ["image"],
        ],
      },
    }),
    []
  );
  return (
    <div style={{ height: "650px" }}>
      <ReactQuill
        style={{ height: "600px", color: "#000", backgroundColor: "#fff" }}
        modules={modules}
        formats={formats}
        placeholder="내용을 입력해주세요."
        theme="snow"
        value={contents}
      />
    </div>
  );
};
