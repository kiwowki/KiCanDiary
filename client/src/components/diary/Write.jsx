import React from 'react'
import Header from '../layout/Header'

const Write = () => {
    return (
        <div id="wrap">
            <Header />
            <div id="write">
                <div className="write__wrap">
                    <div className="today__date">
                        <p className="box">December, 18</p>
                    </div>
                    <div className="write_main">
                        <section className="write">
                            <h3 className="blind">글쓰기</h3>
                            <article className="title">
                                <h2>Title</h2>
                                <input type="text" />
                            </article>
                            <article className="content">
                                <h2>Story</h2>
                                <textarea
                                    name="content"
                                    id="content"
                                    cols="100"
                                    rows="25"
                                ></textarea>
                            </article>
                        </section>
                        <section className="right">
                            <h2 className="blind">서치, 오류 결과 섹션</h2>
                            <input type="text" className="word__search" />
                            <div className="result">
                                <h2>Result</h2>
                                <div></div>
                            </div>
                            <div className="correction">
                                <h2>Correction</h2>
                                <div></div>
                            </div>
                        </section>
                    </div>
                    <div className="button">
                        <button className='box'>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write
