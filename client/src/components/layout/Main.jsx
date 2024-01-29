import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
const Main = (props) => {
    const location = useLocation()

    // 여기서는 간단한 fade 애니메이션을 설정합니다.
    const pageTransition = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.7, delay: 0.8, ease: 'easeInOut' },
    }
    useEffect(() => {
        requestAnimationFrame(() => {
            // 애니메이션을 렌더링 후에 적용합니다.
        })
    }, [])

    return (
        <AnimatePresence mode="wait">
            <motion.main
                key={location.pathname} // 키를 현재 경로로 설정하여 컴포넌트가 바뀔 때마다 애니메이션을 트리거합니다.
                variants={pageTransition} // 애니메이션 변형을 정의합니다.
                initial="initial"
                animate="animate"
                exit="exit"
                id="Main"
            >
                {props.children}
            </motion.main>
        </AnimatePresence>
    )
}

export default Main
