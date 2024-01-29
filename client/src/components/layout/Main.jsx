import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
const Main = (props) => {
    const location = useLocation()
    const [isRendered, setIsRendered] = useState(false)

    const pageTransition = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.7, delay: 0.8, ease: 'easeInOut' },
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
                    id="Main"
                >
                    {props.children}
                </motion.main>
            )}
        </AnimatePresence>
    )
}

export default Main
