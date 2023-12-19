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
                        <ul className="box1">
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
                    <div className="right section__border pt50">
                        <div className="main__diary">
                            <div className="diary__list">
                                <div className="list__title">
                                    <p className="">Recent Diary</p>
                                </div>
                                <div className="diary__tab">
                                    <div className="tab__box box2">
                                        <h4 className="mb20">
                                            December 04, 2023
                                        </h4>
                                        <p>
                                            Welcome to this site. It’s Diary
                                            with English for you and we. Our
                                            team consists of 3 people who are
                                            serious about diary writing. If
                                            you're rooting for us, please use it
                                            a lot. Thanks you.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="voca__list"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
