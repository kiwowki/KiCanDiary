import React from 'react'

const DiaryView = () => {
    return (
        <div id="wrap">
            <div id="diaryview" className="section__border">
                <div className="diaryview__wrap">
                    <div className="today">
                        <h3>December 07, 2023</h3>
                    </div>
                    <div className="detail">
                        <div className="left">
                            <p></p>
                        </div>
                        <span></span>
                        <div className="right">
                            <h4>Today It was boring.</h4>
                            <p>
                                Today, I wrote my portfolio,
                                <br />
                                I had a lot of thoughts about what content to
                                include, but it was quite enjoyable.
                                <br />
                                <br />
                                Reflecting on my past experience and
                                achievements,
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiaryView
