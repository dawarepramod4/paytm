import React from "react";
import "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/signup" element={<SignUp />} />
                {/* <Route path="/send" element={<Send />} /> */}
                {/* <Route path="/dashboard" element={<DashBoard />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
