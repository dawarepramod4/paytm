import React from "react";
import "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import DashBoard from "./pages/DashBoard";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                {/* <Route path="/send" element={<Send />} /> */}
                <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
