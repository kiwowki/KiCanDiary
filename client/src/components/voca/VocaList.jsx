import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MyCollection from './myData/MyCollection'
import fetchSearchList from './fetchSearchList'
import fetchVocaList from './fetchVocaList'
import fetchCorrectList from './fetchCorrect'
import SearchVoca from './search/SearchVoca'
import Correction from './correct/Correction'

const VocaList = () => {
    const user = useSelector((state) => state.user)
    const uid = user.uid

    const [vocaList, setVocaList] = useState([])
    const [searchList, setSearchList] = useState([])
    // correct List
    const [correctList, setCorrectList] = useState([])

    useEffect(() => {
        fetchVocaList(setVocaList)
    }, [])
    useEffect(() => {
        fetchSearchList(setSearchList)
    }, [])

    return (
        <div id="wrap">
            <div id="vocalist" className="section__border">
                <div className="vocalist__wrap">
                    <MyCollection
                        vocaList={vocaList}
                        setVocaList={setVocaList}
                        fetchVocaList={fetchVocaList}
                    />

                    <SearchVoca
                        searchList={searchList}
                        uid={uid}
                        fetchSearchList={fetchSearchList}
                        setSearchList={setSearchList}
                        fetchVocaList={fetchVocaList}
                        setVocaList={setVocaList}
                    />

                    <Correction
                        correctList={correctList}
                        fetchCorrectList={fetchCorrectList}
                        setCorrectList={setCorrectList}
                    />
                </div>
            </div>
        </div>
    )
}

export default VocaList
