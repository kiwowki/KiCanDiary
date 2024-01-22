import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import diaryList from '../../DiaryList'
import { Link, useNavigate } from 'react-router-dom'
import { getRandomSticker } from '../../../../../util/stickers/getRandomSticker'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import { getFormattedDate } from '../../../../../util/calendar/date/dateFormat'
import monthList from '../../MonthList'
import update from '../../../util/update'
import diaryDelete from '../../../util/diaryDelete'

const List = ({ currentDate, currentPage, postsPerPage }) => {
    const uid = useSelector((state) => state.user.uid)
    const [postList, setPostList] = useState([])
    const [filteredPostList, setFilteredPostList] = useState([])
    const navigate = useNavigate()
    const { updateLink } = update();


    useEffect(() => {
        diaryList(setPostList, uid)
    }, [uid])

    useEffect(() => {
        const sortedPosts = monthList(currentDate, postList)
        setFilteredPostList(sortedPosts)
    }, [postList, currentDate])
    // 해당 월의 글을 필터링 해서 가져옴 내림차순으로 => 늦게 쓴게 먼저

    // 현재 페이지의 게시물 계산
    const lastPost = currentPage * postsPerPage
    const firstPost = lastPost - postsPerPage
    const currentPosts = filteredPostList.slice(firstPost, lastPost)
    // 배열에서 짤라서 일정 길이만 보여주는 것

    return (
        <>
            {currentPosts.map((post, key) => (
                <div className="list" key={key}>
                    <Link to={`/view/diaryview/${post.postNum}`}>
                        <div className="weekday">
                            <span className="date">
                                {getFormattedDate(post.createdAt).day}
                            </span>
                            <span className="sticker">
                                <img
                                    src={getRandomSticker()}
                                    alt="Sticker"
                                />
                            </span>
                        </div>
                        <div className="day__diary">
                            <h3 className="title">{post.title}</h3>
                            <ReactQuill
                                className="viewQuill"
                                readOnly={true}
                                value={post.content}
                            />
                        </div>
                    </Link>
                    <div className='btn__wrap'>
                        <button className='update' onClick={(e) => updateLink(e, post.postNum, navigate)}>update</button>
                        <button className='delete' onClick={(e) => diaryDelete(e, post.postNum, setPostList)}>delete</button>
                    </div>
                </div>
            ))}
            {Array(7 - currentPosts.length).fill().map((_, key) => (
                <div className="list null" key={key + currentPosts.length}>
                    <Link to={`#`}>
                        <div className="weekday">
                            <span className="date"></span>
                            <span className="sticker">
                                <img
                                    src={getRandomSticker()}
                                    alt="Sticker"
                                />
                            </span>
                        </div>
                        <div className="day__diary">
                            <h3 className="title">작성된 일기가 없어요</h3>
                            <ReactQuill
                                className="viewQuill"
                                readOnly={true}
                            />
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default List
