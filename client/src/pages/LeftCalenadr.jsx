import React, { Component, useEffect, useState } from 'react'
import Calendar from 'react-calendar'

const LeftCalenadr = () => {
    const [value, onChange] = useState(new Date())

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

    class MyCalendar extends Component {
        onPrevClick = () => {}
        // 이전 버튼 기본 기능 변경
    }
    return (
        <div className="left">
            <div className="date__info">
                {/*<div className="date__today ">
                <span>December 07, 2023</span>
                </div>*/}

                <div className="calendar">
                    <Calendar
                        onChange={onChange}
                        value={value}
                        locale="en-US"
                        tileClassName={tileClass}
                        navigationLabel={navigationLabel}
                        //  prev2ButtonOnClick={this.onPrevClick}
                    />
                </div>
            </div>
            <div className="today">
                <p> today </p>
            </div>
        </div>
    )
}

export default LeftCalenadr
