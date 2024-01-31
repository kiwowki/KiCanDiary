import React, { useEffect, useState } from 'react'
import Right from './right/Right'
import LeftCalendar from './left/LeftCalendar'
import Aside from '../layout/Aside'
import { useSelector } from 'react-redux'
import useMonthNav from '../diary/list/listWrap/navigation/useMonthNav'

const MainHome = () => {
    const uid = useSelector((state) => state.user.uid)
    const { currentDate } = useMonthNav()

    const [isNav700, setIsNav700] = useState(false)
    const [isAsideVisible, setAsideVisible] = useState(true)

    const toggleAsideVisibility = () => {
        setAsideVisible((prev) => !prev)
    }

    useEffect(() => {
        const handleNavResize = () => {
            setIsNav700(window.innerWidth <= 700)
        }

        handleNavResize()

        window.addEventListener('resize', handleNavResize)

        return () => {
            window.removeEventListener('resize', handleNavResize)
        }
    }, [])

    return (
        <div id="wrap">
            <Aside isAsideVisible={isAsideVisible} />
            <div id="main" className="section__border">
                <div className="aside_ham" onClick={toggleAsideVisibility}>
                    <span></span>
                </div>

                <div className="main__wrap">
                    <LeftCalendar uid={uid} />
                    <Right uid={uid} currentDate={currentDate} />
                </div>
            </div>
        </div>
    )
}

export default MainHome
