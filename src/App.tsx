import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { HeaderWrapper } from "./components/Header/HeaderWrapper";
import { Router } from "./Router";

function App() {
  return (
    <AppLayout>
      <Helmet />
      <BrowserRouter>
        <HeaderWrapper />
        <Router />
      </BrowserRouter>
    </AppLayout>
  );
}

export default App;

const AppLayout = styled.div`
  max-width: 720px;
  min-height: 100vh;
  background-color: #fff;
  margin: auto;
`;
