import React, { useEffect, useState } from 'react'

import axios from 'axios'

export default function DiaryVocaList() {
    const [myList, setMyList] = useState([])

    useEffect(() => {
        fetchVocaList()
    }, [])

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
        <>
            <h3 className="title">Voca List</h3>
            <ul>
                {myList.map((list, key) => (
                    <li key={key}>
                        <span>{list.word}</span>
                        <span>{list.meaning}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}
