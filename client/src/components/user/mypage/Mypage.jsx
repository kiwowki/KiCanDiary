import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
// import firebase from '../../firebase.js'
// import classNames from 'classnames';

import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import axios from 'axios'

import userImage from '../../../assets/img/mypage__img.png'
import account from '../../../assets/img/account.png'
import protection from '../../../assets/img/protection.png'
import screen from '../../../assets/img/screen.png'
import notification from '../../../assets/img/notification.png'
import notice from '../../../assets/img/notice.png'
import contact from '../../../assets/img/contact.png'
import listData from './privateUl'

registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview)

const Mypage = () => {
    // 리덕스 and navigate
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()

    // 변수
    const [file, setFile] = useState(null)
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
    const [isPassModalOpen, setIsPassModalOpen] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState('계정')
    // 초기상태

    // 이미지파일 업로드 부분
    // const handleInit = () => {
    //     console.log('FilePond 초기화');
    // };

    // const handleFileUpload = (fileItems) => {
    //     const uploadedFile = fileItems[0]?.file;
    //     console.log(uploadedFile);

    //     // submit 버튼을 눌렀을 때만 파일 정보를 저장
    //     if (uploadedFile && uploadedFile.submitted) {
    //         const fileData = uploadedFile.file; // File 객체 추출
    //         setFile(fileData);
    //     }

    // };
    const ProfileSubmit = async () => {
        try {
            if (!file) {
                console.error('업로드할 파일이 선택되지 않았습니다.')
                return
            }
            console.log(file)
            const files = file
            const fileData = files[0]

            fileData.append('uid', user.uid)
            // console.log(fileData)

            const response = await axios.post(
                '/api/user/profileupload',
                fileData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )

            console.log('이미지 업로드 완료:', response.data)
        } catch (error) {
            console.error('이미지 업로드 실패:', error)
        }
    }

    // 모달창 부분
    const newProfileModify = () => {
        setIsProfileModalOpen(true)
    }
    const newPassModify = () => {
        setIsPassModalOpen(true)
    }

    const closeModal = () => {
        setIsProfileModalOpen(false)
        setIsPassModalOpen(false)
    }

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu)
    }
    const PassModal = ({ onClose }) => {
        return (
            <div className="passmodal">
                <div className="passmodal__content">
                    <div className="logo">
                        kitch <span>Candy</span>
                    </div>
                    <h2>Modify password</h2>
                    <p></p>
                    <button onClick={onClose} className="submit">
                        Submit
                    </button>
                    <button onClick={onClose} className="close">
                        Close
                    </button>
                </div>
            </div>
        )
    }

    const ProfileModal = ({ onClose }) => {
        return (
            <div className="passmodal">
                <div className="passmodal__content">
                    <div className="logo">
                        kitch <span>Candy</span>
                    </div>
                    <h2>Modify profile</h2>
                    <div className="filePondWrap">
                        {/* <h2>이미지 업로드</h2> */}
                        <FilePond
                            allowMultiple={false}
                            // oninit={handleInit}
                            // onupdatefiles={handleFileUpload}
                            className="custom-filepond"
                        />
                    </div>
                    <button onClick={ProfileSubmit} className="submit">
                        Submit
                    </button>
                    <button onClick={onClose} className="close">
                        Close
                    </button>
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
                        <div className="user__name">
                            {user.displayName}
                            {user.email}
                        </div>
                    </div>

                    <div className="mypage__menu">
                        <div
                            // className={classNames('menu-item', { 'active': selectedMenu === '계정' })}
                            onClick={() => handleMenuClick('계정')}
                        >
                            <img src={account} alt="계정" />
                            계정
                        </div>
                        <div
                            // className={classNames('menu-item', { 'active': selectedMenu === '개인정보' })}
                            onClick={() => handleMenuClick('개인정보')}
                        >
                            <img src={protection} alt="개인정보 보호" />
                            개인정보 보호
                        </div>
                        <div onClick={() => handleMenuClick('화면')}>
                            <img src={screen} alt="화면" />
                            화면
                        </div>
                        <div onClick={() => handleMenuClick('알림')}>
                            <img src={notification} alt="알림" />
                            알림
                        </div>
                        <div onClick={() => handleMenuClick('공지사항')}>
                            <img src={notice} alt="공지사항" />
                            공지사항
                        </div>
                        <div onClick={() => handleMenuClick('문의하기')}>
                            <img src={contact} alt="문의하기" />
                            문의하기
                        </div>
                    </div>
                </div>

                <div className="right">
                    {selectedMenu === '계정' && (
                        <div className="click__menu">
                            <div>프로필 </div>
                            <div>닉네임 : {user.displayName} </div>
                            <div>이메일 : {user.email} </div>
                            <div onClick={newProfileModify}>프로필 변경</div>
                            <div onClick={newPassModify}>비밀번호 변경 </div>
                            <div className="user__Delete">계정 삭제하기 </div>
                        </div>
                    )}
                    {selectedMenu === '개인정보' && (
                        <div className="click__menu">
                            <p>
                                개인정보 처리방침 안녕하세요. [kitch candy
                                diary]를 이용해 주셔서 감사합니다. 본 개인정보
                                처리방침은 회원가입 및 서비스 이용 시 수집되는
                                개인정보에 대한 사항을 안내하고 있습니다. [kitch
                                candy diary]는 이용자의 개인정보를 소중히
                                다루며, 이를 보호하기 위해 최선의 노력을 다하고
                                있습니다.
                                <ul className="menuData">
                                    {listData.map((li, key) => (
                                        <li key={key}>{li}</li>
                                    ))}
                                </ul>
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
