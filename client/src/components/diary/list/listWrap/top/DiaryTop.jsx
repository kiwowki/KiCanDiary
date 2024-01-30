import React from 'react'
import { getFormattedDate } from '../../../../../util/calendar/date/dateFormat'
import DiaryPageNav from './pageNav/DiaryPageNav'

const DiaryTop = ({
    fixedPageCount,
    currentPage,
    currentDate,
    setCurrentPage,
    handleNextMonth,
    handlePrevMonth,
    handlePageChange,
}) => {
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
                <span></span>
                <input type="text" className="diary__search" />
            </div>
        </div>
    )
}

export default DiaryTop
