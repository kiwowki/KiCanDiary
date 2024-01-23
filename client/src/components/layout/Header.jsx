import React from 'react'
import { Link } from 'react-router-dom'
import userImg from '../../assets/img/user.png'
import { useSelector } from 'react-redux'
import LogoutHandler from './handle/logOutHandler'
import navigation from './nav/navLink'
import nav from './nav/navList'

const Header = () => {
    const user = useSelector((state) => state.user)
    const { NavLink, LoginLink } = navigation()
    const { list, login } = nav()

    return (
        <header id="header">
            <div className="header__wrap">
                <nav className="nav">
                    <ul className="nav__list">
                        {list.map((li, index) => (
                            <NavLink key={index} to={li.key} data={li.data}>
                                {li.value}
                            </NavLink>
                        ))}
                    </ul>
                    <div className="nav__session">
                        <div className="right">
                            <ul>
                                {user.accessToken === '' ? (
                                    login.map((user, index) => (
                                        <LoginLink key={index} to={user.key}>
                                            {user.value}
                                        </LoginLink>
                                    ))
                                ) : (
                                    <li>
                                        <Link onClick={() => LogoutHandler()}>
                                            logout
                                        </Link>
                                    </li>
                                )}
                            </ul>
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
