import axios from "axios";

const update = () => {

    const updateLink = (e, postNum, navigate) => {
        e.preventDefault();
        if (window.confirm('일기를 수정하시겠습니까?')) {
            navigate(`/update/diaryupdate/${postNum}`)
        }
    }

    const updatePost = async (newTitle, newContent, postNum, quillRef) => {
        const content = quillRef.current.getQuill().getContents();
        const contentString = JSON.stringify(content);
        if (window.confirm('일기를 수정하시겠습니까?')) {
            if (newTitle && newContent) {
                try {
                    const response = await axios.put(`/api/post/update/${postNum}`, {
                        title: newTitle,
                        content: contentString
                    });
                    if (response.status === 200) {
                        console.log(`post ${postNum}`)
                    } else {
                        console.log('axios erre')
                    }
                } catch (error) {
                    console.log(error)
                }
            } else {
                console.log("dkansodyddjqtdma")
            }
        }
    }


    return { updateLink, updatePost }
}

export default update;
