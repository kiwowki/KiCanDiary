import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchPost from '../util/view'
import UpdateRight from './UpdateRight'

const DiaryUpdate = () => {
    const params = useParams()
    const postNum = params.postNum
    const [post, setPost] = useState()
    const [date, setDate] = useState({})
  
   

    useEffect(() => {
        fetchPost(postNum, setPost, setDate)
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
                        <span className='spring'></span>
                        <UpdateRight
                        
                            quillRef={quillRef}
                            post={post}
                            postNum={postNum}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiaryUpdate
