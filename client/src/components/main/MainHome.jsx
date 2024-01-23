import React from 'react'
import Right from './right/Right'
import LeftCalendar from './left/LeftCalendar'
import Aside from '../layout/Aside'
import { useDispatch, useSelector } from 'react-redux'
import useMonthNav from '../diary/list/listWrap/navigation/useMonthNav'

const MainHome = () => {
    const uid = useSelector((state) => state.user.uid)

    const { currentDate } = useMonthNav()
    return (
        <div id="wrap">
            <Aside />
            <main id="main" role="main" className="section__border">
                <div className="main__wrap">
                    <LeftCalendar uid={uid} />
                    <Right uid={uid} currentDate={currentDate} />
                </div>
            </main>
        </div>
    )
}

export default MainHome
