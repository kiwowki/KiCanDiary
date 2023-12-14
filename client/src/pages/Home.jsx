import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import user from '../assets/img/user.png'
import { Calendar } from 'react-calendar'
const Home = () => {
    const [value, onChange] = useState(new Date())

    return (
        <div id="wrap">
            <aside id="aside">
                <div className="aside__wrap">
                    <div className="logo mb40rem">
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
                        <ul className="box">
                            <li className="pt10">
                                <Link to={'/'}>Diary</Link>
                                <ul className="aside__diary">
                                    <li>
                                        <Link to={'#'}>list</Link>
                                    </li>
                                    <li className="">
                                        <Link to={'#'}>today</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to={'/'}>Voca list</Link>
                            </li>
                            <li>
                                <Link to={'/'}>My page</Link>
                            </li>
                            <li className="pb10">
                                <Link to={'/'}>Logout</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="user mt100">
                        <div className="user__profile mt60">
                            <img src={user} alt="" />
                        </div>

                        <div className="user__info">
                            <span className="user__name">
                                useruser <em>님</em>
                                <br />
                            </span>
                            <span> 환영합니다.</span>
                        </div>
                    </div>
                </div>
            </aside>
            <main id="main" role="main">
                <div className="main__wrap">
                    <div className="left section__border pt50">
                        <div className="date__info">
                            <div className="date__today ml_70 mb70">
                                <span>December 07, 2023</span>
                            </div>
                            <div className="calendar">
                                <Calendar
                                    onChange={onChange}
                                    value={value}
                                    locale="en-US"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="right section__border"></div>
                </div>
            </main>
        </div>
    )
}

export default Home
