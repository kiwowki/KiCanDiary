import axios from "axios"
import { getFormattedDate } from "../../../util/calendar/date/dateFormat"

export const fetchPost = async (postNum,setPost,setDate) => {
    await axios
        .get(`/api/post/view/${postNum}`)
        .then((res) => {
            if (res.status === 200) {
                setPost(res.data.post)
                setDate(getFormattedDate(res.data.post.createdAt))
            }
        })
        .catch((err) => {
            console.log(err)
            alert('no')
        })
}
export default fetchPost