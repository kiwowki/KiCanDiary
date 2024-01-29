import React, { useEffect, useState } from 'react'
import { getFormattedDate } from '../../../../../util/calendar/date/dateFormat'
import DiaryPageNav from './pageNav/DiaryPageNav'
import diaryList from '../../DiaryList'
import { useSelector } from 'react-redux'
import CalendarProps from '../../../../../util/calendar/CalendarProps'

const DiaryTop = ({
    fixedPageCount,
    currentPage,
    currentDate,
    setCurrentPage,
    handleNextMonth,
    handlePrevMonth,
    uid,
}) => {
    // const [postList, setPostList] = useState([])
    // const isLoading = useSelector((state) => state.loading)
    // const [today, setToday] = useState(() => {
    //     const now = new Date()
    //     now.setHours(0, 0, 0, 0)
    //     return now
    // }) // 오늘 날짜값 상태관리
    // const params = `${today.getFullYear()}-${
    //     today.getMonth() + 1
    // }-${today.getDate()}`

    // useEffect(() => {
    //     if (uid) {
    //         diaryList(setPostList, uid, params) // params를 넘겨줌
    //     }
    // }, [uid, params])

    // const calendarProps = CalendarProps({ params, postList, today })

    
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
            <div
                className="title"
                // onClick={() => calendarProps.onChange(today)}
            >
                Diary
            </div>
            <DiaryPageNav
                fixedPageCount={fixedPageCount}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
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
