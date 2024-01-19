import React from 'react'

const Upload = ({upload}) => {
    return (
        <div className="button">
            <button className="box" onClick={(e) => upload(e)}>
                Upload
            </button>
        </div>
    )
}

export default Upload
