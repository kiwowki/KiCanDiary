import React from 'react'
import List from './List'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import SearchList from './SearchList'

const DiaryBottom = ({
    currentDate,
    currentPage,
    postsPerPage,
    direction,
    searchResult,
}) => {
    const variants = {
        enter: (direction) => {
            return {
                zIndex: 0,
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
            }
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => {
            console.log('exit direction 값: ', direction) // 이렇게 추가
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
            }
        },
    }

    return (
        <div className="diarylist__bottomWrap">
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={`${currentPage}-${currentDate}`}
                    className="diarylist__bottom"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: {
                            type: 'spring',
                            stiffness: 200,
                            damping: 30,
                            duration: 2.5,
                        },
                        opacity: { duration: 0.3 },
                    }}
                >
                    <div className="list__wrap">
                        {searchResult.length > 0 ? (
                            <SearchList
                                searchResult={searchResult}
                                currentDate={currentDate}
                                currentPage={currentPage}
                                postsPerPage={postsPerPage}
                            />
                        ) : (
                            <List
                                currentDate={currentDate}
                                currentPage={currentPage}
                                postsPerPage={postsPerPage}
                            />
                        )}

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
        // 해당 컴포넌트가 돔에 유지된채 다음에 올 컴포넌트가 마운트되면서 밀고들어오는 애니메이션
    )
}

export default DiaryBottom
