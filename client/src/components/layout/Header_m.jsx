import React from 'react'

import { Link } from 'react-router-dom'

const Header_m = () => {
    return (
        <header id="header_m">
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
                        <li>
                            <Link to={'/diarylist'}>Diary</Link>
                        </li>
                        <li>
                            <Link to={'/write'}>
                                Today
                            </Link>
                        </li>
                        <li>
                            <Link to={'/voca'}>VOCA</Link>
                        </li>
                        <li>
                            <Link to={'/mypage'}>My</Link>
                        </li>
                        <li>
                            <Link to={'/logout'} className="active">Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header_m
