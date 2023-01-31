import React from "react";
import styled from "styled-components";
interface Props {
  name: string;
  placeholder: string;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export const InputText = ({ name, placeholder, title, setTitle }: Props) => {
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  return (
    <InputSection>
      <Text htmlFor="input">{name}</Text>
      <Input
        id="input"
        placeholder={placeholder}
        type="text"
        onChange={handleTitle}
        value={title}
      />
    </InputSection>
  );
};
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Text = styled.label`
  color: #000;
  font-size: 15px;
  font-weight: 600;
`;

const Input = styled.input`
  color: #000;
  width: 400px;
  font-size: 20px;
`;
