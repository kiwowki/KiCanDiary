import React, { useCallback, useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import DOMPurify from 'dompurify'
import update from '../util/update'

const UpdateRight = ({ post, quillRef, postNum }) => {
    const [newPost, setNewPost] = useState()
    const [newTitle, setNewTitle] = useState()
    const [newContent, setNewContent] = useState()
    const { updatePost, cancel } = update()

    const filterInput = useCallback((input) => {
        return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] })
    }, [])

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
        if (post && post.content) {
            try {
                const parsedContent = JSON.parse(post.content)
                setNewPost(parsedContent)
                if (quillRef.current) {
                    const quillInstance = quillRef.current.getEditor()
                    quillInstance.setContents(parsedContent)
                }
            } catch (error) {
                console.error('Failed to parse post.content as JSON', error)
                setNewPost('')
            }
        }
    }, [post, quillRef])

    if (!post) {
        return null // post가 아직 없을 때는 아무것도 렌더링하지 않음
    }

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
                    style={{
                        height: '350px',
                        marginRight: '4px',
                        marginLeft: '4px',
                    }}
                    className="updateQuill"
                    modules={modules}
                    ref={quillRef}
                    value={newPost} // 상태를 사용하여 에디터의 내용을 설정합니다.
                    onChange={(content, delta, source, editor) => {
                        if (source === 'user') {
                            // 사용자의 입력에만 반응합니다.
                            const newContents = editor.getContents()
                            setNewPost(newContents) // 상태를 Quill delta 객체로 업데이트
                            setNewContent(JSON.stringify(newContents))
                        }
                    }}
                />
            )}
            <div className="btn__wrap">
                <button
                    className="update"
                    onClick={(e) =>
                        updatePost(e, newTitle, newContent, postNum, quillRef)
                    }
                >
                    update
                </button>
                <button onClick={(e) => cancel(e)}>cancel</button>
            </div>
        </div>
    )
}

export default UpdateRight
