import axios from 'axios'

const update = () => {
    const updateLink = (e, postNum, navigate) => {
        console.log('upsta')
        e.preventDefault()
        if (window.confirm('일기를 수정하시겠습니까?')) {
            navigate(`/diary/update/${postNum}`)
        }
    }

    const updatePost = async (e, newTitle, newContent, postNum, quillRef) => {
        e.preventDefault()
        const content = quillRef.current.getEditor().getContents()

        console.log(content)
        const contentString = JSON.stringify(content)
        if (window.confirm('수정을 완료하시겠습니까?')) {
            if (newTitle || newContent) {
                try {
                    const response = await axios.put(
                        `/api/post/update/${postNum}`,
                        {
                            title: newTitle,
                            content: contentString,
                        }
                    )
                    if (response.status === 200) {
                        alert('일기가 수정되었어요')
                        window.location.href = '/diary'
                    } else {
                        alert('일기가 수정이 실패했어요.')
                    }
                } catch (error) {
                    console.log(error)
                }
            } else {
                alert('제목과 내용을 변경해주세요')
            }
        }
    }
    const cancel = (e) => {
        e.preventDefault()
        if (window.confirm('수정을 취소하겠습니까?')) {
            window.location.href = '/diary'
        }
    }
    return { updateLink, updatePost, cancel }
}

export default update
