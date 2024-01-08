import React, { useRef, useState } from 'react'
import ReactQuill from 'react-quill'

const LeftPart = ({ quillRef, setTitle ,value ,setValue, mainhandleKeyPress }) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
        ],
    }
    return (
        <section className="write">
            <h3 className="blind">글쓰기</h3>
            <article className="title">
                <h2>Title</h2>
                <input
                    type="text"
                    onChange={(e) =>
                        setTitle(e.currentTarget.value)
                    }
                />
            </article>
            <article className="content">
                <h2>Story</h2>
                <ReactQuill
                    style={{
                        height: '530px',
                        marginRight: '4px',
                        marginLeft: '4px',
                    }}
                    ref={quillRef}
                    theme="snow"
                    value={value}
                    onKeyDown={mainhandleKeyPress}
                    onChange={setValue}
                    modules={modules}
                    placeholder="What's your story for today?"
                />
            </article>
        </section>
    )
}

export default LeftPart
