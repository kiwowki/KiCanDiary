import React, { useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

const ViewRight = ({ post, quillRef }) => {
    const [content, setContent] = useState(null)
    useEffect(() => {
        if (post && post.content) {
            setContent(JSON.parse(post.content))
        }
    }, [post])

    if (!post) {
        return null // post가 아직 없을 때는 아무것도 렌더링하지 않음
    }
    return (
        <div className="right">
            <div className="rightTitle">{post.title}</div>
            <ReactQuill
                className="viewQuill"
                ref={quillRef}
                readOnly={true}
                value={content}
            />
            <div className="btn__wrap">
                <button className="update">update</button>
                <button>delete</button>
            </div>
        </div>
    )
}

export default ViewRight
