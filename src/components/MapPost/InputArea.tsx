import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  placeholder: string;
}

export const InputArea = ({ name, placeholder }: Props) => {
  return (
    <InputSection>
      <Text htmlFor="input">{name}</Text>
      <Input id="input" placeholder={placeholder} type="text" />
    </InputSection>
  );
};
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Text = styled.label`
  color: #fff;
  font-size: 15px;
  font-weight: 600;
`;

const Input = styled.input`
  background-color: #2a2f3b;
  color: #fff;
  width: 400px;
  font-size: 20px;
`;
