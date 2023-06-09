
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import TimeLine from "./TimelinePage/TimeLinePage";
import UserPage from "./UserPage/UserPage";

import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (

    <AuthProvider>
        <BrowserRouter>
          <Routes> 
          <Route path="/" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUpPage/>}/>
          <Route path="/timeline" element={<TimeLine/>} />
          <Route path="/user/:id" element={<UserPage/>} />         
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}
