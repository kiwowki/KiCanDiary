import React from 'react'

const VocaContentsTop = ({
    searchList,
    handleCheckboxToggle,
    checkboxList,
}) => {
    const isCheckboxChecked = (index) => {
        return checkboxList.includes(index)
    }

    return (
        <div className="contents__top">
            <div className="searchlist__voca__title">
                <h3>MEANING</h3>
                <h3>WORD</h3>
            </div>
            <div className="searchlist__voca__contents">
                {Array.isArray(searchList) &&
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
                    ))}
            </div>
        </div>
    )
}

export default VocaContentsTop
