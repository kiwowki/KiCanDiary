import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
const Main = (props) => {
    const location = useLocation()
    const pathname = location.pathname
    const state = location.state
    const pageOrder = ['/', '/diary', '/voca', '/diary/view/2']
    console.log(state)
    const nodeRef = useRef(null)

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
            <CSSTransition nodeRef={nodeRef} key={pathname} timeout={300}>
                <main ref={nodeRef} id="Main" role="main">
                    {props.children}
                </main>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default Main
