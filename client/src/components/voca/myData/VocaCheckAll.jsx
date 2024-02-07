import React, { useState } from 'react'

const VocaCheckAll = ({ vocacheckboxListAll, handleVocaCheckboxToggleAll }) => {
    const searchClickHandler = () => {
        setInputVisible(!isInputVisible)
    }
    const [isInputVisible, setInputVisible] = useState(false)

    return (
        <div className="contents__bot">
            <div className="search__wrap">
                <span onClick={searchClickHandler}></span>
                <input
                    type="text"
                    className={`word__search 
                    ${isInputVisible ? 'input__visible' : ''}`}
                />
            </div>
            <div className="select__all">
                <label htmlFor="SelectAllBtnAll">
                    <input
                        type="checkbox"
                        id="SelectAllBtnAll"
                        name="SelectAllBtnAll"
                        checked={vocacheckboxListAll}
                        onChange={handleVocaCheckboxToggleAll}
                    />
                    <p>select all</p>
                </label>
            </div>
        </div>
    )
}

export default VocaCheckAll
