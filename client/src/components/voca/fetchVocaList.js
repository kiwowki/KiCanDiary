import axios from 'axios'

export const fetchVocaList = async (vocaList, setVocaList, uid) => {
    if (uid) {
        try {
            const response = await axios.post(`/api/voca/showvocalist/${uid}`)
            const reverseData = response.data.vocaList.reverse()
            if (JSON.stringify(reverseData) !== JSON.stringify(vocaList)) {
                setVocaList(reverseData)
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export default fetchVocaList
