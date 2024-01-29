import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import diaryList from '../../diary/list/DiaryList'
import CalendarProps from '../../../util/calendar/CalendarProps'
import { useSelector } from 'react-redux'
import { BeatLoader } from 'react-spinners'

const LeftCalendar = ({ uid }) => {
    const [postList, setPostList] = useState([])
    const isLoading = useSelector((state) => state.loading)
    const [today, setToday] = useState(() => {
        const now = new Date()
        now.setHours(0, 0, 0, 0)
        return now
    }) // 오늘 날짜값 상태관리
    const params = `${today.getFullYear()}-${
        today.getMonth() + 1
    }-${today.getDate()}`

    useEffect(() => {
        if (uid) {
            diaryList(setPostList, uid)
        }
    }, [uid])
    const calendarProps = CalendarProps({ params, postList, today, uid })

    return (
        // {isLoading ? Loding}
        <div className="left">
            <div className="date__info">
                <div className="calendar relative">
                    {isLoading ? (
                        <BeatLoader
                            color={'#123abc'}
                            loading={true}
                            size={150}
                        />
                    ) : (
                        <Calendar {...calendarProps} />
                    )}
                    <div className="today">
                        <p onClick={() => calendarProps.onChange(today)}>
                            Today
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftCalendar
