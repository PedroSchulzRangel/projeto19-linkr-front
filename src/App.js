import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Content>
        <BrowserRouter>
          <Routes>
          </Routes>
        </BrowserRouter>
      </Content>
    </AuthProvider>
  );
}
const Content = styled.div`

`