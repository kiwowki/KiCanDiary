import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

import blueFlower from '../../assets/img/smallSticker/blue_flower.png'
import blueStar from '../../assets/img/smallSticker/blue_star.png'
import burble from '../../assets/img/smallSticker/burble.png'
import greenStar from '../../assets/img/smallSticker/green_star.png'
import orangeHeart from '../../assets/img/smallSticker/orange_heart.png'
import pinkHeart from '../../assets/img/smallSticker/pink_heart.png'
import yellowV from '../../assets/img/smallSticker/yellow_v.png'

const Stickers = [
    blueFlower,
    blueStar,
    burble,
    greenStar,
    orangeHeart,
    pinkHeart,
    yellowV,
]

const getRandomSticker = () => {
    const randomIndex = Math.floor(Math.random() * Stickers.length)
    return Stickers[randomIndex]
}

const postsPerPage = 7

const DiaryList = () => {
    document.addEventListener('DOMContentLoaded', function () {
        loadPosts(1) // 첫 번째 페이지의 게시글 로드
    })

    function loadPosts(page) {
        // 서버에 페이지 번호를 포함한 요청을 보내고 게시글 데이터를 가져옵니다.
        fetch(`/api/posts?page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                // 가져온 게시글 데이터를 처리하여 HTML로 동적으로 생성합니다.
                const postsContainer =
                    document.getElementById('posts-container')
                data.posts.forEach((post) => {
                    const postElement = createPostElement(post)
                    postsContainer.appendChild(postElement)
                })
            })
            .catch((error) => {
                console.error('게시글 로드 중 에러 발생:', error)
            })
    }

    function createPostElement(post) {
        const postElement = document.createElement('div')
        postElement.classList.add('post')

        // 게시글 내용, 작성자, 날짜 등을 포함한 HTML을 생성합니다.
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.content}</p>
          <p>작성자: ${post.author}</p>
          <p>날짜: ${post.date}</p>
        `

        return postElement
    }

    function loadPosts(page) {
        const startIndex = (page - 1) * postsPerPage
        const endIndex = startIndex + postsPerPage

        fetch(`/api/posts?page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                const postsContainer =
                    document.getElementById('posts-container')

                // 기존 게시글 삭제
                postsContainer.innerHTML = ''

                data.posts.slice(startIndex, endIndex).forEach((post) => {
                    const postElement = createPostElement(post)
                    postsContainer.appendChild(postElement)
                })
            })
            .catch((error) => {
                console.error('게시글 로드 중 에러 발생:', error)
            })
    }

    // 다음 페이지로 이동
    function nextPage() {
        // 현재 페이지 번호를 가져와서 다음 페이지로 이동합니다.
        const currentPage = getCurrentPage()
        const nextPage = currentPage + 1

        loadPosts(nextPage) // 다음 페이지의 게시글 로드
    }

    // 현재 페이지 번호 가져오기
    function getCurrentPage() {
        // 현재 페이지 번호를 어딘가에 저장하고 반환합니다.
        // 예를 들어, 페이지 번호를 숨겨진 입력 필드에 저장하거나 URL의 쿼리 매개변수에서 가져올 수 있습니다.
    }

    return (
        <div id="wrap">
            <div id="diarylist" className="section__border">
                <div className="diarylist__wrap">
                    <div className="diarylist__top">
                        <div className="month">
                            <span className="prev">
                                <Link to="/"></Link>
                            </span>
                            <h2>december</h2>
                            <span className="next">
                                <Link to="/"></Link>
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
                            <div className="list">
                                <div className="weekday">
                                    <span className="date">1</span>
                                    <span className="sticker">
                                        <img
                                            src={getRandomSticker()}
                                            alt="Sticker"
                                        />
                                    </span>
                                </div>
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
                                <div className="weekday">
                                    <span className="date">2</span>
                                    <span className="sticker">
                                        <img
                                            src={getRandomSticker()}
                                            alt="Sticker"
                                        />
                                    </span>
                                </div>
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
                                <div className="weekday">
                                    <span className="date">4</span>
                                    <span className="sticker">
                                        <img
                                            src={getRandomSticker()}
                                            alt="Sticker"
                                        />
                                    </span>
                                </div>
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
                                <div className="weekday">
                                    <span className="date">5</span>
                                    <span className="sticker">
                                        <img
                                            src={getRandomSticker()}
                                            alt="Sticker"
                                        />
                                    </span>
                                </div>
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
                                <div className="weekday">
                                    <span className="date">7</span>
                                    <span className="sticker">
                                        <img
                                            src={getRandomSticker()}
                                            alt="Sticker"
                                        />
                                    </span>
                                </div>
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
                                <div className="weekday">
                                    <span className="date">8</span>
                                    <span className="sticker">
                                        <img
                                            src={getRandomSticker()}
                                            alt="Sticker"
                                        />
                                    </span>
                                </div>
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
                                <div className="weekday">
                                    <span className="date">11</span>
                                    <span className="sticker">
                                        <img
                                            src={getRandomSticker()}
                                            alt="Sticker"
                                        />
                                    </span>
                                </div>
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
                            {/* <div className="list">
                                <div className="weekday">
                                    <span className="date">test</span>
                                    <span className="sticker">
                                        <img
                                            src={getRandomSticker()}
                                            alt="Sticker"
                                        />
                                    </span>
                                </div>
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
                            </div> */}
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
                                <li className='active'><Link to="/">1</Link></li>
                                <li><Link to="/">2</Link></li>
                                <li><Link to="/">3</Link></li>
                                <li><Link to="/">4</Link></li>
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
