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
        let isMounted = true
        if (isMounted) {
            fetchVocaList(vocaList, setVocaList, uid)
        }

        return () => {
            isMounted = false
        }
    }, [uid])

    useEffect(() => {
        fetchSearchList(searchList, setSearchList, uid)
    }, [searchList, uid])

    useEffect(() => {
        fetchCorrectList(correctList, setCorrectList, uid)
    }, [correctList, uid])

    console.log(vocaList)
    console.log(searchList)
    console.log(correctList)

    return (
        <div id="wrap">
            <div id="vocalist" className="section__border">
                <div className="vocalist__wrap">
                    <MyCollection
                        vocaList={vocaList}
                        setVocaList={setVocaList}
                        fetchVocaList={fetchVocaList}
                        uid={uid}
                    />

                    <SearchVoca
                        searchList={searchList}
                        vocaList={vocaList}
                        uid={uid}
                        fetchSearchList={fetchSearchList}
                        setSearchList={setSearchList}
                        fetchVocaList={fetchVocaList}
                        setVocaList={setVocaList}
                    />

                    <Correction
                        correctList={correctList}
                        setCorrectList={setCorrectList}
                        uid={uid}
                    />
                </div>
            </div>
        </div>
    )
}

export default VocaList
