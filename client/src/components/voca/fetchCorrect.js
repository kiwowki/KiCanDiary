import axios from 'axios'
export const fetchCorrectList = async (correctList, setCorrectList, uid) => {
    if (uid) {
        try {
            const response = await axios.get(`/api/voca/showcorrectlist/${uid}`)
            const reverseData = response.data.correctList.reverse()
            if (JSON.stringify(reverseData) !== JSON.stringify(correctList)) {
                setCorrectList(reverseData)
            }
        } catch (err) {
            console.log(err)
        }
    }
}
export default fetchCorrectList
