import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import userImg from '../../assets/img/user.png'
import { useDispatch, useSelector } from 'react-redux'
import LogoutHandler from './handle/logOutHandler'
import navigation from './nav/navLink'
import nav from './nav/navList'

const Header = () => {
    const user = useSelector((state) => state.user)
    const { NavLink, LoginLink } = navigation()
    const { list, login } = nav()
    const dispatch = useDispatch()
    const MemoizedNavLink = React.memo(NavLink)

    const handleMouseOver = () => {
        setShowHeader(true)
    }

    const handleMouseOut = () => {
        setShowHeader(false)
    }

    const [showHeader, setShowHeader] = useState(false)

    return (
        <header
            id="header"
            className={showHeader ? 'visible' : ''}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
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
                                        <MemoizedNavLink
                                            key={index}
                                            to={user.key}
                                        >
                                            {user.value}
                                        </MemoizedNavLink>
                                    ))
                                ) : (
                                    <li>
                                        <Link
                                            onClick={() =>
                                                LogoutHandler(dispatch)
                                            }
                                        >
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
