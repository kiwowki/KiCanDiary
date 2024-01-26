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
        fetchVocaList();
    }, [])

    // search voca List
    const [searchList, setSearchList] = useState([])
    const fetchSearchList = async () => {
        try {
            const response = await axios.post('/api/voca/showsearchlist')
            const reverseData = response.data.vocasearchList.reverse();
            setSearchList(reverseData)
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
        // console.log(checkboxList)
    }

    const handleCheckboxToggleAll = () => {
        if (checkboxList.length === searchList.length) {
            setCheckboxListAll(false)
            setCheckboxList([]);
        } else {
            setCheckboxListAll(true)
            const newList = searchList.map((_, index) => index);
            setCheckboxList(newList);
        }
        console.log(checkboxList)
    }

    // layout
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
    const writeVoca = async () => {
        const selectedWords = checkboxList.map(index => searchList[index]);
        console.log(selectedWords);
        try {
            const response = await axios.post('/api/voca/vocalist', { data: selectedWords, uid: user.uid })
            if (response.data.success) {
                alert("단어 저장 합니다.");
                fetchSearchList();
                fetchVocaList();
                setCheckboxList([]);
                setCheckboxListAll(false)
            } else {
                alert("단어 저장 실패");
            }
        } catch (err) {
            console.log(err);
        }
    }


    // voca List
    const [vocaList, setVocaList] = useState([])
    const fetchVocaList = async () => {
        try {
            const response = await axios.post('/api/voca/showvocalist')
            const reverseData = response.data.vocaList.reverse();
            setVocaList(reverseData)
        } catch (err) {
            console.log(err)
        }
    }

    const [vocacheckboxList, setVocaCheckBoxList] = useState([])
    const [vocacheckboxListAll, setvocacheckboxListAll] = useState(false)
    const isVocaCheckboxChecked = (index) => {
        return vocacheckboxList.includes(index)
    }

    const handleVocaCheckboxToggle = (i) => {
        const updatedList = [...vocacheckboxList];
        const indexPosition = updatedList.indexOf(i);

        if (indexPosition > -1) {
            setvocacheckboxListAll(false)
            updatedList.splice(indexPosition, 1)
        } else {
            updatedList.push(i)
        }
        setVocaCheckBoxList(updatedList);
        console.log(updatedList)
    }

    const handleVocaCheckboxToggleAll = () => {
        if (vocacheckboxList.length === vocaList.length) {
            setvocacheckboxListAll(false)
            setVocaCheckBoxList([]);
        } else {
            setvocacheckboxListAll(true)
            const newList = vocaList.map((_, index) => index);
            setVocaCheckBoxList(newList)
        }
    }

    // 단어 삭제
    const deleteVoca = async () => {
        const selectedWords = vocacheckboxList.map(index => vocaList[index]);
        console.log(selectedWords);
        try {
            if (window.confirm('확인버튼을 누르면 선택한 단어가 단어장에서 삭제됩니다. 정말 삭제하시겠습니까?')) {
                let body = selectedWords.map(item => item._id);
                axios
                    .post('/api/voca/delete', { id: body })
                    .then((response) => {
                        if (response.data.success) {
                            alert('단어가 삭제되었습니다.');
                            fetchVocaList();
                            setVocaCheckBoxList([])
                            setvocacheckboxListAll(false)
                        }
                    });
            }
        } catch (err) {
            console.log(err);
            alert('단어 삭제가 실패되었습니다.');
        }
    };

    // layout
    const vocarendercheckboxes = () => {
        return Array.isArray(vocaList) &&

            vocaList.map((voca, index) => (
                <label htmlFor="mycollection" index={index}>
                    <input
                        type="checkbox"
                        id={`mycollection m${index}`}
                        name={`mycollection m${index}`}
                        checked={isVocaCheckboxChecked(index)}
                        onChange={() => handleVocaCheckboxToggle(index)}
                    />
                    <p className="english">{voca.word}</p>
                    <p className="korean">{voca.meaning}</p>
                </label>
            ))
    }

    const vocarenderCheckboxesAll = () => {
        return (
            <label htmlFor="SelectAllBtn">
                <input
                    type="checkbox"
                    id="SelectAllBtn"
                    name="SelectAllBtn"
                    checked={vocacheckboxListAll}
                    onChange={handleVocaCheckboxToggleAll}
                />
                <p>select all</p>
            </label>
        )
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
                                    {vocarendercheckboxes()}
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
                                    {vocarenderCheckboxesAll()}
                                </div>
                            </div>
                        </div>

                        <div className="mycollection__btn">
                            <button className="add__btn">Add</button>
                            <button className="del__btn" onClick={deleteVoca}>Delete</button>
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
                            <button className="add__btn" onClick={writeVoca}>Add</button>
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
