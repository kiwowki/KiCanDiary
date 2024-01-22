import React, { useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import DOMPurify from 'dompurify'
import update from '../util/update'
import { useNavigate } from 'react-router-dom'

const UpdateRight = ({ post, quillRef, setNewTitle, setNewContent }) => {
    const [newPost, setNewPost] = useState()
    const navigate = useNavigate()
    const filterInput = (input) => {
        return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] })
    }
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
        ],
    }

    useEffect(() => {
        if (post && post.content && quillRef.current) {
            const quillInstance = quillRef.current.getEditor()
            const parsedContent = JSON.parse(post.content)
            quillInstance.setContents(parsedContent)
            setNewPost(post.content) // 이전 내용을 상태에 설정합니다.
        }
    }, [post, quillRef])
    useEffect(() => {
        // post.content가 유효한 JSON인지 확인합니다.
        if (post && post.content) {
            try {
                const parsedContent = JSON.parse(post.content)
                // 여기서는 JSON 객체를 다시 문자열로 변환하지 않습니다.
                // setContent 함수에 직접 JSON 객체를 전달합니다.
                setNewPost(parsedContent)
            } catch (error) {
                console.error('Failed to parse post.content as JSON', error)
                // 오류 처리: 유효하지 않은 JSON인 경우 빈 문자열 또는 기본값을 설정할 수 있습니다.
                setNewPost('')
            }
        }
    }, [post])

    if (!post) {
        return null // post가 아직 없을 때는 아무것도 렌더링하지 않음
    }
    const updateLink = (e) => {
        console.log('e')
    }
    const postNum = post.postNum
    return (
        <div className="right">
            <div
                className="editable-title whiteSpaceNo rightTitle"
                contentEditable="true"
                suppressContentEditableWarning={true}
                onBlur={(e) =>
                    setNewTitle(filterInput(e.currentTarget.textContent))
                }
                onInput={(e) => {
                    setNewTitle(filterInput(e.currentTarget.textContent))
                }}
            >
                {post.title}
            </div>
            {post && post.content && (
                <ReactQuill
                    className="viewQuill"
                    ref={quillRef}
                    value={JSON.parse(post.content)}
                    onChange={(value) => {
                        const valueAsString = JSON.stringify(value)
                        setNewPost(valueAsString) // 상태를 문자열로 업데이트
                        setNewContent(valueAsString)
                    }}
                />
            )}
            <div className="btn__wrap">
                <button className="update" onClick={(e) => updateLink(e)}>
                    update
                </button>
                <button>cancel</button>
            </div>
        </div>
    )
}

export default UpdateRight
