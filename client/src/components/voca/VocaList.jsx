import React from 'react'

const VocaList = () => {
    return (
        <div id="wrap">
            <div id="vocalist" className="section__border">
                <div className="vocalist__wrap">
                    <div className="mycollection">
                        <h2>My Collection</h2>
                    </div>
                    <div className="searchlist voca__right">
                        <h2>search List</h2>
                        <div className="contents">
                            <div className="searchlist__voca__title">
                                <h3>MEANING</h3>
                                <h3>WORD</h3>
                            </div>
                            <div className="searchlist__voca__contents">
                                <label htmlFor="searchlist_1">
                                    <input
                                        type="checkbox"
                                        id="searchlist_1"
                                        name="searchlist_1"
                                    />
                                    <p>"searchlist_1"</p>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="correction voca__right">
                        <h2>Correction</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VocaList
