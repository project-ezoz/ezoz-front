import React, { useState, ChangeEvent, useEffect } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/store";
import { InputTextArea } from "./InputTextArea";
import { InputText } from "./InputText";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { getAddressFromLatLng } from "../../hooks/geocode";
import axios from "axios";
import { GET_S3_URL } from "../../api";
import { MarkerPostType } from "../../types";

interface PostProps {
  postMarker: (newData: MarkerPostType) => void;
}
export const PostWrapper = ({ postMarker }: PostProps) => {
  const { lat, lng } = useAppSelector((state) => state.map);
  const [title, setTitle] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imgSrc, setImgSrc] = useState<string[]>([]);
  const [file, setFile] = useState<FileList>();
  const onChooseImg = async (event: ChangeEvent<HTMLInputElement>) => {
    const fileArr = event.target.files as FileList;
    setFile(fileArr);
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

  const handleApply = async () => {
    // const response = await axios.get(GET_S3_URL);
    // const url = response.data;
    // const key = new URL(url).pathname.split("/")[2];
    // if (file) {
    //   Array.from(file).forEach(
    //     async (value) =>
    //       await axios
    //         .put(url, value, {
    //           headers: {
    //             "Content-Type": value.type,
    //           },
    //           withCredentials: false,
    //         })
    //         .then((res) => console.log(res))
    //   );
    // }

    const newData = {
      address: address,
      content: content,
      latitude: lat.toString(),
      longitude: lng.toString(),
      markerImageKeys: [],
      title: title,
    };
    postMarker(newData);
  };

  useEffect(() => {
    const func = async () => {
      const res = await getAddressFromLatLng(lat, lng);
      setAddress(res);
    };
    func();
  }, []);
  return (
    <>
      <InputText
        name="제목"
        placeholder="제목을 입력해주세요."
        title={title}
        setTitle={setTitle}
      />
      <InputText
        name="주소"
        placeholder="주소를 입력해주세요."
        title={address}
        setTitle={setAddress}
      />
      <QuillSection>
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
        <InputTextArea content={content} setContent={setContent} />
      </QuillSection>
      <ButtonSection>
        <Button onClick={handleApply}>등록하기</Button>
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
const Button = styled.div`
  width: 150px;
  font-size: 20px;
  border: 1px solid black;
  cursor: pointer;
`;
