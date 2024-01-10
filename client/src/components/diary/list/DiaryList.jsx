import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

import { getFormattedDate } from '../../../util/calendar/date/dateFormat'
import List from './listWrap/List'

// const postsPerPage = 7
const DiaryList = () => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const handleNextMonth = () => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate)
            newDate.setMonth(newDate.getMonth() + 1)
            return newDate
        })
    }
    const handlePrevMonth = () => {
        setCurrentDate((prevDate) => {
            const newDate = new Date(prevDate)
            newDate.setMonth(newDate.getMonth() - 1)
            return newDate
        })
    } // 보고 있는 다이어리 리스트들을 월 단위로 정리해두는데, 해당 월을 가르킴
    // 버튼 값에 따라 월이 변함

    return (
        <div id="wrap">
            <div id="diarylist" className="section__border">
                <div className="diarylist__wrap">
                    <div className="diarylist__top">
                        <div className="month">
                            <span
                                className="prev"
                                onClick={() => handlePrevMonth()}
                            ></span>
                            <h2>
                                {getFormattedDate(currentDate).split(',')[0]}
                            </h2>
                            <span
                                className="next"
                                onClick={() => handleNextMonth()}
                            ></span>
                        </div>
                        <div className="title">Diary</div>
                        <div className="diary__list__pages">
                            <ul>
                                <li className="active">
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
                            <List currentDate={currentDate} />
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
                        <div className="mobile__page">
                            <ul>
                                <li className="active">
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
                                {/* 페이지 번호 표시 부분은 생략하거나 원하면 추가 */}
                                {/* {nextPage()} */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiaryList
