const onChange = async (date, getPostsByDate, today, params, navigate) => {
    const posts = await getPostsByDate(date)
    let postNum = null;

    if (posts.length === 0 && date.getTime() === today.getTime()) {
        if (window.confirm('새로운 글을 작성하시겠습니까?')) {
            navigate(`/write/${params}`)
        } // 값이 없으면 쓰기
    } else if (posts.length !== 0) {
        if (window.confirm('이전에 작성한 글을 보시겠습니까?')) {
            postNum = posts[0].postNum;
            console.log(postNum)
            navigate(`/view/diaryview/${postNum}`)
        }
    } else {
        alert('오늘의 날짜를 선택하도록') // 다 해당 안되면 오늘 날짜 
    }
}

export default onChange