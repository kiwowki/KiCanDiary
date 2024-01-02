import React, { useEffect, useRef, useState } from 'react'
import Header from '../layout/Header'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Write = () => {
    const [value, setValue] = useState('')
    const quillRef = useRef(null)
    const [title, setTitle] = useState();

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
        ],
    }

    const handleSave = async (e) => {
        e.preventDefault();
        if(title && value) {
            const content = quillRef.current?.getEditor().getContents()
            
            console.log('Content to be saved:', content.ops[0])
            let body = {
                title: title,
                content: content.ops[0]
            }

            axios.post("/api/post", body).then((res)=> {
                if(res.status.success) {
                    alert("작성 성공")
                } 
            }).catch((err) => {
                console.log(err)
                alert("axios")
            })

        } else {
            alert("실패")
        }
    }

    const {date} = useParams()
    const [dateObj, setDate] = useState({
        year: '',
        month: '',
        day: ''
    })
    

    useEffect(() => {
        if(date && typeof date === 'string'){
            const [year, month, day] = date.split('-');
            setDate({year, month, day})
        }
    }, [date])

    

    return (
        <div id="wrap">
            {/*<Header /> */}
            <div id="write">
                <div className="write__wrap">
                    <div className="today__date">
                        <p className="box">{dateObj.year}, {dateObj.month} </p>
                    </div>
                    <div className="write__main">
                        <section className="write">
                            <h3 className="blind">글쓰기</h3>
                            <article className="title">
                                <h2>Title</h2>
                                <input type="text" onChange={(e) => setTitle(e.currentTarget.value)} />
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
                        <button className="box" onClick={(e) => handleSave(e)}>
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write
