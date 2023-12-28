import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import userImg from '../../assets/img/user.png'

import { useSelector } from 'react-redux'
import firebase from '../../firebase.js'

const Header = () => {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    const LogoutHandler = () => {
        firebase.auth().signOut();
        navigate("/");
    }
    return (
        <header id="header">
            <div className="header__wrap">
                <nav className="nav">
                    <ul className="nav__list">
                        <li>
                            <Link to={'/'} data-first-letter="H">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/diary'}
                                data-first-letter="D"
                                className="active"
                            >
                                Diary
                            </Link>
                        </li>
                        <li>
                            <Link to={'/voca'} data-first-letter="V">VOCA list</Link>
                        </li>
                        <li>
                            <Link to={'/mypage'} data-first-letter="M">My page</Link>
                        </li>
                    </ul>
                    <div className="nav__session">
                        <div className="right">

                            {user.accessToken === "" ? (
                                <ul>
                                    <li>
                                        <Link to="/login">로그인</Link>
                                    </li>
                                    <li>
                                        <Link to="/Join">회원가입</Link>
                                    </li>
                                </ul>
                            ) : (
                                <ul>
                                    <li>
                                        <Link to="/mypage">{user.displayName}</Link>님 방가워요! 🥳
                                    </li>
                                    <li>
                                        <Link onClick={(() => LogoutHandler())}>로그아웃</Link>
                                    </li>
                                </ul>
                            )}

                        </div>
                        <div className="user__info box1">
                            <Link to={'/mypage'}>
                                <em className="line1">UserName UserName</em>
                            </Link>
                            's DIARY
                            <Link to={'/mypage'}>
                                <img src={userImg} alt='마이페이지 이미지' />
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header