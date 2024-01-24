import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import user from '../../assets/img/user.png'
import { useDispatch, useSelector } from 'react-redux'
import LogoutHandler from './handle/logOutHandler'
import navigation from './nav/navLink'
import nav from './nav/navList'

const Aside = () => {
    const displayName = useSelector((state) => state.user.displayName)
    const { NavLink } = navigation()
    const { list } = nav()
    const dispatch = useDispatch()

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
                        {list.map((li, index) => (
                            <NavLink key={index} to={li.key} data={li.data}>
                                {li.value}
                            </NavLink>
                        ))}
                        {displayName ? (
                            <li className="">
                                <Link onClick={() => LogoutHandler(dispatch)}>
                                    Logout
                                </Link>
                            </li>
                        ) : (
                            <li className="">
                                <Link to={'/login'}>LogIn</Link>
                            </li>
                        )}
                    </ul>
                </nav>
                <div className="user">
                    <div>
                        {displayName ? (
                            <>
                                <div className="user__profile">
                                    <img src={user} alt="" />
                                </div>
                                <div className="user__info">
                                    <span className="user__name">
                                        {displayName}
                                        <em>님</em>
                                        <br />
                                    </span>
                                    <span> 환영합니다.</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="user__profile">
                                    <img src={user} alt="" />
                                </div>

                                <div className="user__info">
                                    <span>로그인 해주세요</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="bottomSticker">
                    <div className="small"></div>
                    <div className="big"></div>
                </div>
            </div>
        </aside>
    )
}

export default Aside
