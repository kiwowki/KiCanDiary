import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import diaryDelete from '../../../util/diaryDelete'
import { getRandomSticker } from '../../../../../util/stickers/getRandomSticker'
import { getFormattedDate } from '../../../../../util/calendar/date/dateFormat'
import ReactQuill from 'react-quill'
import { useDispatch, useSelector } from 'react-redux'
import update from '../../../util/update'
import monthList from '../../MonthList'

const SearchList = ({
    searchResult,
    currentDate,
    currentPage,
    postsPerPage,
}) => {
    const uid = useSelector((state) => state.user.uid)
    const [postList, setPostList] = useState([])
    const [filteredPostList, setFilteredPostList] = useState([])
    const navigate = useNavigate()
    const { updateLink } = update()
    const dispatch = useDispatch()

    useEffect(() => {
        const sortedPosts = monthList(currentDate, searchResult)
        setFilteredPostList(sortedPosts)
    }, [searchResult, currentDate])

    const lastPost = currentPage * postsPerPage
    const firstPost = lastPost - postsPerPage
    const currentPosts = filteredPostList.slice(firstPost, lastPost)
    console.log(searchResult)
    return (
        <>
            {currentPosts.map((post, key) => (
                <div className="list search" key={key}>
                    <Link to={`/diary/view/${post.postNum}`}>
                        <div className="weekday">
                            <span className="date">
                                {getFormattedDate(post.createdAt).day}
                            </span>
                            <span className="sticker">
                                <img src={getRandomSticker()} alt="Sticker" />
                            </span>
                        </div>
                        <div className="day__diary">
                            <h3 className="title">{post.title}</h3>
                            <ReactQuill
                                className="ListQuill"
                                readOnly={true}
                                value={post.content}
                            />
                        </div>
                    </Link>
                    <div className="btn__wrap">
                        <button
                            className="update"
                            onClick={(e) =>
                                updateLink(e, post.postNum, navigate)
                            }
                        >
                            update
                        </button>
                        <button
                            className="delete"
                            onClick={(e) =>
                                diaryDelete(e, post.postNum, setPostList)
                            }
                        >
                            delete
                        </button>
                    </div>
                </div>
            ))}
            {Array(7 - currentPosts.length)
                .fill()
                .map((_, key) => (
                    <div className="list null" key={key + currentPosts.length}>
                        <Link to={`#`}>
                            <div className="weekday">
                                <span className="date"></span>
                            </div>
                            <div className="day__diary">
                                <h3 className="title">작성된 일기가 없어요</h3>
                            </div>
                        </Link>
                    </div>
                ))}
        </>
    )
}

export default SearchList
