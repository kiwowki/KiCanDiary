import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux'
// import firebase from '../../firebase.js'

import userImage from '../../assets/img/mypage__img.png';
import account from '../../assets/img/account.png'
import protection from '../../assets/img/protection.png'
import screen from '../../assets/img/screen.png'
import notification from '../../assets/img/notification.png'
import notice from '../../assets/img/notice.png'
import contact from '../../assets/img/contact.png'


const PassModal = ({ onClose }) => {
    return (
        <div className='passmodal'>
            <div className='passmodal__content'>
                <h2>모달 제목</h2>
                <p>모달 내용</p>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    )
}

const ProfileModal = ({ onClose }) => {
    return (
        <div className='passmodal'>
            <div className='passmodal__content'>
                <h2>모달 제목</h2>
                <p>모달 내용</p>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    )
}


const Mypage = () => {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.accessToken) {
            alert("로그인한 회원만 작성이 가능합니다.");
            navigate("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [isPassModalOpen, setIsPassModalOpen] = useState(false);

    const newProfileModify = () => {
        setIsProfileModalOpen(true)
    }
    const newPassModify = () => {
        setIsPassModalOpen(true)
    }

    const closeModal = () => {
        setIsProfileModalOpen(false)
        setIsPassModalOpen(false);
    };

    return (
        <div className="mypage__wrap">
            <div className="mypage__inner">
                <div className="left">
                    <div className="user">
                        <img src={userImage} alt="유저 이미지" />
                        <div className="user__name">{user.displayName}({user.email})</div>
                    </div>

                    <div className="mypage__menu">
                        <div><img src={account} alt="계정" />계정</div>
                        <div><img src={protection} alt="개인정보 보호" />개인정보 보호</div>
                        <div><img src={screen} alt="화면" />화면</div>
                        <div><img src={notification} alt="알림" />알림</div>
                        <div><img src={notice} alt="공지사항" />공지사항</div>
                        <div><img src={contact} alt="문의하기" />문의하기</div>
                    </div>
                </div>

                <div className="right">
                    <div className="click__menu">
                        <div>프로필 </div>
                        <div>닉네임 : {user.displayName} </div>
                        <div>이메일 : {user.email} </div>
                        <div
                            onClick={newProfileModify}
                        >프로필 변경</div>
                        <div
                            onClick={newPassModify}
                        >비밀번호 변경 </div>
                        <div className='user__Delete'>계정 삭제하기 </div>
                    </div>
                </div>
            </div>
            {isProfileModalOpen && <ProfileModal onClose={closeModal} />}
            {isPassModalOpen && <PassModal onClose={closeModal} />}
        </div>
    )
}

export default Mypage