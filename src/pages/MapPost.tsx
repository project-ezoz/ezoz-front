import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { PostWrapper } from "../components/MapPost/PostWrapper";

export const MapPost = () => {
  return (
    <PostSection>
      <PostWrapper />
    </PostSection>
  );
};

const PostSection = styled.div``;
