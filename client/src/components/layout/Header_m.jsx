import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import LogoutHandler from './handle/logOutHandler'
import { useDispatch, useSelector } from 'react-redux'
import navigation from './nav/navLink'
import nav from './nav/navList'

const Header_m = () => {
    const user = useSelector((state) => state.user)
    const { NavLink, LoginLink } = navigation()
    const { list, login } = nav()
    const [showHeader, setShowHeader] = useState(false)
    const dispatch = useDispatch()
    const MemoizedNavLink = React.memo(NavLink)

    const handleMouseOver = () => {
        setShowHeader(true)
    }

    const handleMouseOut = () => {
        setShowHeader(false)
    }

    return (
        <header
            id="header_m"
            className={showHeader ? 'visible' : ''}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <div className="header__wrap">
                <div className="logo">
                    <Link to={'/'}>
                        <p>Kitch</p>
                        <p>Candy</p>
                        <em>Diary</em>
                    </Link>
                </div>
                <nav className="nav">
                    <ul className="nav__list">
                        {list.map((li, index) => (
                            <NavLink key={index} to={li.key} data={li.data}>
                                {li.value}
                            </NavLink>
                        ))}
                        {user.accessToken === '' ? (
                            login.map((user, index) => (
                                <MemoizedNavLink key={index} to={user.key}>
                                    {user.value}
                                </MemoizedNavLink>
                            ))
                        ) : (
                            <li>
                                <Link onClick={() => LogoutHandler(dispatch)}>
                                    logout
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header_m
