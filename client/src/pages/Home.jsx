import React, { useState } from 'react'
import { Calendar } from 'react-calendar'
import Aside from '../components/layout/Aside'
const Home = () => {
    const [value, onChange] = useState(new Date())

    return (
        <div id="wrap">
            <Aside />
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
