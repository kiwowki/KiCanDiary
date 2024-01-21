import React, { useEffect, useState } from 'react'
import { getFormattedDate } from '../../../util/calendar/date/dateFormat'
import diaryList from '../../diary/list/DiaryList'
import { Link } from 'react-router-dom'
import monthList from '../../diary/list/MonthList'

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
    }, [postList, currentDate]) // postList의 데이터를 월 별로 관리합니다.

    const pageSize = 1 // 한 페이지에 보여줄 아이템의 수
    const totalPage = 3 // 전체 페이지 수

    // 현재 페이지에 따라 보여줄 아이템의 시작 인덱스와 끝 인덱스를 계산
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize

    // 시작 인덱스와 끝 인덱스에 따라 아이템을 추출
    const currentItems = filteredPostList.slice(startIndex, endIndex)

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
                {currentItems && currentItems.length > 0 ?
                    currentItems.map((item, key) => (
                        <div className="diary__tab" key={key}>
                            <Link to={`/view/diaryview/${item.postNum}`}>
                                <div className="tab__box box2">
                                    <h4 className="mb20">
                                        {getFormattedDate(item.createdAt).day}
                                        &nbsp;
                                        {getFormattedDate(item.createdAt).month}
                                        ,&nbsp;
                                        {getFormattedDate(item.createdAt).year}
                                    </h4>
                                    <p className="">{item.content.ops[0].insert}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                    : <div className="diary__tab">
                            <Link to={'#'}>
                                <div className="tab__box box2">
                                    <h4 className="mb20">
                                    </h4>
                                    <p className="">아직 작성된 글이 없습니다.</p>
                                </div>
                            </Link>
                        </div>
                }
            </div>
        </div>
    )
}

export default TabDiary
