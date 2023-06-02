import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigIn from "./SigInPage.js/SigInPage";
import SignUpPage from "./SignUpPage/SignUpPage";

import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Content>
        <BrowserRouter>
          <Routes> 
          <Route path="/" element={<SigIn/>}/>
          <Route path="/sign-up" element={<SignUpPage/>}/>
          </Routes>
        </BrowserRouter>
      </Content>
    </AuthProvider>
  );
}
const Content = styled.div`

`