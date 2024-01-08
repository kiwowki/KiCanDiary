import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import { useSelector } from 'react-redux';
import diaryList from '../../diary/list/DiaryList';
import CalendarProps from '../../../util/calendar/CalendarProps';

const LeftCalendar = () => {
    const uid = useSelector(state => state.user.uid)
    const [postList, setPostList] = useState([])

    const [today, setToday] = useState(() => {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        return now
    });     // 오늘 날짜값 상태관리 
    const params = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    useEffect(() => {
        diaryList(setPostList, uid)
    }, [uid]);

    const calendarProps = CalendarProps({params, postList,today})

    return (
        <div className="left">
            <div className="date__info">
                <div className="calendar relative">
                    <Calendar {...calendarProps} />
                    <div className="today">
                        <p><Link to={`/write/${params}`}>Today </Link></p>
                    </div>
                </div>
                <div>
            </div>
            </div>
        </div>
    )
}

export default LeftCalendar
