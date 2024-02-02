import axios from 'axios'

const mainhandleKeyPress = async (
    event,
    value,
    setValue,
    correctionsData,
    setCorrectionsData,
    quillRef
) => {
    try {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault()
            const textValue = quillRef.current?.getEditor().getText()
            // console.log(textValue)
            setValue(textValue)

            const response = await axios.post('/api/ginger', {
                search: value,
            })
            if (response.data.success) {
                // console.log(response.data.data.GingerTheDocumentResult.Corrections);

                const newCorrectionsData =
                    response.data.data.GingerTheDocumentResult.Corrections.map(
                        (correction) => ({
                            mistakeText: correction.MistakeText,
                            suggestions: correction.Suggestions.map(
                                (suggestion) => ({
                                    text: suggestion.Text,
                                    confidence: suggestion.Confidence,
                                    category: suggestion.CategoryDescription,
                                })
                            ),
                        })
                    )

                // console.log(newCorrectionsData)
                setCorrectionsData(newCorrectionsData)
            } else {
                alert('문법 요청 실패')
            }
        }
    } catch (err) {
        console.log('문법 요청 에러:', err)
    }
}

export default mainhandleKeyPress
