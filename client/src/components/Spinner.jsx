import React from 'react'
import { BeatLoader } from 'react-spinners'
import spin from '../assets/img/SpinGIF.gif'
const Spinner = () => {
    return (
        <div className="spin">
            <img src={spin} alt="" />
        </div>
    )
}

export default Spinner
