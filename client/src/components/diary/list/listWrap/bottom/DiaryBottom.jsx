import React from 'react'
import List from './List'
import { Link } from 'react-router-dom'

const DiaryBottom = ({ currentDate, currentPage, postsPerPage }) => {
    return (
        <div className="diarylist__bottom">
            <div className="list__wrap">
                <List
                    currentDate={currentDate}
                    currentPage={currentPage}
                    postsPerPage={postsPerPage}
                />

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
    )
}

export default DiaryBottom
