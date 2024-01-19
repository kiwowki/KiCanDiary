import React from 'react'
import Right from './right/Right'
import LeftCalendar from './left/LeftCalendar'
import Aside from '../layout/Aside'

const MainHome = () => {
    return (
        <div id="wrap">
            <Aside />
            <main id="main" role="main" className='section__border'>
                <div className="main__wrap">
                    <LeftCalendar />
                    <Right />
                </div>
            </main>
        </div>
    )
}

export default MainHome
