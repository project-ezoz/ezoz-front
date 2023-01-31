import { TextField } from "@mui/material";
import React from "react";

interface Props {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}
export const InputTextArea = ({ content, setContent }: Props) => {
  const handleContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };
  return (
    <TextField
      sx={{ width: "400px" }}
      multiline
      rows={10}
      onChange={handleContent}
    />
  );
};
