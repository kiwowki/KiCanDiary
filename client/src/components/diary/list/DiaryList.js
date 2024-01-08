import axios from "axios";

const diaryList = async (setPostList, uid) => {
    if (uid) {
        await axios.get(`/api/post/list/${uid}`)
            .then((res) => {
                if (res.data.success) {
                    setPostList(res.data.postList);
                } else {
                    console.log(res.data.error);
                }
            })
            .catch((err) => {
                console.log(err, '엑시오스 ');
            })
    }
}
export default diaryList;
