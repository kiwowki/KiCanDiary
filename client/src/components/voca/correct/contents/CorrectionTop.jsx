import React from 'react'

const CorrectionTop = ({
    correctList,
    isCorrectCheckboxChecked,
    handleCorrectCheckboxToggle,
}) => {
    return (
        <div className="contents__top">
            <div className="correctionlist__voca__title">
                <h3>WRONG</h3>
                <h3>CORRECT</h3>
            </div>
            <div className="correctionlist__voca__contents">
                {Array.isArray(correctList) &&
                    correctList.map((correct, index) => (
                        <label htmlFor="CorrectVoca" index={index} key={index}>
                            <input
                                type="checkbox"
                                id={`CorrectVoca c${index}`}
                                name={`CorrectVoca c${index}`}
                                checked={isCorrectCheckboxChecked(index)}
                                onChange={() =>
                                    handleCorrectCheckboxToggle(index)
                                }
                            />
                            <p className="wrong">{correct.wrong}</p>
                            <p className="correct">{correct.correct}</p>
                        </label>
                    ))}
            </div>
        </div>
    )
}

export default CorrectionTop
