import axios from 'axios'

export const writeVoca = async (
    e,
    checkboxList,
    searchList,
    uid,
    fetchSearchList,
    setSearchList,
    fetchVocaList,
    setVocaList,
    setCheckboxList,
    setCheckboxListAll
) => {
    e.preventDefault()
    const selectedWords = checkboxList.map((index) => searchList[index])
    if (selectedWords.length > 0) {
        try {
            const response = await axios.post('/api/voca/vocalist', {
                data: selectedWords,
                uid: uid,
            })
            if (response.data.success) {
                alert('단어를 저장 합니다.')
                fetchSearchList(setSearchList)
                fetchVocaList(setVocaList)
                setCheckboxList([])
                setCheckboxListAll(false)
            } else {
                alert('단어 저장 실패')
            }
        } catch (err) {
            console.log(err)
        }
    } else {
        alert('저장하고 싶은 단어를 체크해주세요.')
    }
}
export default writeVoca
