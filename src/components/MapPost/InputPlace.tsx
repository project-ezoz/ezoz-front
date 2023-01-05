import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  placeholder: string;
  value: string;
}

export const InputPlace = ({ name, placeholder, value }: Props) => {
  return (
    <InputSection>
      <Text htmlFor="input">{name}</Text>
      <Input
        id="input"
        placeholder={placeholder}
        type="text"
        value={value && value}
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