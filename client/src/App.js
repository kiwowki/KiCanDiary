import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import Home from "./pages/Home";
import Write from "./components/diary/Write";
import Header from "./components/layout/Header";
import HeaderMobile from "./components/layout/Header_m";
import Aside from "./components/layout/Aside";

const App = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {/* Home 페이지 */}
                <Route path="/" element={<Home> <Aside /> </Home>} />

                <Route path="/write" element={<Write isMobile={isMobile} />} />

                <Route path="/*" element={isMobile ? (<HeaderMobile />) : (<Header />)} />
            </Routes>
        </BrowserRouter >
    );
};

export default App;