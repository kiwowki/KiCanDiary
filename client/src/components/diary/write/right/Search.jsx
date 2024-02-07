import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Search = ({ uid }) => {
    // 구글 api부분
    const [word, setWord] = useState('')
    const [translation, setTranslation] = useState('')

    useEffect(() => {
        console.log(translation)
    }, [translation])
    // 검색창 글씨가 바뀔때마다 word값이 바뀜

    const handleChange = (event) => {
        setWord(event.target.value)
        console.log(event)
    }

    // 엔터누르면 구글 api를 통해 결과값 제공
    const handleKeyPress = async (event) => {
        // word 상태 변수가 변경되었는지 확인합니다.

        if (event.key === 'Enter' && word !== '') {
            // console.log(word)
            try {
                const response = await axios.post('/api/translate', {
                    search: word,
                })
                if (response.data.success) {
                    if (response.data.data.trans) {
                        const translatedText = response.data.data.trans
                        // setTranslation((prevTranslation) => [
                        setTranslation(() => [
                            translatedText,
                            // ...prevTranslation,
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
                        setTranslation(() => [
                            // ...prevTranslation,
                            ...translatedTextArray,
                        ])
                    }
                } else {
                    alert('번역 실패')
                }
            } catch (error) {
                console.error('번역 요청 에러:', error)
            }
        }
    }
    // 구글 단어장
    const submitSearchList = async () => {
        const List = []
        if (translation.length > 0) {
            for (let i = 0; i < translation.length; i++) {
                const searchList = [word, translation[i]]
                List.push(searchList)
            }
            try {
                const response = await axios.post('/api/voca/searchlist', {
                    data: List,
                    uid: uid,
                })
                if (response.data.success) {
                    alert('단어 저장 성공')
                } else {
                    alert('단어 저장 실패')
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    const renderCheckboxes = () => {
        return (
            <div>
                {Array.isArray(translation) &&
                    translation.map((result, index) => (
                        <span key={index}>{result}</span>
                    ))}
                <button className="submitSearchList" onClick={submitSearchList}>
                    save
                </button>
            </div>
        )
    }

    return (
        <>
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
                    <div className="result_wrap">{renderCheckboxes()}</div>
                </div>
            </div>
        </>
    )
}

export default Search
