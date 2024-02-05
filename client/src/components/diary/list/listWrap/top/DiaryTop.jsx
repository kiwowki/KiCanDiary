import React, { useEffect, useState } from 'react'
import { getFormattedDate } from '../../../../../util/calendar/date/dateFormat'
import DiaryPageNav from './pageNav/DiaryPageNav'
import axios from 'axios'
const DiaryTop = ({
    fixedPageCount,
    currentPage,
    currentDate,
    setCurrentPage,
    handleNextMonth,
    handlePrevMonth,
    handlePageChange,
    uid,
}) => {
    const [keyword, setKeyword] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const diarySearch = async (e) => {
        e.preventDefault()
        if (keyword) {
            let body = {
                content: keyword,
                uid: uid,
            }

            await axios
                .post('/api/post/search/', body)
                .then((res) => {
                    if (res.data.success) {
                        const parsedPostList = res.data.postList.map((post) => {
                            try {
                                return {
                                    ...post,
                                    content: JSON.parse(post.content),
                                }
                            } catch (err) {
                                console.error('json parse', err)
                                return post
                            }
                        })
                        setSearchResult(parsedPostList)
                        console.log('검색확인')
                    }
                })
                .catch((err) => {
                    console.log(err)
                    alert('axios')
                })
        }
    }

    return (
        <div className="diarylist__top">
            <div className="month">
                <span className="prev" onClick={() => handlePrevMonth()}></span>
                <h2>
                    {currentDate
                        ? getFormattedDate(currentDate).split(',')[0]
                        : 'Loading...'}
                </h2>
                <span className="next" onClick={() => handleNextMonth()}></span>
            </div>{' '}
            {/** 월 페이지기능  */}
            <div className="title">Diary</div>
            <DiaryPageNav
                fixedPageCount={fixedPageCount}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                handlePageChange={handlePageChange}
            />{' '}
            {/** 페이지네이션 기능 */}
            <div className="search__wrap">
                <input
                    type="text"
                    className="diary__search"
                    onChange={(e) => setKeyword(e.currentTarget.value)}
                />
                <div
                    type="submit"
                    className="searchBtn"
                    onClick={(e) => diarySearch(e)}
                ></div>
            </div>
        </div>
    )
}

export default DiaryTop
