import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux'
// import firebase from '../../firebase.js'
// import classNames from 'classnames';

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import axios from 'axios';

import userImage from '../../assets/img/mypage__img.png';
import account from '../../assets/img/account.png'
import protection from '../../assets/img/protection.png'
import screen from '../../assets/img/screen.png'
import notification from '../../assets/img/notification.png'
import notice from '../../assets/img/notice.png'
import contact from '../../assets/img/contact.png'

registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);






const Mypage = () => {
    // 리덕스 and navigate
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    // 변수
    const [file, setFile] = useState(null);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [isPassModalOpen, setIsPassModalOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('계정');
    // 초기상태
    useEffect(() => {
        if (!user.accessToken) {
            alert("로그인한 회원만 작성이 가능합니다.");
            navigate("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 이미지파일 업로드 부분
    const handleInit = () => {
        console.log('FilePond 초기화');
    };

    const handleFileUpload = (fileItems) => {
        const uploadedFile = fileItems[0]?.file;
        console.log(uploadedFile);

        // submit 버튼을 눌렀을 때만 파일 정보를 저장
        if (uploadedFile && uploadedFile.submitted) {
            const fileData = uploadedFile.file; // File 객체 추출
            setFile(fileData);
        }

    };
    const ProfileSubmit = async () => {
        try {
            if (!file) {
                console.error('업로드할 파일이 선택되지 않았습니다.');
                return;
            }
            console.log(file)
            const files = file;
            const fileData = files[0];

            fileData.append('uid', user.uid);
            // console.log(fileData)

            const response = await axios.post('/api/user/profileupload', fileData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('이미지 업로드 완료:', response.data);
        } catch (error) {
            console.error('이미지 업로드 실패:', error);
        }
    };

    // 모달창 부분
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

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu)
    }
    const PassModal = ({ onClose }) => {
        return (
            <div className='passmodal'>
                <div className='passmodal__content'>
                    <div className="logo">kitch <span>Candy</span></div>
                    <h2>Modify password</h2>
                    <p></p>
                    <button onClick={onClose} className='submit'>Submit</button>
                    <button onClick={onClose} className='close'>Close</button>
                </div>
            </div>
        )
    }

    const ProfileModal = ({ onClose }) => {
        return (
            <div className='profilemodal'>
                <div className='profilemodal__content'>
                    <div className="logo">kitch <span>Candy</span></div>
                    <h2>Modify  profile</h2>
                    <p>
                        {/* <h2>이미지 업로드</h2> */}
                        <FilePond
                            allowMultiple={false}
                            // oninit={handleInit}
                            // onupdatefiles={handleFileUpload}
                            className="custom-filepond"
                        />
                    </p>
                    <button onClick={ProfileSubmit} className='submit'>Submit</button>
                    <button onClick={onClose} className='close'>Close</button>
                </div>
            </div>
        )
    }

    return (
        <div className="mypage__wrap">
            <div className="mypage__inner">
                <div className="left">
                    <div className="user">
                        <img src={userImage} alt="유저 이미지" />
                        <div className="user__name">{user.displayName}({user.email})</div>
                    </div>

                    <div className="mypage__menu">
                        <div
                            // className={classNames('menu-item', { 'active': selectedMenu === '계정' })}
                            onClick={() => handleMenuClick('계정')}>
                            <img src={account} alt="계정" />계정
                        </div>
                        <div
                            // className={classNames('menu-item', { 'active': selectedMenu === '개인정보' })}
                            onClick={() => handleMenuClick('개인정보')}>
                            <img src={protection} alt="개인정보 보호" />개인정보 보호
                        </div>
                        <div
                            onClick={() => handleMenuClick('화면')}>
                            <img src={screen} alt="화면" />화면
                        </div>
                        <div
                            onClick={() => handleMenuClick('알림')}>
                            <img src={notification} alt="알림" />알림
                        </div>
                        <div
                            onClick={() => handleMenuClick('공지사항')}>
                            <img src={notice} alt="공지사항" />공지사항
                        </div>
                        <div
                            onClick={() => handleMenuClick('문의하기')}>
                            <img src={contact} alt="문의하기" />문의하기
                        </div>
                    </div>
                </div>

                <div className="right">
                    {selectedMenu === '계정' && (
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
                    )}
                    {selectedMenu === '개인정보' && (
                        <div className="click__menu">
                            <p>
                                개인정보 처리방침


                                안녕하세요. [kitch candy diary]를 이용해 주셔서 감사합니다. 본 개인정보 처리방침은 회원가입 및 서비스 이용 시 수집되는 개인정보에 대한 사항을 안내하고 있습니다.
                                [kitch candy diary]는 이용자의 개인정보를 소중히 다루며, 이를 보호하기 위해 최선의 노력을 다하고 있습니다.
                                1. 수집하는 개인정보
                                이메일
                                이름
                                비밀번호

                                2. 수집한 개인정보의 이용
                                [kitch candy diary]는 수집한 개인정보를 다음과 같은 목적으로 이용합니다.
                                로그인 시 본인 확인용
                                본인이 작성한 글만 볼 수 있는 서비스 제공

                                3. 개인정보의 제공 및 위탁
                                [kitch candy diary]는 이용자의 동의를 받은 경우나 법령에 근거하여 개인정보를 외부에 제공하거나 위탁할 수 있습니다.
                                제공 또는 위탁되는 개인정보 항목 및 제공받는 자는 다음과 같습니다.
                                제공받는 자: [네이버클라우드, Firebase 등]
                                제공받는 목적: 서비스 제공을 위한 데이터 저장 및 관리

                                4. 개인정보의 파기
                                이용자의 개인정보는 회원 탈퇴 시 또는 이용목적 달성 시 지체없이 파기됩니다. 파기되는 개인정보의 종류 및 파기 절차는 다음과 같습니다.
                                파기대상 정보: 이메일, 이름, 비밀번호
                                파기절차: 회원 탈퇴 시 자동적으로 파기되며, 수동 파기는 일정 기간 이후 진행됩니다.
                                [kitch candy diary]는 이용자의 개인정보를 안전하게 관리하고, 정보보안을 위해 끊임없이 노력하며, 관련 법령 및 정부 지침을 준수합니다.
                                개인정보 처리방침은 정부의 정책 변경, 서비스 개선을 위한 내부 정책 변경 등으로 인해 변경될 수 있습니다. 변경 시에는 웹사이트를 통해 공지하겠습니다.
                                문의사항이나 더 자세한 정보를 원하시면 [마이페이지 &qt 문의하기]로 문의해 주시기 바랍니다. 이용해 주셔서 다시 한 번 감사합니다.
                            </p>
                        </div>
                    )}

                </div>
            </div>
            {isProfileModalOpen && <ProfileModal onClose={closeModal} />}
            {isPassModalOpen && <PassModal onClose={closeModal} />}
        </div>
    )
}

export default Mypage