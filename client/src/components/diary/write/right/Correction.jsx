import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Correction = ({ correctionsData, mainhandleKeyPress }) => {
    
    return (
        <div className="correction">
            <h2>Correction</h2>
            <div>
                <ul className="correction_wrap">
                    {correctionsData.map(
                        (correction, index) => (
                            <li key={index}>
                                <div className="wrong">
                                    <p className="wrong__word">
                                        <Link to="/write">
                                            {
                                                correction.mistakeText
                                            }
                                        </Link>
                                    </p>
                                </div>
                                <span className="arrow"></span>
                                <div className="correct">
                                    <p className="correct__word">
                                        {correction.suggestions.map(
                                            (
                                                suggestion,
                                                sIndex
                                            ) => (
                                                <React.Fragment
                                                    key={
                                                        sIndex
                                                    }
                                                >
                                                    <Link to="/write">
                                                        {
                                                            suggestion.text
                                                        }
                                                    </Link>
                                                    {sIndex !==
                                                        correction
                                                            .suggestions
                                                            .length -
                                                        1 && (
                                                            <span>
                                                                ,
                                                                &nbsp;{' '}
                                                            </span>
                                                        )}
                                                </React.Fragment>
                                            )
                                        )}
                                    </p>
                                </div>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Correction
