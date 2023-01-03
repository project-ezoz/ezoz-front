import React from "react";
import styled from "styled-components";
import { ApplyButton } from "./ApplyButton";
import { DeleteButton } from "./DeleteButton";
import { InputArea } from "./InputArea";
import { InputTextArea } from "./InputTextArea";

export const PostWrapper = () => {
  return (
    <>
      <InputArea name="제목" placeholder="제목을 입력해주세요." />
      <InputArea name="위치" placeholder="위치를 등록해주세요." />
      <QuillSection>
        <InputTextArea />
      </QuillSection>
      <ButtonSection>
        <DeleteButton />
        <ApplyButton />
      </ButtonSection>
    </>
  );
};

const QuillSection = styled.div`
  margin: 10px;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
`;
