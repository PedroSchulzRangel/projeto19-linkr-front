import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< Updated upstream
import SigIn from "./SigInPage.js/SigInPage";

=======
import SignUpPage from "./SignUpPage/SignUpPage";
import TimeLine from "./TimelinePage/TimeLinePage";
import SigIn from "./SigInPage/SigInPage"
>>>>>>> Stashed changes
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
    
        <BrowserRouter>
          <Routes> 
          <Route path="/" element={<SigIn/>}/>
          </Routes>
        </BrowserRouter>
      
    </AuthProvider>
  );
}
const Content = styled.div`

`