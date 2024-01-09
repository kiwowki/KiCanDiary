import React from 'react'

const ViewRight = ({ post }) => {

    if (!post) {
        return null;  // post가 아직 없을 때는 아무것도 렌더링하지 않음
    }
    return (
        <div className="right">
            <h4>{post.title}</h4>
            <p>
            </p>
        </div>
    )
}

export default ViewRight