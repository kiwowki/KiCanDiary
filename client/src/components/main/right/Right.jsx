import React, { useEffect, useState } from 'react'
import face from '../../../assets/img/pink-18.gif'
import TabDiary from './tabMenu/TabDiary'

import axios from 'axios'

const Right = ({ uid, currentDate }) => {
    const [myList, setMyList] = useState([])

    useEffect(() => {
        fetchVocaList()
    }, []) // voca 부분

    const fetchVocaList = async () => {
        try {
            const response = await axios.post('/api/voca/showvocalist')
            const reverseData = response.data.vocaList.reverse()
            const slicedData = reverseData.slice(0, 7);
            setMyList(slicedData)
        } catch (err) {
            console.log(err)
        }
    }


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
                                    {list.word}
                                </span>
                                <span className="list__value">
                                    {list.meaning}
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
