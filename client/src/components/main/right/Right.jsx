import React, { useEffect, useState } from 'react'
import face from '../../../assets/img/pink-18.gif'
import vocaData from '../../../Data/tabData/vocaData'

import TabDiary from './TabDiary'

const Right = ({ uid, currentDate }) => {
    const [myList, setMyList] = useState([])

    useEffect(() => {
        setMyList(vocaData)
    }, []) // voca 부분

    return (
        <div className="right pt50">
            <div className="main__diary">
                <TabDiary uid={uid} currentDate={currentDate} />

                <div className="voca__list pt6rem">
                    <div className="list__title mb20">
                        <div className="tit">
                            <p className="whiteSpaceNo">vocabulary List</p>
                        </div>
                        <div className="voca__img">
                            <img src={face} alt="" />
                        </div>
                    </div>
                    <div className="all__list">
                        {myList.map((list, key) => (
                            <p className="my__list" key={key}>
                                <span className="list__key pl50">
                                    {list.key}
                                </span>
                                <span className="list__value">
                                    {list.value}
                                </span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Right
