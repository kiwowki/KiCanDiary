import React, { useState } from 'react'
import Calendar from 'react-calendar'

const LeftCalenadr = () => {
    const [value, onChange] = useState(new Date())
    const isSaturday = date => date.getDay() === 6;

    const tileClass = ({ date, view }) => 
    view === 'month' && isSaturday(date) ? 'saturday' : null;
    
    const navigationLabel = ({ date, view }) => (
        <div className="my-custom-navigation">
          <button>{'<'}</button>
          <span>{`${date.getFullYear()}년 ${date.getMonth() + 1}월`}</span>
          <button>{'>'}</button>
        </div>
    );
    
  return (
    <div className="left section__border">
        <div className="date__info">
            <div className="date__today ">
                <span>December 07, 2023</span>
            </div>
            <div className="calendar">
                <Calendar onChange={onChange} value={value} locale="en-US"
                 tileClassName={tileClass} navigationLabel={navigationLabel}  />
            </div>
        </div>
    </div>
  )
}

export default LeftCalenadr