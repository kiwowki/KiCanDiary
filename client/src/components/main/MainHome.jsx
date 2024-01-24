import React from 'react'
import Right from './right/Right'
import LeftCalendar from './left/LeftCalendar'
import Aside from '../layout/Aside'
import { useSelector } from 'react-redux'
import useMonthNav from '../diary/list/listWrap/navigation/useMonthNav'
import { useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const MainHome = () => {
    const uid = useSelector((state) => state.user.uid)
    const { currentDate } = useMonthNav()
    const location = useLocation()
    const pathname = location.pathname
    const state = location.state
    const pageOrder = ['/', '/diary', '/voca', '/diary/view/2']
    console.log(state)

    return (
        <TransitionGroup
            className={'transition-wrapper'}
            childFactory={(child) => {
                if (!state?.prev) {
                    return React.cloneElement(child, {
                        classNames:
                            location.state?.direction || 'navigate-push',
                    })
                } else {
                    if (
                        pageOrder.indexOf(pathname) >
                        pageOrder.indexOf(state.prev)
                    ) {
                        return React.cloneElement(child, {
                            classNames: 'slide-next',
                        })
                    } else {
                        return React.cloneElement(child, {
                            classNames: 'slide-prev',
                        })
                    }
                }
            }}
        >
            <CSSTransition key={pathname} timeout={3300}>
                <div id="wrap">
                    <Aside />
                    <main id="main" role="main" className="section__border">
                        <div className="main__wrap">
                            <LeftCalendar uid={uid} />
                            <Right uid={uid} currentDate={currentDate} />
                        </div>
                    </main>
                </div>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default MainHome
