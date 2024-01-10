import React, { useEffect, useRef, useState } from 'react'
import ViewRight from './right/ViewRight'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getFormattedDate } from '../../../util/calendar/date/dateFormat'

const DiaryView = () => {
    const params = useParams()
    const postNum = params.postNum
    const [post, setPost] = useState()
    const [date, setDate] = useState({})

    useEffect(() => {
        const fetchPost = async () => {
            axios
                .get(`/api/post/view/${postNum}`)
                .then((res) => {
                    if (res.status === 200) {
                        setPost(res.data.post)
                        setDate(getFormattedDate(res.data.post.createdAt))
                    }
                })
                .catch((err) => {
                    console.log(err)
                    alert('no')
                })
        }
        fetchPost()
    }, [postNum])

    const quillRef = useRef()
    useEffect(() => {
        if (quillRef.current) {
            quillRef.current.getEditor().setContents(post.content)
        }
    }, [post])

    return (
        <div id="wrap">
            <div id="diaryview" className="section__border">
                <div className="diaryview__wrap">
                    <div className="today">
                        <h3>
                            {date.month} {date.day}, {date.year}
                        </h3>
                    </div>
                    <div className="detail">
                        <div className="left">
                            <p></p>
                        </div>
                        <span></span>
                        <ViewRight
                            post={post}
                            quillRef={quillRef}
                            readOnly={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiaryView
