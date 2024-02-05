import axios from 'axios'

export const fetchSearchList = async (searchList, setSearchList, uid) => {
    if (uid) {
        await axios
            .post(`/api/voca/showsearchlist/${uid}`)
            .then((res) => {
                if (res.data.success) {
                    const reverseData = res.data.vocasearchList.reverse()
                    if (
                        JSON.stringify(reverseData) !==
                        JSON.stringify(searchList)
                    ) {
                        setSearchList(reverseData)
                    }
                } else {
                    console.log('실패')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    } else {
        console.log('아이디가없음')
    }
}
export default fetchSearchList
