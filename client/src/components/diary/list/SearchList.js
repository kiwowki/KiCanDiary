import axios from 'axios'

export const searchList = async (e, uid, keyword, setSearchResult) => {
    e.preventDefault()
    if (keyword) {
        let body = {
            content: keyword,
            uid: uid,
        }

        await axios
            .post('/api/post/search/', body)
            .then((res) => {
                if (res.data.success) {
                    const parsedPostList = res.data.postList.map((post) => {
                        try {
                            return {
                                ...post,
                                content: JSON.parse(post.content),
                            }
                        } catch (err) {
                            console.error('json parse', err)
                            return post
                        }
                    })
                    setSearchResult(parsedPostList)
                    console.log('검색확인')
                }
            })
            .catch((err) => {
                console.log(err)
                alert('axios')
            })
    }
}
export default searchList
