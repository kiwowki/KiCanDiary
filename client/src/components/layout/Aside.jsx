import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import firebase from '../../firebase.js'

import logo from '../../assets/img/logo.png'
import userImage from '../../assets/img/mypage__img.png';

const Aside = () => {
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()

    const LogoutHandler = () => {
        firebase.auth().signOut()
        navigate('/')
    }

    return (
        <aside id="aside">
            <div className="aside__wrap">
                <div className="logo mb30rem">
                    <div className="logo__text mb10">
                        <em>kitch</em> candy
                    </div>
                    <div className="logo__img">
                        <Link to={'/'}>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
                <nav className="nav">
                    <ul className="box1">
                        <li className="pt10">
                            <Link to={'/'}>Diary</Link>
                            <ul className="aside__diary">
                                <li>
                                    <Link to={'/diarylist'}>list</Link>
                                </li>
                                <li className="mb10">
                                    <Link to={'/write/:date'}>today</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={'/voca'}>Voca list</Link>
                        </li>
                        <li>
                            <Link to={'/mypage'}>My page</Link>
                        </li>
                        {user.accessToken === '' ? (
                            <>
                                <li>
                                    <Link to="/login">login</Link>
                                </li>
                                <li>
                                    <Link to="/Join">join</Link>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link onClick={() => LogoutHandler()}>
                                    logout
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
                {user.accessToken === '' ? (
                    ''
                ) : (
                    <div className="user">
                        <div className="user__profile mt60">
                            <img src={userImage} alt="" />
                        </div>

                        <div className="user__info">
                            <span className="user__name">
                                useruser <em>님</em>
                                <br />
                            </span>
                            <span> 환영합니다.</span>
                        </div>
                    </div>
                )}
            </div>
        </aside>
    )
}

export default Aside
