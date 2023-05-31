import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigIn from "./SigInPage.js/SigInPage";

export default function App() {
  return (
    <Content>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigIn/>}/>
        </Routes>
      </BrowserRouter>
    </Content>
  );
}
const Content = styled.div`

`