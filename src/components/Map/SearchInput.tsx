import React, { useState } from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
export const SearchInput = () => {
  const [text, setText] = useState<string>("");
  const [searched, setSearched] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearched((prev) => [...prev, text]);
      setText("");
    }
  };
  return (
    <InputWrapper>
      <InputWord
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={text}
      />
      <TagWrapper>
        {searched.map((item, idx) => (
          <TagItem>
            <SearchTag key={idx}>{item}</SearchTag>
            <ClearIcon sx={{ color: "black" }} />
          </TagItem>
        ))}
      </TagWrapper>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: column;
`;
const InputWord = styled.input`
  font-size: 20px;
  font-weight: 600;
  color: #a0a0a0;
  background-color: #333333;
  border-radius: 5px;
  width: 500px;
  padding: 10px;
`;

const TagWrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;
const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a0a0a0;
  background-color: #333333;
  margin: 10px;
`;
const SearchTag = styled.div`
  color: #fff;
  font-size: 20px;
  padding: 5px;
  margin-right: 5px;
`;
