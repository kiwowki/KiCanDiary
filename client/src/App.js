import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main.jsx";
import Home from "./pages/Home";
import Write from "./components/diary/Write";
import Join from "./components/user/Join";
import Login from "./components/user/Login";
import Mypage from "./components/user/Mypage";
const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/write" element={<Write />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/mypage" element={<Mypage />} />
                </Routes>
            </Main>
            {/* <Footer /> */}
        </BrowserRouter>
    );
};

export default App;
