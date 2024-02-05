import React, { useEffect, useState } from 'react'
import writeVoca from '../writeVoca'
import VocaContentsTop from './contents/VocaContentsTop'
import VocaContentsBot from './contents/VocaContentsBot'

const SearchVoca = ({
    searchList,
    uid,
    fetchSearchList,
    setSearchList,
    fetchVocaList,
    setVocaList,
}) => {
    // searchList -> voca

    const [checkboxList, setCheckboxList] = useState([])
    const [checkBoxListAll, setCheckboxListAll] = useState(false)

    const handleCheckboxToggleAll = () => {
        if (checkboxList.length === searchList.length) {
            setCheckboxListAll(false)
            setCheckboxList([])
        } else {
            setCheckboxListAll(true)
            const newList = searchList.map((_, index) => index)
            setCheckboxList(newList)
        }
    }

    const handleCheckboxToggle = (i) => {
        const updatedList = [...checkboxList]
        const indexPosition = updatedList.indexOf(i)

        if (indexPosition > -1) {
            setCheckboxListAll(false)
            updatedList.splice(indexPosition, 1) // 이미 체크된 항목이라면 리스트에서 제거
        } else {
            updatedList.push(i) // 체크되지 않은 항목이라면 리스트에 추가
        }
        setCheckboxList(updatedList)
        // console.log(checkboxList)
    }

    return (
        <div className="searchlist voca__right">
            <h2>Search List</h2>
            <div className="contents">
                <VocaContentsTop
                    searchList={searchList}
                    checkboxList={checkboxList}
                    handleCheckboxToggle={handleCheckboxToggle}
                />

                <VocaContentsBot
                    checkBoxListAll={checkBoxListAll}
                    handleCheckboxToggleAll={handleCheckboxToggleAll}
                />
            </div>
            <div className="searchlist__btn">
                <button
                    className="add__btn"
                    onClick={(e) => {
                        writeVoca(
                            e,
                            checkboxList,
                            searchList,
                            uid,
                            fetchSearchList,
                            setSearchList,
                            fetchVocaList,
                            setVocaList,
                            setCheckboxList,
                            setCheckboxListAll
                        )
                    }}
                >
                    Add
                </button>
                <button className="del__btn">Delete</button>
            </div>
        </div>
    )
}

export default SearchVoca
