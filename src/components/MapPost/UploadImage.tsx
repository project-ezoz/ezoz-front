import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
export const UploadImage = () => {
  const [imgSrc, setImgSrc] = useState<string[]>([]);
  const onChooseImg = async (event: ChangeEvent<HTMLInputElement>) => {
    const fileArr = event.target.files as FileList;
    let fileurls = [] as any[];
    let file;
    let filesLength = fileArr.length > 10 ? 10 : fileArr?.length;
    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i];
      let reader = new FileReader();
      reader.onload = () => {
        fileurls[i] = reader.result;
        setImgSrc([...fileurls]);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDeleteImg = (id: number) => {
    setImgSrc(imgSrc.filter((_, index) => index !== id));
  };
  return (
    <>
      <ImgContainer>
        <InsertWrapper>
          <Label htmlFor="input_img">
            <AddPhotoAlternateIcon fontSize="large" />
          </Label>
          <input
            type="file"
            id="input_img"
            name="img"
            style={{ display: "none" }}
            multiple
            onChange={onChooseImg}
          />
        </InsertWrapper>
      </ImgContainer>
      <PreviewContainer>
        {imgSrc.map((value, id) => (
          <ImgBox>
            <img src={value} width="100" height="100" />
            <RemoveCircleOutlineIcon
              sx={{
                zIndex: "10",
                position: "absolute",
                left: "75px",
                cursor: "pointer",
              }}
              onClick={() => handleDeleteImg(id)}
            />
          </ImgBox>
        ))}
      </PreviewContainer>
    </>
  );
};
const InsertWrapper = styled.div`
  box-shadow: 0px 0px 10px #ddd;
  border-radius: 50%;
  z-index: 1;
  background: #fff;
`;
const Label = styled.label`
  width: 100%;
  height: 100%;
  display: inline-block;
  padding: 25px;
  cursor: pointer;
`;
const ImgContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const PreviewContainer = styled.div`
  border: 2px solid #dee2e6;
  border-radius: 15px;
  height: 150px;
  display: flex;
`;

const ImgBox = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  margin: 10px;
`;
