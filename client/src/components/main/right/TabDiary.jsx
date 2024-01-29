import React, { useEffect, useState } from 'react'
import { getFormattedDate } from '../../../util/calendar/date/dateFormat'
import diaryList from '../../diary/list/DiaryList'
import { Link } from 'react-router-dom'
import monthList from '../../diary/list/MonthList'
import { AnimatePresence, motion } from 'framer-motion'

const TabDiary = ({ uid, currentDate }) => {
    const [postList, setPostList] = useState([])
    const [filteredPostList, setFilteredPostList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
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

    const transition = {
        hidden: { opacity: 0, x: '100%' },
        show: { opacity: 1, x: '0%' },
        exit: { opacity: 0, x: '-100%' }
    };

    const TabContent = ({ item }) => (
        <div key={item.postNum} className='diary__tab box2'>
            <Link to={`/diary/view/${item.postNum}`}>
                <motion.div className="tab__box" variants={transition} initial="hidden" animate="show" exit="exit" transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <h4 className="mb20">
                        {getFormattedDate(item.createdAt).day}
                        &nbsp;
                        {getFormattedDate(item.createdAt).month}
                        ,&nbsp;
                        {getFormattedDate(item.createdAt).year}
                    </h4>
                    <p className="">
                        {item.content.ops[0].insert}
                    </p>
                </motion.div>
            </Link>
        </div>
    );

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
                            className={`tab__btn mr10 ${currentPage === key + 1 ? 'active' : ''
                                }`}
                            onClick={() => handlePageChange(key + 1)}
                        >
                            {key + 1}
                        </button>
                    ))}
                </div>
                <AnimatePresence mode='wait'>
                    {currentItems && currentItems.length > 0 ? (
                        currentItems.map((item, key) => (
                            <TabContent key={key} item={item} />
                        ))
                    ) : (
                        <div className="diary__tab">
                            <Link to={'#'}>
                                <div className="tab__box box2">
                                    <h4 className="mb20"></h4>
                                    <p className="">아직 작성된 글이 없습니다.</p>
                                </div>
                            </Link>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default TabDiary
