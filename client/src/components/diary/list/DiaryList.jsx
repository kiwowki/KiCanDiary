import React, { useEffect, useState } from 'react'
import DiaryTop from './listWrap/top/DiaryTop'
import DiaryBottom from './listWrap/bottom/DiaryBottom'
import useMonthNav from './listWrap/navigation/useMonthNav'

const DiaryList = () => {
    const { currentDate, handleNextMonth, handlePrevMonth } = useMonthNav()
    const [currentPage, setCurrentPage] = useState(
        parseInt(sessionStorage.getItem('currentPage')) || 1
    )
    const postsPerPage = 7 // => 페이지에 보여줄 게시물의 숫자
    const fixedPageCount = 5 // => 고정 페이지 값

    useEffect(() => {
        return () => {
            sessionStorage.removeItem('currentPage')
        }
    }, [])

    return (
        <div id="wrap">
            <div id="diarylist" className="section__border">
                <div className="diarylist__wrap">
                    <DiaryTop
                        fixedPageCount={fixedPageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        currentDate={currentDate}
                        handleNextMonth={handleNextMonth}
                        handlePrevMonth={handlePrevMonth}
                    />
                    <DiaryBottom
                        currentDate={currentDate}
                        currentPage={currentPage}
                        postsPerPage={postsPerPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default DiaryList
