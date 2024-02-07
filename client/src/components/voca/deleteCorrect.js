import axios from 'axios'

export const deleteCorrect = async (
    correctcheckboxList,
    correctList,
    fetchCorrectList,
    setCorrectList,
    setCorrectCheckBoxList,
    setCorrectCheckBoxListAll,
    uid
) => {
    const selectedWords = correctcheckboxList.map((index) => correctList[index])
    console.log(selectedWords)
    if (selectedWords.length > 0) {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            let body = selectedWords.map((item) => item._id)
            axios
                .post('/api/voca/correctdelete', { id: body })
                .then((response) => {
                    if (response.data.success) {
                        fetchCorrectList(correctList, setCorrectList, uid)
                        setCorrectCheckBoxList([])
                        setCorrectCheckBoxListAll(false)
                        alert('단어가 삭제되었습니다.')
                    }
                })
        }
    } else {
        alert('삭제할 단어를 선택해주세요.')
    }
}
export default deleteCorrect
