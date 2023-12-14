import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import Home from "./pages/Home";
import Write from "./components/diary/Write";
import Join from "./components/user/Join";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/write" element={<Write />} />
                <Route path="/join" element={<Join />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
