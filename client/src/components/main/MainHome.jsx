import React from 'react'
import Right from './right/Right'
import LeftCalendar from './left/LeftCalendar'
import Aside from '../layout/Aside'
import { useSelector } from 'react-redux'
import useMonthNav from '../diary/list/listWrap/navigation/useMonthNav'


const MainHome = () => {
    const uid = useSelector((state) => state.user.uid)
    const { currentDate } = useMonthNav()


    return (
        <div id="wrap">
            <Aside />
            <div id="main"  className="section__border">
                <div className="main__wrap">
                    <LeftCalendar uid={uid} />
                    <Right uid={uid} currentDate={currentDate} />
                </div>
            </div>
        </div>
    )
}

export default MainHome
