import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import diaryList from '../DiaryList';
import { Link } from 'react-router-dom';
import { getRandomSticker } from '../../../../util/stickers/getRandomSticker';

const List = ({currentDate}) => {
    const uid = useSelector(state => state.user.uid)
    const [postList, setPostList] = useState([])
    const [filteredPostList, setFilteredPostList] = useState([])

    useEffect(() => {
        diaryList(setPostList, uid);
    }, [uid]);
    useEffect(() => {
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const currentMonthPosts = postList.filter(post => {
            const postDate = new Date(post.createdAt);
            return postDate.getFullYear() === currentYear && postDate.getMonth() === currentMonth;
        });
        setFilteredPostList([...currentMonthPosts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    }, [postList, currentDate]);
    // 해당 월의 글을 필터링 해서 가져옴 내림차순으로 => 늦게 쓴게 먼저 

  return (
   <>
    {filteredPostList && filteredPostList.map((post, key) => (
                                <div className="list" key={key}>
                                    <div className="weekday">
                                        <span className="date">{key + 1}</span>
                                        <span className="sticker">
                                            <img
                                                src={getRandomSticker()}
                                                alt="Sticker"
                                            />
                                        </span>
                                    </div>
                                    <div className="day__diary">
                                        <h3 className="title">
                                            <Link to="/diaryview">
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p className="content">
                                            <Link to="/diaryview">
                                                {post.content}
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            ))}
   </>
  )
}

export default List
