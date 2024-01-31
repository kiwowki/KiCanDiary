import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { loginUser, clearUser } from './reducer/userSlice'
import firebase from './firebase.js'

// import "./assets/scss/style.scss";
// import Header from "./components/layout/Header";
// import HeaderMobile from "./components/layout/Header_m";

// import Main from "./components/layout/Main.jsx";

// import VocaList from "./components/voca/VocaList";
// import Join from "./components/user/Join";
// import Login from "./components/user/Login";
// import Mypage from "./components/user/Mypage";
// import Footer from "./components/layout/Footer";

// import DiaryList from "./components/diary/list/DiaryList.jsx";

// import DiaryView from "./components/diary/view/DiaryView.jsx";
// import Write from "./components/diary/write/Write.jsx";
// import MainHome from "./components/main/MainHome.jsx"

import './assets/scss/style.scss'
import Header from './components/layout/Header'
import HeaderMobile from './components/layout/Header_m'
import Main from './components/layout/Main.jsx'
import VocaList from './components/voca/VocaList'
import Join from './components/user/joinpage/Join'
import Login from './components/user/Login'
import Mypage from './components/user/Mypage'
import Footer from './components/layout/Footer'
import DiaryList from './components/diary/list/DiaryList.jsx'
import DiaryView from './components/diary/view/DiaryView.jsx'
import Write from './components/diary/write/Write.jsx'
import MainHome from './components/main/MainHome.jsx'
import DiaryUpdate from './components/diary/update/DiaryUpdate.jsx'

const App = () => {
    const [isMobile, setIsMobile] = useState(false)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const handleHeaderResize = () => {
            setIsMobile(window.innerWidth <= 480)
        }
        
        handleHeaderResize()

        window.addEventListener('resize', handleHeaderResize)
        
        return () => {
            window.removeEventListener('resize', handleHeaderResize)
        }
    }, [])

    useEffect(() => {
        const unsubscribe = firebase
            .auth()
            .onAuthStateChanged(async (userInfo) => {
                console.log(userInfo)
                if (userInfo !== null) {
                    await dispatch(loginUser(userInfo.multiFactor.user))
                } else {
                    dispatch(clearUser())
                }
            })
        return () => {
            unsubscribe()
        }
    }, [dispatch])

    return (
        <BrowserRouter>
            <Main>
                <Routes>
                    {/* Home 페이지 */}
                    <Route path="/" element={<><MainHome /></>} />

                    {/* Write 페이지 */}
                    <Route path="/diary/write/:date" element={<> {isMobile ? <HeaderMobile /> : <Header />} <Write /> </>} />

                    <Route path="/diary" element={<> {isMobile ? <HeaderMobile /> : <Header />} <DiaryList /></>} />

                    <Route path="/diary/view/:postNum" element={<> {isMobile ? <HeaderMobile /> : <Header />} <DiaryView /> </>} />
                    <Route path="/diary/update/:postNum" element={<>{isMobile ? <HeaderMobile /> : <Header />} <DiaryUpdate /></>} />
                    <Route path="/voca" element={<>{isMobile ? <HeaderMobile /> : <Header />} <VocaList /> </>} />
                    <Route path="/join" element={<>{isMobile ? <HeaderMobile /> : <Header />} <Join /> </>} />
                    <Route path="/login" element={<>{isMobile ? <HeaderMobile /> : <Header />}<Login /></>} />
                    <Route path="/mypage" element={<>{isMobile ? <HeaderMobile /> : <Header />}<Mypage /> </>} />
                    {/* 다른 페이지에는 Header가 나오도록 설정 */}
                    <Route path="/*" element={isMobile ? <HeaderMobile /> : <Header />} />
                </Routes>
            </Main>
            <Footer />
        </BrowserRouter>
    )
}

export default App
