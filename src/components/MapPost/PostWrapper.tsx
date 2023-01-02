import React from "react";
import { InputArea } from "./InputArea";
import { InputTextArea } from "./InputTextArea";

export const PostWrapper = () => {
  return (
    <>
      <InputArea name="제목" placeholder="제목을 입력해주세요." />
      <InputArea name="위치" placeholder="위치를 등록해주세요." />
      <InputTextArea />
    </>
  );
};
