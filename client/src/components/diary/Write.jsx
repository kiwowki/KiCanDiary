import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Write = () => {
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

    // 구글 api부분
    const [word, setWord] = useState('')
    const [translation, setTranslation] = useState('')

    useEffect(() => {
        console.log(translation);
    }, [translation]);
    // 검색창 글씨가 바뀔때마다 word값이 바뀜

    const handleChange = (event) => {
        setWord(event.target.value)
        console.log(event)
    }
    // 엔터누르면 구글 api를 통해 결과값 제공
    const handleKeyPress = async (event) => {
        // word 상태 변수가 변경되었는지 확인합니다.

        if (event.key === 'Enter' && word !== '') {
            console.log(word)
            try {
                const response = await axios.post('/api/translate', {
                    search: word,
                })
                if (response.data.success) {
                    if (response.data.data.trans) {
                        const translatedText = response.data.data.trans
                        setTranslation((prevTranslation) => [
                            translatedText,
                            ...prevTranslation,
                        ])
                    }
                    if (
                        response.data.data.dict &&
                        response.data.data.dict[0].entry
                    ) {
                        const translatedTextArray =
                            response.data.data.dict[0].entry.map(
                                (item) => item.word
                            )
                        setTranslation((prevTranslation) => [
                            ...prevTranslation,
                            ...translatedTextArray,
                        ])

                    }
                    console.log(setTranslation)
                } else {
                    alert('번역 실패')
                }
            } catch (error) {
                console.error('번역 요청 에러:', error)
            }
        }
    };

    // 구글 단어장
    const [checkboxList, setCheckboxList] = useState([]);
    const [checkmeaning, setCheckMeaning] = useState([]);
    const isCheckboxChecked = (index) => {
        return checkboxList.includes(index)
    }
    const handleCheckboxToggle = (result) => {
        const updatedList = [...checkboxList];
        const index = updatedList.indexOf(result);

        if (index > -1) {
            updatedList.splice(index, 1); // 이미 체크된 항목이라면 리스트에서 제거
            alert("delete :" + result)
            console.log(updatedList)

        } else {
            updatedList.push(result); // 체크되지 않은 항목이라면 리스트에 추가
            alert("add :" + result)
            console.log(updatedList)
        }
        setCheckboxList(updatedList);
    };
    const renderCheckboxes = () => {
        return Array.isArray(translation) &&
            translation.map((result, index) => (
                <div key={index}>
                    <span>
                        <input
                            type="checkbox"
                            checked={isCheckboxChecked(index)}
                            onClick={() => handleCheckboxToggle(result)}
                        />
                        {result}</span>
                    <div>
                        {/* 추가로 표시할 내용이 있다면 여기에 작성 */}
                    </div>
                </div>
            ))
    }


    // Ginger api 부분
    const [value, setValue] = useState('')

    const [correctionsData, setCorrectionsData] = useState([])

    const mainhandleKeyPress = async (event) => {
        try {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault()
                const textValue = quillRef.current?.getEditor().getText()
                console.log(textValue)
                setValue(textValue)

                const response = await axios.post('/api/ginger', {
                    search: value,
                })
                if (response.data.success) {
                    // console.log(response.data.data.GingerTheDocumentResult.Corrections);

                    const newCorrectionsData =
                        response.data.data.GingerTheDocumentResult.Corrections.map(
                            (correction) => ({
                                mistakeText: correction.MistakeText,
                                suggestions: correction.Suggestions.map(
                                    (suggestion) => ({
                                        text: suggestion.Text,
                                        confidence: suggestion.Confidence,
                                        category:
                                            suggestion.CategoryDescription,
                                    })
                                ),
                            })
                        )

                    console.log(newCorrectionsData)
                    setCorrectionsData(newCorrectionsData)
                } else {
                    alert('문법 요청 실패')
                }
            }
        } catch (err) {
            console.log('문법 요청 에러:', err)
        }
    }

    const [title, setTitle] = useState()
    const { date } = useParams()
    const [dateObj, setDate] = useState({
        year: '',
        month: '',
        day: '',
    })
    const user = useSelector((state) => state.user)
    let navigate = useNavigate()
    useEffect(() => {
        if (!user.accessToken) {
            alert('로그인한 회원만 작성이 가능합니다.')
            navigate('/login')
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSave = async (e) => {
        e.preventDefault()
        if (title && value) {
            const content = quillRef.current?.getEditor().getContents()

            console.log('Content to be saved:', content.ops[0])
            let body = {
                title: title,
                content: content.ops[0],
            }

            axios
                .post('/api/post/write', body)
                .then((res) => {
                    if (res.status.success) {
                        alert('작성 성공')
                    }
                })
                .catch((err) => {
                    console.log(err)
                    alert('axios')
                })
        } else {
            alert('실패')
        }
    }

    useEffect(() => {
        if (date && typeof date === 'string') {
            const [year, month, day] = date.split('-')
            setDate({ year, month, day })
        }
    }, [date])

    return (
        <div id="wrap">
            {/*<Header /> */}
            <div id="write">
                <div className="write__wrap">
                    <div className="today__date">
                        <p className="box">
                            {dateObj.year}, {dateObj.month}{' '}
                        </p>

                    </div>
                    <div className="write__main">
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
                                    // defaultValue={value}
                                    theme="snow"
                                    value={value}
                                    onKeyDown={mainhandleKeyPress}
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
                                <input
                                    type="text"
                                    className="word__search"
                                    onKeyPress={handleKeyPress}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="result">
                                <h2>Result</h2>
                                <div>
                                    <div className="result_wrap">

                                        {renderCheckboxes()}
                                    </div >
                                </div >
                            </div >
                            <div className="correction">
                                <h2>Correction</h2>
                                <div>
                                    <ul className="correction_wrap">
                                        {correctionsData.map(
                                            (correction, index) => (
                                                <li key={index}>
                                                    <div className="wrong">
                                                        <p className="wrong__word">
                                                            <Link to="/write">
                                                                {
                                                                    correction.mistakeText
                                                                }
                                                            </Link>
                                                        </p>
                                                    </div>
                                                    <span className="arrow"></span>
                                                    <div className="correct">
                                                        <p className="correct__word">
                                                            {correction.suggestions.map(
                                                                (
                                                                    suggestion,
                                                                    sIndex
                                                                ) => (
                                                                    <React.Fragment
                                                                        key={
                                                                            sIndex
                                                                        }
                                                                    >
                                                                        <Link to="/write">
                                                                            {
                                                                                suggestion.text
                                                                            }
                                                                        </Link>
                                                                        {sIndex !==
                                                                            correction
                                                                                .suggestions
                                                                                .length -
                                                                            1 && (
                                                                                <span>
                                                                                    ,
                                                                                    &nbsp;{' '}
                                                                                </span>
                                                                            )}
                                                                    </React.Fragment>
                                                                )
                                                            )}
                                                        </p>
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul >
                                </div >
                            </div >
                        </section >
                    </div >
                    {/* <button onClick={onClickSave}>저장</button> */}
                    < div className="button" >
                        <button className="box" onClick={(e) => handleSave(e)}>

                            Upload
                        </button>
                    </div>
                </div >
            </div >
        </div >
    )
}
export default Write