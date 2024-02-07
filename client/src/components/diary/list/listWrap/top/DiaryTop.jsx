import React, { useState } from 'react'
import { getFormattedDate } from '../../../../../util/calendar/date/dateFormat'
import DiaryPageNav from './pageNav/DiaryPageNav'
import searchList from '../../SearchList'
const DiaryTop = ({
    fixedPageCount,
    currentPage,
    currentDate,
    setCurrentPage,
    handleNextMonth,
    handlePrevMonth,
    handlePageChange,
    uid,
    setSearchResult,
}) => {
    const [keyword, setKeyword] = useState('')

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
                    onClick={(e) =>
                        searchList(e, uid, keyword, setSearchResult)
                    }
                ></div>
            </div>
        </div>
    )
}

export default DiaryTop
