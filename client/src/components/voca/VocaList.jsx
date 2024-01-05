import React, { useState } from 'react'

const VocaList = () => {
    const [isInputVisible, setInputVisible] = useState(false)

    const searchClickHandler = () => {
        setInputVisible(!isInputVisible)
    }

    return (
        <div id="wrap">
            <div id="vocalist" className="section__border">
                <div className="vocalist__wrap">
                    <div className="mycollection">
                        <h2>My Collection</h2>
                        <div className="contents">
                            <div className="contents__top">
                                <div className="mycollection__voca__title">
                                    <h3>ENGLISH</h3>
                                    <h3>KOREAN</h3>
                                </div>
                                <div className="mycollection__voca__contents">
                                    <label htmlFor="mycollection m1">
                                        <input
                                            type="checkbox"
                                            id="mycollection m1"
                                            name="mycollection m1"
                                        />
                                        <p className="english">
                                            elegant, grand, magnificant
                                        </p>
                                        <p className="korean">멋진</p>
                                    </label>
                                    <label htmlFor="mycollection m2">
                                        <input
                                            type="checkbox"
                                            id="mycollection m2"
                                            name="mycollection m2"
                                        />
                                        <p className="english">
                                            elegant, grand, magnificant
                                        </p>
                                        <p className="korean">멋진</p>
                                    </label>
                                    <label htmlFor="mycollection m3">
                                        <input
                                            type="checkbox"
                                            id="mycollection m3"
                                            name="mycollection m3"
                                        />
                                        <p className="english">
                                            elegant, grand, magnificant
                                        </p>
                                        <p className="korean">멋진</p>
                                    </label>
                                </div>
                            </div>
                            <div className="contents__bot">
                                <div className="search__wrap">
                                    <span onClick={searchClickHandler}></span>
                                    <input
                                        type="text"
                                        className={`word__search ${
                                            isInputVisible
                                                ? 'input__visible'
                                                : ''
                                        }`}
                                    />
                                </div>
                                <div className="select__all">
                                    <label htmlFor="SelectAllBtn">
                                        <input
                                            type="checkbox"
                                            id="SelectAllBtn"
                                            name="SelectAllBtn"
                                        />
                                        <p>select all</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mycollection__btn">
                            <button className="add__btn">Add</button>
                            <button className="del__btn">Delete</button>
                        </div>
                    </div>
                    <div className="searchlist voca__right">
                        <h2>Search List</h2>
                        <div className="contents">
                            <div className="contents__top">
                                <div className="searchlist__voca__title">
                                    <h3>MEANING</h3>
                                    <h3>WORD</h3>
                                </div>
                                <div className="searchlist__voca__contents">
                                    <label htmlFor="SearchVoca s1">
                                        <input
                                            type="checkbox"
                                            id="SearchVoca s1"
                                            name="SearchVoca s1"
                                        />
                                        <p className="meaning">멋진</p>
                                        <p className="word">
                                            elegant, grand, magnificant
                                        </p>
                                    </label>
                                    <label htmlFor="SearchVoca s2">
                                        <input
                                            type="checkbox"
                                            id="SearchVoca s2"
                                            name="SearchVoca s2"
                                        />
                                        <p className="meaning">
                                            멋진멋진멋진멋진멋진
                                        </p>
                                        <p className="word">
                                            elegant, grand, magnificant,
                                            magnificant
                                        </p>
                                    </label>
                                    <label htmlFor="SearchVoca s3">
                                        <input
                                            type="checkbox"
                                            id="SearchVoca s3"
                                            name="SearchVoca s3"
                                        />
                                        <p className="meaning">멋진</p>
                                        <p className="word">elegant</p>
                                    </label>
                                </div>
                            </div>
                            <div className="contents__bot">
                                <div className="select__all">
                                    <label htmlFor="SelectAllBtn">
                                        <input
                                            type="checkbox"
                                            id="SelectAllBtn"
                                            name="SelectAllBtn"
                                        />
                                        <p>select all</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="searchlist__btn">
                            <button className="add__btn">Add</button>
                            <button className="del__btn">Delete</button>
                        </div>
                    </div>
                    <div className="correction voca__right">
                        <h2>Correction</h2>
                        <div className="contents">
                            <div className="contents__top">
                                <div className="correctionlist__voca__title">
                                    <h3>WRONG</h3>
                                    <h3>CORRECT</h3>
                                </div>
                                <div className="correctionlist__voca__contents">
                                    <label htmlFor="CorrectVoca c1">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c1"
                                            name="CorrectVoca c1"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c2">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c2"
                                            name="CorrectVoca c2"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c3">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c3"
                                            name="CorrectVoca c3"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c4">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c4"
                                            name="CorrectVoca c4"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c5">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c5"
                                            name="CorrectVoca c5"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c6">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c6"
                                            name="CorrectVoca c6"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c7">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c7"
                                            name="CorrectVoca c7"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c8">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c8"
                                            name="CorrectVoca c8"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c9">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c9"
                                            name="CorrectVoca c9"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c10">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c10"
                                            name="CorrectVoca c10"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c11">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c11"
                                            name="CorrectVoca c11"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c12">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c12"
                                            name="CorrectVoca c12"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                    <label htmlFor="CorrectVoca c13">
                                        <input
                                            type="checkbox"
                                            id="CorrectVoca c13"
                                            name="CorrectVoca c13"
                                        />
                                        <p className="wrong">investmant</p>
                                        <p className="correct">investment</p>
                                    </label>
                                </div>
                            </div>
                            <div className="contents__bot">
                                <div className="select__all">
                                    <label htmlFor="SelectAllBtn">
                                        <input
                                            type="checkbox"
                                            id="SelectAllBtn"
                                            name="SelectAllBtn"
                                        />
                                        <p>select all</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="correction__btn">
                            <button className="add__btn">Add</button>
                            <button className="del__btn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VocaList
