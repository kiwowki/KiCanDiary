import axios from 'axios'

export const diaryDelete = async (e, postNum, setPostList) => {
   
    e.preventDefault()
    if(window.confirm('일기를 정말로 삭제하시겠습니까?')){
        await axios.delete(`/api/post/delete/${postNum}`).then((res) => {
            if(res.data.success) {
                alert('일기가 삭제되었습니다.')
                setPostList(prevPosts => prevPosts.filter(post => post.postNum !== postNum))
            }
        }).catch ((err) => {
            console.log(err)
        })
    }
    
}

export default diaryDelete
