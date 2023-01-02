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
    "size",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ size: ["small", false, "large", "huge"] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["image"],
        ],
      },
    }),
    []
  );
  return (
    <>
      <ReactQuill
        style={{ height: "600px", color: "#fff", backgroundColor: "#2A2F3B" }}
        modules={modules}
        formats={formats}
        placeholder="내용을 입력해주세요."
        theme="snow"
        value={contents}
      />
    </>
  );
};
