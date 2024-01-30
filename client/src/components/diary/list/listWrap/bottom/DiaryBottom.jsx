import React from 'react'
import List from './List'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const DiaryBottom = ({ currentDate, currentPage, postsPerPage, direction }) => {
    const variants = {
        hidden: { x: direction === 1 ? '100%' : '-100%' },
        show: { x: '0%' },
        exit: { x: direction === 1 ? '100%' : '-100%' },
    }

    // custom={currentPage > prevPage ? 1 : -1}

    return (
        <div className="diarylist__bottomWrap">
            <AnimatePresence exitBeforeEnter={false} mode="wait">
                <motion.div
                    key={currentPage}
                    className="diarylist__bottom"
                    variants={variants}
                    custom={direction}
                    transition={{
                        duration: 0.3,
                        delay: 0.5,
                        ease: 'easeInOut',
                    }}
                    initial="hidden"
                    animate="show"
                >
                    <div className="list__wrap">
                        <List
                            currentDate={currentDate}
                            currentPage={currentPage}
                            postsPerPage={postsPerPage}
                        />

                        <div className="voca__list">
                            <h3 className="title">Voca List</h3>
                            <ul>
                                <li>
                                    <span>overcome</span>
                                    <span>극복하다</span>
                                </li>
                                <li>
                                    <span>overcome</span>
                                    <span>극복하다</span>
                                </li>
                                <li>
                                    <span>overcome</span>
                                    <span>극복하다</span>
                                </li>
                                <li>
                                    <span>overcome</span>
                                    <span>극복하다</span>
                                </li>
                                <li>
                                    <span>overcome</span>
                                    <span>극복하다</span>
                                </li>
                                <li>
                                    <span>overcome</span>
                                    <span>극복하다</span>
                                </li>
                                <li>
                                    <span>overcome</span>
                                    <span>극복하다</span>
                                </li>
                                <li>
                                    <span>overcome</span>
                                    <span>극복하다</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mobile__page">
                        <ul>
                            <li className="active">
                                <Link to="/">1</Link>
                            </li>
                            <li>
                                <Link to="/">2</Link>
                            </li>
                            <li>
                                <Link to="/">3</Link>
                            </li>
                            <li>
                                <Link to="/">4</Link>
                            </li>
                            {/* 페이지 번호 표시 부분은 생략하거나 원하면 추가 */}
                            {/* {nextPage()} */}
                        </ul>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default DiaryBottom
