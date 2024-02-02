import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
const Main = (props) => {
    const location = useLocation()
    const [isRendered, setIsRendered] = useState(false)

    const pageTransition = {
        initial: { opacity: 0, visibility: 'hidden' },
        animate: { opacity: 1, visibility: 'visible' },
        exit: { opacity: 0, visibility: 'hidden' },
        transition: { duration: 0.2, delay: 0.4, ease: 'easeIn' },
    }

    useEffect(() => {
        setIsRendered(false)
        const timer = setTimeout(() => {
            setIsRendered(true)
        }, 1000) // 1초 후에 렌더링

        // 컴포넌트 unmount 시 타이머 제거
        return () => clearTimeout(timer)
    }, [location.pathname])

    return (
        <AnimatePresence mode="wait">
            {isRendered && (
                <motion.main
                    key={location.pathname}
                    variants={pageTransition}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    id="Main"
                >
                    {props.children}
                </motion.main>
            )}
        </AnimatePresence>
    )
}

export default Main
