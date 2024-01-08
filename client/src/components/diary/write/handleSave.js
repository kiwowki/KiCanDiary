import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const handleSave =  (e, title, value, quillRef, uid, navigate) => {
    e.preventDefault()
        if (title && value) {
            const content = quillRef.current?.getEditor().getContents()
            const contentString = content.ops.map(op => op.insert).join('')

            let body = {
                title: title,
                content: content,
                uid: uid
            }

             axios
                .post('/api/post/write', body)
                .then((res) => {
                    if (res.data.success) {
                        alert('작성 성공')
                        navigate('/diarylist')
                    }
                })
                .catch((err) => {
                    console.log(err)
                    alert('axios')
                })
        } else {
            alert('실패')
        }
}

export default handleSave;