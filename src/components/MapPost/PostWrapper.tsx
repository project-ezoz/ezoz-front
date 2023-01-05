import React, { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/store";
import { ApplyButton } from "./ApplyButton";
import { DeleteButton } from "./DeleteButton";
import { InputPlace } from "./InputPlace";
import { InputTextArea } from "./InputTextArea";
import { InputTitle } from "./InputTitle";

export const PostWrapper = () => {
  const { lat, lng } = useAppSelector((state) => state.map);
  const [title, setTitle] = useState<string>("");
  return (
    <>
      <InputTitle
        name="제목"
        placeholder="제목을 입력해주세요."
        title={title}
        setTitle={setTitle}
      />
      <InputPlace
        name="위치"
        placeholder="위치를 등록해주세요."
        value={`${lat.toString()} ${lng.toString()}`}
      />
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
