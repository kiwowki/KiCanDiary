import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userImg from '../../assets/img/user.png'
import { useSelector } from 'react-redux'
import firebase from '../../firebase.js'
const Header = () => {
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    const LogoutHandler = () => {
        firebase.auth().signOut()
        navigate('/')
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
                                to={'/diarylist'}
                                data-first-letter="D"
                                className="active"
                            >
                                Diary
                            </Link>
                        </li>
                        <li>
                            <Link to={'/voca'} data-first-letter="V">
                                VOCA list
                            </Link>
                        </li>
                        <li>
                            <Link to={'/mypage'} data-first-letter="M">
                                My page
                            </Link>
                        </li>
                    </ul>
                    <div className="nav__session">
                        <div className="right">
                            {user.accessToken === '' ? (
                                <ul>
                                    <li>
                                        <Link to="/login">login</Link>
                                    </li>
                                    <li>
                                        <Link to="/Join">join</Link>
                                    </li>
                                </ul>
                            ) : (
                                <ul>
                                    <li>
                                        <Link onClick={() => LogoutHandler()}>
                                            logout
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="user__info box1">
                            {user.accessToken === '' ? (
                                <>
                                    <Link to={'/mypage'}>
                                        <em className="line1">
                                            {user.displayName}
                                        </em>
                                    </Link>
                                    's DIARY
                                    <Link to={'/mypage'}>
                                        <img
                                            src={userImg}
                                            alt="마이페이지 이미지"
                                        />
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to={'/mypage'}>
                                        <em className="line1">
                                            {user.displayName}
                                        </em>
                                    </Link>
                                    's DIARY
                                    <Link to={'/mypage'}>
                                        <img
                                            src={userImg}
                                            alt="마이페이지 이미지"
                                        />
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header
