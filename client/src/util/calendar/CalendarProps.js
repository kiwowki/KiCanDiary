import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomSticker } from '../stickers/getRandomSticker.js'
import NavigationLabel from "./class/navigationLabel";

export default function CalendarProps({ params, postList, today }) {
    const navigate = useNavigate();
    const date = new Date();
    const view = 'month';
    const { tileClass, navigationLabel } = NavigationLabel(date, view); // 달력에 보여지는 토요일 일요일을 클래스화 시켜둔거 각각 색깔을 다르게 정하려고 


    const getPostsByDate = (date, postList) => {
        if (!Array.isArray(postList)) { // postList가 배열이 아닐 경우 빈 배열 반환
            return [];
        }
        return postList.filter(post => {
            const postDate = new Date(post.createdAt);
            return (postDate.getFullYear() === date.getFullYear() &&
            postDate.getMonth() === date.getMonth() &&
            postDate.getDate() === date.getDate())
        })
    }
    const onChange = async date => {
        const posts = await getPostsByDate(date, postList)
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
    // 전달되는 postList는 post 스키마에 저장된 글목록임 
    // 필터링을 통해 날짜 별로 달력 타일에 바인딩 함 

    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const startDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
        const endDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
        const newDates = [];
        for (let day = startDay; day <= endDay; day.setDate(day.getDate() + 1)) {
            newDates.push(new Date(day));
        }
        setDates(newDates);
    }, [currentMonth]);
    //  currentMonth 상태가 변경될 때마다 그 달의 모든 날짜를 dates 상태에 저장하는 역할


    
    // 타일을 클릭할 때 조건에 맞는 값을 실행함 

    const tileContent = useCallback(({ date, view }) => {
        if (view === 'month') {
            const posts = getPostsByDate(date, postList)
            // 게시물이 없으면 null 반환
            if (posts.length === 0) {
                return null;
            }
            return (
                <div className='diary__check'><img src={getRandomSticker()} alt="" /></div>
            );
        }
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dates, postList]);
    // 달력에 보이는 타일들에 일기를 썼다면 체크 표시를 해주는 기능을 담당함 

    return {
        onChange: onChange,
        value: currentMonth,
        locale: "en-US",
        tileClassName: tileClass,
        navigationLabel: navigationLabel,
        tileContent: tileContent
    }
}