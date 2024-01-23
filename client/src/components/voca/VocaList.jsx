import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const VocaList = () => {
    const user = useSelector((state) => state.user)
    const [isInputVisible, setInputVisible] = useState(false)

    const searchClickHandler = () => {
        setInputVisible(!isInputVisible)
    }

    useEffect(() => {
        fetchSearchList();

    }, [])

    // search voca List
    const [searchList, setSearchList] = useState([])
    const fetchSearchList = async () => {
        try {
            const response = await axios.post('/api/voca/showsearchlist')
            setSearchList(response.data.vocasearchList)
            // console.log(response.data.vocasearchList)
        } catch (err) {
            console.log(err)
        }
    }

    // searchList -> voca
    const [checkboxList, setCheckboxList] = useState([]);
    const [checkBoxListAll, setCheckboxListAll] = useState(false)

    const isCheckboxChecked = (index) => {
        return checkboxList.includes(index)
    }

    const handleCheckboxToggle = (i) => {
        const updatedList = [...checkboxList];
        const indexPosition = updatedList.indexOf(i);

        if (indexPosition > -1) {
            setCheckboxListAll(false)
            updatedList.splice(indexPosition, 1); // 이미 체크된 항목이라면 리스트에서 제거
        } else {
            updatedList.push(i); // 체크되지 않은 항목이라면 리스트에 추가
        }
        setCheckboxList(updatedList);
        console.log(checkboxList)
    }

    const handleCheckboxToggleAll = () => {
        if (checkboxList.length === searchList.length) {
            // If all checkboxes are currently selected, unselect all
            setCheckboxListAll(false)
            setCheckboxList([]);
        } else {
            // If not all checkboxes are selected, select all
            setCheckboxListAll(true)
            const newList = searchList.map((_, index) => index);
            setCheckboxList(newList);
        }
        console.log(checkboxList)
    }

    const renderCheckboxes = () => {
        return Array.isArray(searchList) &&
            searchList.map((search, index) => (
                <div key={index}>
                    <label htmlFor="SearchVoca">
                        <input
                            type="checkbox"
                            id={`SearchVoca s${index}`}
                            name={`SearchVoca s${index}`}
                            checked={isCheckboxChecked(index)}
                            onChange={() => handleCheckboxToggle(index)}
                        />
                        <p className="meaning">{search.word}</p>
                        <p className="word">{search.meaning}</p>
                    </label>
                </div>
            ))
    }

    const renderCheckboxesAll = () => {
        return (
            <label htmlFor="SelectAllBtn">
                <input
                    type="checkbox"
                    id="SelectAllBtn"
                    name="SelectAllBtn"
                    checked={checkBoxListAll}
                    onClick={handleCheckboxToggleAll}
                />
                <p>select all</p>
            </label>
        )
    }

    // 단어 voca에 저장
    const wirteVoca = async () => {
        const selectedWords = checkboxList.map(index => searchList[index]);
        // console.log(selectedWords);
        try {
            const response = await axios.post('/api/voca/vocalist', { data: selectedWords, uid: user.uid })
            if (response.data.success) {
                alert("단어 저장 성공");
            } else {
                alert("단어 저장 실패");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div id="wrap">
            <div id="vocalist" className="section__border">
                <div className="vocalist__wrap">
                    <div className="mycollection">
                        <h2>My Collection</h2>
                        <div className="contents">
                            <div className="contents__top">
                                <div className="mycollection__voca__title">
                                    <h3>ENGLISH</h3>
                                    <h3>KOREAN</h3>
                                </div>
                                <div className="mycollection__voca__contents">
                                    <label htmlFor="mycollection m1">
                                        <input
                                            type="checkbox"
                                            id="mycollection m1"
                                            name="mycollection m1"
                                        />
                                        <p className="english">


                                        </p>
                                        <p className="korean">멋진</p>
                                    </label>
                                </div>
                            </div>
                            <div className="contents__bot">
                                <div className="search__wrap">
                                    <span onClick={searchClickHandler}></span>
                                    <input
                                        type="text"
                                        className={`word__search ${isInputVisible
                                            ? 'input__visible'
                                            : ''
                                            }`}
                                    />
                                </div>
                                <div className="select__all">
                                    <label htmlFor="SelectAllBtn">
                                        <input
                                            type="checkbox"
                                            id="SelectAllBtn"
                                            name="SelectAllBtn"
                                        />
                                        <p>select all</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mycollection__btn">
                            <button className="add__btn">Add</button>
                            <button className="del__btn">Delete</button>
                        </div>
                    </div>

                    <div className="searchlist voca__right">
                        <h2>Search List</h2>
                        <div className="contents">
                            <div className="contents__top">
                                <div className="searchlist__voca__title">
                                    <h3>MEANING</h3>
                                    <h3>WORD</h3>
                                </div>
                                <div className="searchlist__voca__contents">
                                    {renderCheckboxes()}
                                </div>
                            </div>
                            <div className="contents__bot">
                                <div className="select__all">
                                    {renderCheckboxesAll()}
                                </div>
                            </div>
                        </div>
                        <div className="searchlist__btn">
                            <button className="add__btn" onClick={wirteVoca}>Add</button>
                            <button className="del__btn">Delete</button>
                        </div>
                    </div>

                    <div className="correction voca__right">
                        <h2>Correction</h2>
                        <div className="contents">
                            <div className="contents__top">
                                <div className="correctionlist__voca__title">
                                    <h3>WRONG</h3>
                                    <h3>CORRECT</h3>
                                </div>
                                <div className="correctionlist__voca__contents">
                                    <label htmlFor="CorrectVoca c1">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c1"
                                            name="CorrectVoca c1"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c2">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c2"
                                            name="CorrectVoca c2"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c3">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c3"
                                            name="CorrectVoca c3"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c4">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c4"
                                            name="CorrectVoca c4"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c5">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c5"
                                            name="CorrectVoca c5"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c6">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c6"
                                            name="CorrectVoca c6"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c7">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c7"
                                            name="CorrectVoca c7"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c8">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c8"
                                            name="CorrectVoca c8"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c9">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c9"
                                            name="CorrectVoca c9"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c10">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c10"
                                            name="CorrectVoca c10"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c11">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c11"
                                            name="CorrectVoca c11"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c12">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c12"
                                            name="CorrectVoca c12"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c13">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c13"
                                            name="CorrectVoca c13"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                </div>
                            </div>
                            <div className="contents__bot">
                                <div className="select__all">
                                    <label htmlFor="SelectAllBtn">
                                        <input
                                            type="checkbox"
                                            id="SelectAllBtn"
                                            name="SelectAllBtn"
                                        />
                                        <p>select all</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="correction__btn">
                            <button className="add__btn">Add</button>
                            <button className="del__btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VocaList
