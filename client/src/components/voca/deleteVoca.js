import axios from 'axios'

export const deleteVoca = async (
    e,
    vocacheckboxList,
    vocaList,
    setVocaList,
    fetchVocaList,
    setVocaCheckBoxList,
    setvocacheckboxListAll
) => {
    e.preventDefault()
    const selectedWords = vocacheckboxList.map((index) => vocaList[index])
    console.log(selectedWords)
    if (selectedWords.length > 0) {
        if (
            window.confirm(
                '확인버튼을 누르면 선택한 단어가 단어장에서 삭제됩니다. 정말 삭제하시겠습니까?'
            )
        ) {
            let body = selectedWords.map((item) => item._id)
            await axios
                .post('/api/voca/vocadelete', { id: body })
                .then((response) => {
                    if (response.data.success) {
                        fetchVocaList(setVocaList)
                        setVocaCheckBoxList([])
                        setvocacheckboxListAll(false)
                    }
                })
        } else {
            alert('단어 삭제가 실패되었습니다.')
        }
    } else {
        alert('삭제할 단어를 클릭해주세요.')
    }
}
export default deleteVoca
