import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { ApplyContainer } from "../containers/ApplyContainer";

export const MapPost = () => {
  return (
    <>
      <Helmet>
        <title>EZOZ | 등록</title>
      </Helmet>
      <PostSection>
        <ApplyContainer />
      </PostSection>
    </>
  );
};

const PostSection = styled.div``;
