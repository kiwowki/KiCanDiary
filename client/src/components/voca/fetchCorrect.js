import axios from 'axios'

export const fetchCorrectList = async (setCorrectList) => {
    try {
        const response = await axios.post('/api/voca/showcorrectlist')
        const reverseData = response.data.correctList.reverse()
        setCorrectList(reverseData)
    } catch (err) {
        console.log(err)
    }
}
export default fetchCorrectList
