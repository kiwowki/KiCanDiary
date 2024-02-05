import axios from 'axios'

export const fetchVocaList = async (setVocaList) => {
    try {
        const response = await axios.post('/api/voca/showvocalist')
        const reverseData = response.data.vocaList.reverse()
        setVocaList(reverseData)
    } catch (err) {
        console.log(err)
    }
}

export default fetchVocaList
