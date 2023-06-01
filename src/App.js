import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigIn from "./SigInPage/SigInPage";
import TimeLine from "./TimelinePage/TimeLinePage";

export default function App() {
  return (
    <Content>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigIn />} />
          <Route path="/timeline" element={<TimeLine />} />
        </Routes>
      </BrowserRouter>
    </Content>
  );
}
const Content = styled.div`

`