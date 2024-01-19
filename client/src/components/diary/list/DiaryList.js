import axios from 'axios'

const diaryList = async (setPostList, uid) => {
    if (uid) {
        await axios
            .get(`/api/post/list/${uid}`)
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
                    setPostList(parsedPostList)
                }
            })
            .catch((err) => {
                console.log(err, '엑시오스 ')
            })
    }
}
export default diaryList
