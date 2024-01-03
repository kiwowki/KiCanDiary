import React, { useRef, useState } from 'react'
import Header from '../layout/Header'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

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


    const [word, setWord] = useState('')
    const [translation, setTranslation] = useState('');
    const handleChange = (event) => {
        setWord(event.target.value);
    };

    const handleKeyPress = async (event) => {
        // `word` 상태 변수가 변경되었는지 확인합니다.
        if (event.key === "Enter" && word !== "") {
            console.log(word)
            try {
                const response = await axios.post("/api/translate", { search: word });
                if (response.data.success) {
                    const jsonData = JSON.parse(response.data.translation);
                    setTranslation(jsonData.message.result.translatedText)
                } else {
                    alert("번역 실패");
                }
            } catch (error) {
                console.error("번역 요청 에러:", error);
            }
        }
    };



    const handleSave = () => {
        const content = quillRef.current?.getEditor().getContents()
        console.log('Content to be saved:', content)
    }
    return (
        <div id="wrap">
            <Header />
            <div id="write" className="section__border">
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
                                    style={{
                                        height: '530px',
                                        marginRight: '4px',
                                        marginLeft: '4px',
                                    }}
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
                            <div className="search__wrap">
                                <span></span>
                                <input type="text"
                                    className="word__search"
                                    onKeyPress={handleKeyPress}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="result">
                                <h2>Result</h2>
                                <div>
                                    <span>{translation}</span>
                                </div>
                            </div>
                            <div className="correction">
                                <h2>Correction</h2>
                                <div>
                                    <ul className="correction_wrap">
                                        <li>
                                            <div className="wrong">
                                                <p className="wrong__word">
                                                    <Link to="/write">
                                                        tast
                                                    </Link>
                                                </p>
                                                <p className="wrong__reason">
                                                    철자 오류
                                                </p>
                                            </div>
                                            <span className="arrow"></span>
                                            <div className="correct">
                                                <p className="correct__word">
                                                    <Link to="/write">
                                                        test
                                                    </Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="wrong">
                                                <p className="wrong__word">
                                                    <Link to="/write">
                                                        tast
                                                    </Link>
                                                </p>
                                                <p className="wrong__reason">
                                                    철자 오류
                                                </p>
                                            </div>
                                            <span className="arrow"></span>
                                            <div className="correct">
                                                <p className="correct__word">
                                                    <Link to="/write">
                                                        test
                                                    </Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="wrong">
                                                <p className="wrong__word">
                                                    <Link to="/write">
                                                        tast
                                                    </Link>
                                                </p>
                                                <p className="wrong__reason">
                                                    철자 오류
                                                </p>
                                            </div>
                                            <span className="arrow"></span>
                                            <div className="correct">
                                                <p className="correct__word">
                                                    <Link to="/write">
                                                        test
                                                    </Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="wrong">
                                                <p className="wrong__word">
                                                    <Link to="/write">
                                                        tast
                                                    </Link>
                                                </p>
                                                <p className="wrong__reason">
                                                    철자 오류
                                                </p>
                                            </div>
                                            <span className="arrow"></span>
                                            <div className="correct">
                                                <p className="correct__word">
                                                    <Link to="/write">
                                                        test
                                                    </Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="wrong">
                                                <p className="wrong__word">
                                                    <Link to="/write">
                                                        tast
                                                    </Link>
                                                </p>
                                                <p className="wrong__reason">
                                                    철자 오류
                                                </p>
                                            </div>
                                            <span className="arrow"></span>
                                            <div className="correct">
                                                <p className="correct__word">
                                                    <Link to="/write">
                                                        test
                                                    </Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="wrong">
                                                <p className="wrong__word">
                                                    <Link to="/write">
                                                        tast
                                                    </Link>
                                                </p>
                                                <p className="wrong__reason">
                                                    철자 오류
                                                </p>
                                            </div>
                                            <span className="arrow"></span>
                                            <div className="correct">
                                                <p className="correct__word">
                                                    <Link to="/write">
                                                        test
                                                    </Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="wrong">
                                                <p className="wrong__word">
                                                    <Link to="/write">
                                                        tast
                                                    </Link>
                                                </p>
                                                <p className="wrong__reason">
                                                    철자 오류
                                                </p>
                                            </div>
                                            <span className="arrow"></span>
                                            <div className="correct">
                                                <p className="correct__word">
                                                    <Link to="/write">
                                                        test
                                                    </Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="wrong">
                                                <p className="wrong__word">
                                                    <Link to="/write">
                                                        tast
                                                    </Link>
                                                </p>
                                                <p className="wrong__reason">
                                                    철자 오류
                                                </p>
                                            </div>
                                            <span className="arrow"></span>
                                            <div className="correct">
                                                <p className="correct__word">
                                                    <Link to="/write">
                                                        test
                                                    </Link>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
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
