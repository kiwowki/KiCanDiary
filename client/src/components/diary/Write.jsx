import React, { useRef, useState } from 'react'
import Header from '../layout/Header'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useParams } from 'react-router-dom'

const Write = () => {
    const [value, setValue] = useState('')
    const quillRef = useRef(null)

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
        ],
    }

    const handleSave = () => {
        const content = quillRef.current?.getEditor().getContents()
        console.log('Content to be saved:', content)
    }

    const date = useParams()
    console.log(date)

    

    return (
        <div id="wrap">
            <Header />
            <div id="write">
                <div className="write__wrap">
                    <div className="today__date">
                        <p className="box">December, 18</p>
                    </div>
                    <div className="write__main">
                        <section className="write">
                            <h3 className="blind">글쓰기</h3>
                            <article className="title">
                                <h2>Title</h2>
                                <input type="text" />
                            </article>
                            <article className="content">
                                <h2>Story</h2>
                                {/* <textarea
                                    name="content"
                                    id="content"
                                    cols="100"
                                    rows="25"
                                ></textarea> */}
                                <ReactQuill
                                    style={{ height: '530px', marginRight: '4px', marginLeft: '4px' }}
                                    ref={quillRef}
                                    theme="snow"
                                    value={value}
                                    onChange={setValue}
                                    modules={modules}
                                    placeholder="What's your story for today?"
                                />
                            </article>
                        </section>
                        <section className="right ml_30">
                            <h2 className="blind">서치, 오류 결과 섹션</h2>
                            <div className='search__wrap'><span></span><input type="text" className="word__search" /></div>
                            <div className="result">
                                <h2>Result</h2>
                                <div>
                                    <span>splendid</span>
                                    <span>madgnificant</span>
                                    <span>elegant</span>
                                    <span>grand</span>
                                </div>
                            </div>
                            <div className="correction">
                                <h2>Correction</h2>
                                <div></div>
                            </div>
                        </section>
                    </div>
                    {/* <button onClick={onClickSave}>저장</button> */}
                    <div className="button">
                        <button className="box" onClick={handleSave}>
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write
