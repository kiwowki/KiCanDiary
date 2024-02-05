import React from 'react'

const VocaCheck = ({
    vocaList,
    isVocaCheckboxChecked,
    handleVocaCheckboxToggle,
}) => {
    return (
        <div className="contents__top">
            <div className="mycollection__voca__title">
                <h3>ENGLISH</h3>
                <h3>KOREAN</h3>
            </div>
            <div className="mycollection__voca__contents">
                {Array.isArray(vocaList) &&
                    vocaList.map((voca, index) => (
                        <label htmlFor="SelectBtnAll" index={index} key={index}>
                            <input
                                type="checkbox"
                                id={`SelectBtnAll m${index}`}
                                name={`SelectBtnAll m${index}`}
                                checked={isVocaCheckboxChecked(index)}
                                onChange={() => handleVocaCheckboxToggle(index)}
                            />
                            <p className="english">{voca.word}</p>
                            <p className="korean">{voca.meaning}</p>
                        </label>
                    ))}
            </div>
        </div>
    )
}

export default VocaCheck
