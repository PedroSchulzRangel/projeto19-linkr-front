import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigIn from "./SigInPage/SigInPage";
import TimeLine from "./TimelinePage/TimeLinePage";

import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (

    <AuthProvider>
      <Content>
        <BrowserRouter>
          <Routes> 
          <Route path="/" element={<SigIn/>}/>
          <Route path="/timeline" element={<TimeLine />} />
          </Routes>
        </BrowserRouter>
      </Content>
    </AuthProvider>
  );
}
const Content = styled.div`

`