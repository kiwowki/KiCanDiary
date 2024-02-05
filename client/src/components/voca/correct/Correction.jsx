import React, { useEffect, useState } from 'react'
import deleteCorrect from '../deleteCorrect'
import CorrectionTop from './contents/CorrectionTop'
import CorrectionBot from './contents/CorrectionBot'

const Correction = ({ correctList, fetchCorrectList, setCorrectList }) => {
    const [correctcheckboxList, setCorrectCheckBoxList] = useState([])
    const [correctcheckboxListAll, setCorrectCheckBoxListAll] = useState(false)

    const isCorrectCheckboxChecked = (index) => {
        return correctcheckboxList.includes(index)
    }

    const handleCorrectCheckboxToggle = (i) => {
        const updateList = [...correctcheckboxList]
        const indexPosition = updateList.indexOf(i)

        if (indexPosition > -1) {
            setCorrectCheckBoxListAll(false)
            updateList.splice(indexPosition, 1)
        } else {
            updateList.push(i)
        }
        setCorrectCheckBoxList(updateList)
        console.log(correctcheckboxList)
    }

    const handleCorrectCheckboxToggleAll = () => {
        if (correctcheckboxList.length === correctList.length) {
            setCorrectCheckBoxListAll(false)
            setCorrectCheckBoxList([])
        } else {
            setCorrectCheckBoxListAll(true)
            const newList = correctList.map((_, index) => index)
            setCorrectCheckBoxList(newList)
        }
    }

    useEffect(() => {
        fetchCorrectList(setCorrectList)
    }, [correctList, fetchCorrectList])

    return (
        <div className="correction voca__right">
            <h2>Correction</h2>
            <div className="contents">
                <CorrectionTop
                    correctList={correctList}
                    isCorrectCheckboxChecked={isCorrectCheckboxChecked}
                    handleCorrectCheckboxToggle={handleCorrectCheckboxToggle}
                />

                <CorrectionBot
                    correctcheckboxListAll={correctcheckboxListAll}
                    handleCorrectCheckboxToggleAll={
                        handleCorrectCheckboxToggleAll
                    }
                />
            </div>

            <div className="correction__btn">
                <button className="add__btn">Add</button>
                <button
                    className="del__btn"
                    onClick={(e) =>
                        deleteCorrect(
                            correctcheckboxList,
                            correctList,
                            fetchCorrectList,
                            setCorrectList,
                            setCorrectCheckBoxList,
                            setCorrectCheckBoxListAll
                        )
                    }
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Correction
