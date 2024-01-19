import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

import { getFormattedDate } from '../../../util/calendar/date/dateFormat'
import List from './listWrap/List'

// const postsPerPage = 7
const DiaryList = () => {

    const [currentDate, setCurrentDate] = useState(new Date())
    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + 1);
            return newDate;
        })
    }
    const handlePrevMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() - 1);
            return newDate;
        })
    } // 보고 있는 다이어리 리스트들을 월 단위로 정리해두는데, 해당 월을 가르킴
    // 버튼 값에 따라 월이 변함 
    

    // document.addEventListener('DOMContentLoaded', function () {
    //     loadPosts(1) // 첫 번째 페이지의 게시글 로드
    // })

    // function loadPosts(page) {
    //     // 서버에 페이지 번호를 포함한 요청을 보내고 게시글 데이터를 가져옵니다.
    //     fetch(`/api/posts?page=${page}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // 가져온 게시글 데이터를 처리하여 HTML로 동적으로 생성합니다.
    //             const postsContainer =
    //                 document.getElementById('posts-container')
    //             data.posts.forEach((post) => {
    //                 const postElement = createPostElement(post)
    //                 postsContainer.appendChild(postElement)
    //             })
    //         })
    //         .catch((error) => {
    //             console.error('게시글 로드 중 에러 발생:', error)
    //         })
    // }

    // function createPostElement(post) {
    //     const postElement = document.createElement('div')
    //     postElement.classList.add('post')

    //     // 게시글 내용, 작성자, 날짜 등을 포함한 HTML을 생성합니다.
    //     postElement.innerHTML = `
    //       <h2>${post.title}</h2>
    //       <p>${post.content}</p>
    //       <p>작성자: ${post.author}</p>
    //       <p>날짜: ${post.date}</p>
    //     `

    //     return postElement
    // }

    // function loadPosts(page) {
    //     const startIndex = (page - 1) * postsPerPage
    //     const endIndex = startIndex + postsPerPage

    //     fetch(`/api/posts?page=${page}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             const postsContainer =
    //                 document.getElementById('posts-container')

    //             // 기존 게시글 삭제
    //             postsContainer.innerHTML = ''

    //             data.posts.slice(startIndex, endIndex).forEach((post) => {
    //                 const postElement = createPostElement(post)
    //                 postsContainer.appendChild(postElement)
    //             })
    //         })
    //         .catch((error) => {
    //             console.error('게시글 로드 중 에러 발생:', error)
    //         })
    // }

    // // 다음 페이지로 이동
    // function nextPage() {
    //     // 현재 페이지 번호를 가져와서 다음 페이지로 이동합니다.
    //     const currentPage = getCurrentPage()
    //     const nextPage = currentPage + 1

    //     loadPosts(nextPage) // 다음 페이지의 게시글 로드
    // }

    // // 현재 페이지 번호 가져오기
    // function getCurrentPage() {
    //     // 현재 페이지 번호를 어딘가에 저장하고 반환합니다.
    //     // 예를 들어, 페이지 번호를 숨겨진 입력 필드에 저장하거나 URL의 쿼리 매개변수에서 가져올 수 있습니다.
    // }

    return (
        <div id="wrap">
            <div id="diarylist" className="section__border">
                <div className="diarylist__wrap">
                    <div className="diarylist__top">
                        <div className="month">
                            <span className="prev" onClick={() => handlePrevMonth()}>
                            </span>
                            <h2>{getFormattedDate(currentDate).split(',')[0]}</h2>
                            <span className="next"onClick={() => handleNextMonth()}>
                            </span>
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
                           
                            <List currentDate={currentDate}/>
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
