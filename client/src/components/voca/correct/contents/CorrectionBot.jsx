import React from 'react'

const CorrectionBot = ({
    correctcheckboxListAll,
    handleCorrectCheckboxToggleAll,
}) => {
    return (
        <div className="contents__bot">
            <div className="select__all">
                <label htmlFor="SelectAllBtn">
                    <input
                        type="checkbox"
                        id="SelectAllBtn"
                        name="SelectAllBtn"
                        checked={correctcheckboxListAll}
                        onChange={handleCorrectCheckboxToggleAll}
                    />
                    <p>select all</p>
                </label>
            </div>
        </div>
    )
}

export default CorrectionBot
