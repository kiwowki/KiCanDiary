export const monthList = (currentDate, postList) => {
    const currentMonth = currentDate.toISOString().slice(0, 7)

    const currentMonthPosts = postList.filter((post) => {
        const postMonth = new Date(post.createdAt).toISOString().slice(0, 7)
        return postMonth === currentMonth
    })

    const sortedPosts = [...currentMonthPosts].sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt)
    )
    return sortedPosts
}
export default monthList
