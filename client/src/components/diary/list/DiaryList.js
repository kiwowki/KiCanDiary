import axios from 'axios'
import { finishLoading, startLoading } from '../../../reducer/loadingSlice'

const diaryList = async (setPostList, uid, dispatch) => {
    if (uid) {
        console.log(uid)
        dispatch(startLoading())
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
            .finally(() => {
                dispatch(finishLoading()) // 로딩 완료
            })
    }
}
export default diaryList
