import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { useDispatch } from 'react-redux'
import { loginUser, clearUser } from './reducer/userSlice'
import firebase from './firebase.js'

import "./assets/scss/style.scss";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main.jsx";
import Home from "./pages/Home";
import Write from "./components/diary/Write";

import HeaderMobile from "./components/layout/Header_m";
import VocaList from "./components/voca/VocaList";
import Footer from "./components/layout/Footer";

import Join from "./components/user/Join";
import Login from "./components/user/Login";
import Mypage from "./components/user/Mypage";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged((userInfo) => {
            console.log("userInfo : " + userInfo)
            if (userInfo !== null) {
                dispatch(loginUser(userInfo.multiFactor.user));
            } else {
                dispatch(clearUser())
            }
        })
    }, [dispatch]);

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

                    <Route
                        path="/join"
                        element={
                            <>
                                <Header />
                                <Join isMobile={isMobile} />
                            </>
                        }
                    />

                    <Route
                        path="/login"
                        element={
                            <>
                                <Header />
                                <Login isMobile={isMobile} />
                            </>
                        }
                    />

                    <Route
                        path="/mypage"
                        element={
                            <>
                                <Header />
                                <Mypage isMobile={isMobile} />
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
