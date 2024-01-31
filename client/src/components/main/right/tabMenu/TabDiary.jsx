import React, { useEffect, useState } from 'react'
import monthList from '../../../diary/list/MonthList'
import diaryList from '../../../diary/list/DiaryList'

import { AnimatePresence, motion } from 'framer-motion'
import TabContent from './TabContent'

const TabDiary = ({ uid, currentDate }) => {
    const [postList, setPostList] = useState([])
    const [filteredPostList, setFilteredPostList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [prevPage, setPrevPage] = useState(currentPage)
    const [direction, setDirection] = useState(1)

    useEffect(() => {
        const newDirection = currentPage > prevPage ? 1 : -1
        setDirection(newDirection)
    }, [currentPage, prevPage])

    const handlePageChange = (newPage) => {
        if (newPage !== currentPage) {
            setPrevPage(currentPage)
            setCurrentPage(newPage)
        }
    }

    useEffect(() => {
        diaryList(setPostList, uid)
    }, [currentDate, uid])

    useEffect(() => {
        const sortedPosts = monthList(currentDate, postList)
        setFilteredPostList(sortedPosts)
    }, [postList, currentDate])

    const pageSize = 1
    const totalPage = 3

    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize
    const currentItems = filteredPostList.slice(startIndex, endIndex)

    const EmptyContents = () => {
        const variants = {
            hidden: { x: direction === 1 ? '100%' : '-100%' },
            show: { x: '0%' },
            exit: { x: direction === 1 ? '-100%' : '100%' },
        }
        return (
            <motion.a
                href="#"
                custom={currentPage > prevPage ? 1 : -1}
                variants={variants}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.4, delay: 0.3, ease: 'easeInOut' }}
            >
                <div className="tab__box">
                    <h4 className="mb20"></h4>
                    <p className="">아직 작성된 글이 없습니다.</p>
                </div>
            </motion.a>
        )
    }

    return (
        <div className="diary__list">
            <div className="list__title mb30">
                <p className="whiteSpaceNo">Recent Diary</p>
            </div>

            <div className="tabWrap">
                <div className="btnWrap pr10">
                    {Array.from({ length: totalPage }, (_, key) => (
                        <button
                            key={key + 1}
                            className={`tab__btn mr10 ${
                                currentPage === key + 1 ? 'active' : ''
                            }`}
                            onClick={() => handlePageChange(key + 1)}
                        >
                            {key + 1}
                        </button>
                    ))}
                </div>
                <div className="diary__tab box2">
                    <AnimatePresence mode="wait">
                        {currentItems && currentItems.length > 0 ? (
                            currentItems.map((item, key) => (
                                <TabContent
                                    key={item.postNum}
                                    item={item}
                                    direction={direction}
                                />
                            ))
                        ) : (
                            <EmptyContents />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default TabDiary
