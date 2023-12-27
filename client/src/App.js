import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import Home from "./pages/Home";
import Write from "./components/diary/Write";
import Header from "./components/layout/Header";
import HeaderMobile from "./components/layout/Header_m";
import Aside from "./components/layout/Aside";
import VocaList from "./components/voca/VocaList";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

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
        <>
            <Main>
                <Routes>
                    {/* Home 페이지 */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Home />
                            </>
                        }
                    />

                    {/* Write 페이지 */}
                    <Route
                        path="/write"
                        element={
                            <>
                                <Header />
                                <Write isMobile={isMobile} />
                            </>
                        }
                    />

                    {/* VocaList 페이지 */}
                    <Route
                        path="/voca"
                        element={
                            <>
                                <Header />
                                <VocaList isMobile={isMobile} />
                            </>
                        }
                    />

                    {/* 다른 페이지에는 Header가 나오도록 설정 */}
                    <Route path="/*" element={isMobile ? <HeaderMobile /> : <Header />} />
                </Routes>
            </Main>
            <Footer />
        </>
    );
};

export default App;
