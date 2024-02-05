import React from 'react'
import Correction from './Correction'
import Search from './Search'

<<<<<<< HEAD
const RightPart = () => {
    return (
        <section className="right ml_30">
            <h2 className="blind">서치, 오류 결과 섹션</h2>
            <Search />
            <Correction />
=======
const RightPart = ({ correctionsData, mainhandleKeyPress, uid }) => {
    return (
        <section className="right ml_30">
            <h2 className="blind">서치, 오류 결과 섹션</h2>
            <Search uid={uid} />
            <Correction
                correctionsData={correctionsData}
                mainhandleKeyPress={mainhandleKeyPress}
                uid={uid}
            />
>>>>>>> master
        </section>
    )
}

export default RightPart
