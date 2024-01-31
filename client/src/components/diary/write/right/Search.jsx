import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Search = () => {
    
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
    }
    return (
        <>
            <div className="search__wrap">
                <span></span>
                <input
                    type="text"
                    className="word__search"
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    placeholder='Search for words in Korean'
                />
            </div>
            <div className="result">
                <h2>Result</h2>
                <div>
                    <div className="result_wrap">
                        {Array.isArray(translation) &&
                            translation.map((result, index) => (
                                <div key={index}>
                                    {result}
                                    <div>
                                        {/* 추가로 표시할 내용이 있다면 여기에 작성 */}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
