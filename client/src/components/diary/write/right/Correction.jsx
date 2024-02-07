import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Correction = ({ correctionsData, uid }) => {
    const submitGingerList = async (e) => {
        e.preventDefault()
        console.log(uid)
        const List = []
        console.log(correctionsData)

        if (correctionsData.length > 0) {
            const List = correctionsData.flatMap((correction) =>
                correction.suggestions.map((suggestion) => [
                    correction.mistakeText,
                    suggestion.text,
                ])
            )
            try {
                const response = await axios.post('/api/voca/correctlist', {
                    data: List,
                    uid: uid,
                })
                if (response.data.success) {
                    alert('단어 저장 성공')
                } else {
                    alert('단어 저장 실패')
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div className="correction">
            <h2>Correction</h2>
            <div>
                <ul className="correction_wrap">
                    <div>
                        {correctionsData.map((correction, index) => (
                            <li key={index}>
                                <div className="wrong">
                                    <p className="wrong__word">
                                        <Link to="#">
                                            {correction.mistakeText}
                                        </Link>
                                    </p>
                                </div>
                                <span className="arrow"></span>
                                <div className="correct">
                                    <p className="correct__word">
                                        {correction.suggestions.map(
                                            (suggestion, sIndex) => (
                                                <React.Fragment key={sIndex}>
                                                    <Link to="#">
                                                        {suggestion.text}
                                                    </Link>
                                                    {sIndex !==
                                                        correction.suggestions
                                                            .length -
                                                            1 && (
                                                        <span>, &nbsp; </span>
                                                    )}
                                                </React.Fragment>
                                            )
                                        )}
                                    </p>
                                </div>
                            </li>
                        ))}
                        <button
                            className="submitGingerList"
                            onClick={(e) => submitGingerList(e)}
                        >
                            save
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Correction
