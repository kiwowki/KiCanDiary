const getPostsByDate = (date, postList) => {
    return postList.filter(post => {
        const postDate = new Date(post.createdAt);
        return (postDate.getFullYear() === date.getFullYear() &&
            postDate.getMonth() === date.getMonth() &&
            postDate.getDate() === date.getDate())
    })
}

export default getPostsByDate