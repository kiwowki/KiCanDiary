import axios from 'axios'

export const fetchSearchList = async (setSearchList) => {
    try {
        const response = await axios.post('/api/voca/showsearchlist')
        const reverseData = response.data.vocasearchList.reverse()
        setSearchList(reverseData)
    } catch (err) {
        console.log(err)
    }
}
export default fetchSearchList
