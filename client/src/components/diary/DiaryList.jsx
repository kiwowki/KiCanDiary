import React from 'react'
import { Link } from 'react-router-dom'

const DiaryList = () => {
    return (
        <div id="wrap">
            <div id="diarylist" className="section__border">
                <div className="diarylist__wrap">
                    <div className="diarylist__top">
                        <div className="month">
                            <span class="prev">
                                <Link to="/"></Link>
                            </span>
                            <h2>december</h2>
                            <span class="next">
                                <Link to="/"></Link>
                            </span>
                        </div>
                        <div className="title">Diary</div>
                        <div className="diary__list__pages">
                            <ul>
                                <li class="active">
                                    <Link to="/">1</Link>
                                </li>
                                <li>
                                    <Link to="/">2</Link>
                                </li>
                                <li>
                                    <Link to="/">3</Link>
                                </li>
                                <li>
                                    <Link to="/">4</Link>
                                </li>
                                <li>
                                    <Link to="/">5</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="search__wrap">
                            <span></span>
                            <input type="text" className="diary__search" />
                        </div>
                    </div>
                    <div className="diarylist__bottom">
                        <div className="list__wrap">
                            <div className="list">
                                <div className="weekday">sunday</div>
                                <div className="day__diary">
                                    <h3 className="title">
                                        <Link to="/">
                                            not good but I tried to overcome it
                                        </Link>
                                    </h3>
                                    <p className="content">
                                        <Link to="/">
                                            It was really terrible. But I tried
                                            to overcome it and finally It is
                                            finished! It was really terrible.
                                            But I tried to overcome it and
                                            finally It is finished! It was
                                            really terrible. But I tried to
                                            overcome it and finally It is
                                            finished!
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="list">
                                <div className="weekday">monday</div>
                                <div className="day__diary">
                                    <h3 className="title">
                                        <Link to="/">
                                            not good but I tried to overcome it
                                        </Link>
                                    </h3>
                                    <p className="content">
                                        <Link to="/">
                                            It was really terrible. But I tried
                                            to overcome it and finally It is
                                            finished! But I tried to overcome it
                                            and finally It is finished!
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="list">
                                <div className="weekday">tuesday</div>
                                <div className="day__diary">
                                    <h3 className="title">
                                        <Link to="/">
                                            not good but I tried to overcome it
                                        </Link>
                                    </h3>
                                    <p className="content">
                                        <Link to="/">
                                            It was really terrible. But I tried
                                            to overcome it and finally It is
                                            finished! It was really terrible.
                                            But I tried to overcome it and
                                            finally It is finished! It was
                                            really terrible.
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="list">
                                <div className="weekday">wednesday</div>
                                <div className="day__diary">
                                    <h3 className="title">
                                        <Link to="/">
                                            not good but I tried to overcome it
                                        </Link>
                                    </h3>
                                    <p className="content">
                                        <Link to="/">
                                            It was really terrible. But I tried
                                            to overcome it and finally It is
                                            finished! It was really terrible.
                                            But I tried to overcome it and
                                            finally It is finished! It was
                                            really terrible. But I tried to
                                            overcome it and finally It is
                                            finished!
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="list">
                                <div className="weekday">thursday</div>
                                <div className="day__diary">
                                    <h3 className="title">
                                        <Link to="/">
                                            not good but I tried to overcome it
                                        </Link>
                                    </h3>
                                    <p className="content">
                                        <Link to="/">
                                            It was really terrible. But I tried
                                            to overcome it and finally It is
                                            finished! It was really terrible.
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="list">
                                <div className="weekday">friday</div>
                                <div className="day__diary">
                                    <h3 className="title">
                                        <Link to="/">
                                            not good but I tried to overcome it
                                        </Link>
                                    </h3>
                                    <p className="content">
                                        <Link to="/">
                                            It was really terrible. But I tried
                                            to overcome it and finally It is
                                            finished! It was really terrible.
                                            But I tried to overcome it and
                                            finally It is finished!
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="list">
                                <div className="weekday">saturday</div>
                                <div className="day__diary">
                                    <h3 className="title">
                                        <Link to="/">
                                            not good but I tried to overcome it
                                        </Link>
                                    </h3>
                                    <p className="content">
                                        <Link to="/">
                                            It was really terrible. But I tried
                                            to overcome it and finally It is
                                            finished!
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="voca__list">
                                <h3 className="title">Voca List</h3>
                                <ul>
                                    <li>
                                        <span>overcome</span>
                                        <span>극복하다</span>
                                    </li>
                                    <li>
                                        <span>overcome</span>
                                        <span>극복하다</span>
                                    </li>
                                    <li>
                                        <span>overcome</span>
                                        <span>극복하다</span>
                                    </li>
                                    <li>
                                        <span>overcome</span>
                                        <span>극복하다</span>
                                    </li>
                                    <li>
                                        <span>overcome</span>
                                        <span>극복하다</span>
                                    </li>
                                    <li>
                                        <span>overcome</span>
                                        <span>극복하다</span>
                                    </li>
                                    <li>
                                        <span>overcome</span>
                                        <span>극복하다</span>
                                    </li>
                                    <li>
                                        <span>overcome</span>
                                        <span>극복하다</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiaryList
