import React, { Component, useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { Link, useNavigate } from 'react-router-dom'

const LeftCalenadr = () => {
    const [value, setValue] = useState(new Date()); // 달력 전체의 날짜 값 
    const [today, setToday] = useState(() => {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        return now
    });     // 오늘 날짜값 상태관리 
    
    const params = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    
    const navigate = useNavigate();

    const onChange = date => {
        if(date.getTime() === today.getTime()){
            setValue(date);
            navigate(`/write/${params}`)
            
        } else {
            alert('오늘의 날짜를 선택하도록')
        }
    }


    const isSaturday = (date) => date.getDay() === 6
    const tileClass = ({ date, view }) =>
        view === 'month' && isSaturday(date) ? 'saturday' : null
    // 달력 마지막 css 조절하기 위한 컴포넌트 추가 작업

    let date = new Date()
    let day = date.getDay()
    if (day < 10) {
        day = '0' + day
    }
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    let month = months[date.getMonth()] // 월
    const navigationLabel = ({ date, view }) => (
        <div className="my-custom-navigation">
            <span>{month + '  ' + day + ', ' + date.getFullYear()}</span>
        </div>
    )
    // 날짜 포매터
    
    

    return (
        <div className="left">
            <div className="date__info">
                <div className="calendar relative">
                    <Calendar
                        onChange={onChange}
                        value={value}
                        locale="en-US"
                        tileClassName={tileClass}
                        navigationLabel={navigationLabel}
                        //  prev2ButtonOnClick={this.onPrevClick}
                    />
                    <div className="today">
                        <p><Link to={`/write/${params}`}> today </Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftCalenadr
