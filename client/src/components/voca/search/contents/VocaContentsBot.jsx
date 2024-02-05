import React from 'react'

const VocaContentsBot = ({ checkBoxListAll, handleCheckboxToggleAll }) => {
    return (
        <div className="contents__bot">
            <div className="select__all">
                <label htmlFor="SearchVocaAll">
                    <input
                        type="checkbox"
                        id="SearchVocaAll"
                        name="SearchVocaAll"
                        checked={checkBoxListAll}
                        onChange={handleCheckboxToggleAll}
                    />
                    <p>select all</p>
                </label>
            </div>
        </div>
    )
}

export default VocaContentsBot
