import React, { useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import DOMPurify from "dompurify";

const UpdateRight = ({ post, quillRef, setNewTitle, setNewContent }) => {
    const [content, setContent] = useState(null)

    const filterInput = (input) => {
        return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] });
    }

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
            <div
                className="editable-title whiteSpaceNo"
                contentEditable="true"
                suppressContentEditableWarning={true}
                onBlur={e => setNewTitle(filterInput(e.currentTarget.textContent))}
                onChange={setNewContent}
            >
                {post.title}
            </div>
            <ReactQuill
                className="viewQuill"
                ref={quillRef}
                value={content}
                onChange={(value) => {
                    setContent(value);
                    setNewContent(value);
                }}
            />

        </div>
    )
}

export default UpdateRight
