import React from 'react'

import { Link } from 'react-router-dom'
import user from '../../assets/img/user_img.png'

const Header_m = () => {
    return (
        <header id="header">
            <div className="header__wrap">
                <nav className="nav">
                    <ul className="nav__list">
                        <li>
                            <Link to={'/'}>모바일모드</Link>
                        </li>
                        <li>
                            <Link to={'/diary'} className="active">
                                Diary
                            </Link>
                        </li>
                        <li>
                            <Link to={'/voca'}>VOCA list</Link>
                        </li>
                        <li>
                            <Link to={'/mypage'}>My page</Link>
                        </li>
                    </ul>
                    <div className="nav__session">
                        <div className="right">
                            <Link to={'/logout'}>Logout</Link>
                        </div>
                        <div className="user__info box1">
                            <Link to={'/mypage'}>
                                <em className="line1">UserName UserName</em>
                            </Link>
                            's DIARY
                            <Link to={'/mypage'}>
                                <img src={user} alt="마이페이지 이미지" />
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header_m
