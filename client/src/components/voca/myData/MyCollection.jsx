import React, { useEffect, useState } from 'react'
import deleteVoca from '../deleteVoca'
import VocaCheck from './VocaCheck'
import VocaCheckAll from './VocaCheckAll'

const MyCollection = ({ vocaList, fetchVocaList, setVocaList }) => {
    const [vocacheckboxList, setVocaCheckBoxList] = useState([])
    const [vocacheckboxListAll, setvocacheckboxListAll] = useState(false)
    const isVocaCheckboxChecked = (index) => {
        return vocacheckboxList.includes(index)
    }

    const handleVocaCheckboxToggleAll = () => {
        if (vocacheckboxList.length === vocaList.length) {
            setvocacheckboxListAll(false)
            setVocaCheckBoxList([])
        } else {
            setvocacheckboxListAll(true)
            const newList = vocaList.map((_, index) => index)
            setVocaCheckBoxList(newList)
        }
    }
    const handleVocaCheckboxToggle = (i) => {
        const updatedList = [...vocacheckboxList]
        const indexPosition = updatedList.indexOf(i)

        if (indexPosition > -1) {
            setvocacheckboxListAll(false)
            updatedList.splice(indexPosition, 1)
        } else {
            updatedList.push(i)
        }
        setVocaCheckBoxList(updatedList)
        console.log(updatedList)
    }

    return (
        <div className="mycollection">
            <h2>My Collection</h2>
            <div className="contents">
                <VocaCheck
                    vocaList={vocaList}
                    isVocaCheckboxChecked={isVocaCheckboxChecked}
                    handleVocaCheckboxToggle={handleVocaCheckboxToggle}
                />

                <VocaCheckAll
                    vocacheckboxListAll={vocacheckboxListAll}
                    handleVocaCheckboxToggleAll={handleVocaCheckboxToggleAll}
                />
            </div>

            <div className="mycollection__btn">
                <button className="add__btn">Add</button>
                <button
                    className="del__btn"
                    onClick={(e) =>
                        deleteVoca(
                            e,
                            vocacheckboxList,
                            vocaList,
                            setVocaList,
                            fetchVocaList,
                            setVocaCheckBoxList,
                            setvocacheckboxListAll
                        )
                    }
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default MyCollection
