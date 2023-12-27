import React from 'react'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer__1">
                <img src={logo} alt="logo" />
            </div>
            <div className="footer__2">
                <div className="footer__2-1">
                    team K C Diary (97.eugene.s@gmail.com, danziro57@gmail.com,
                    wolves941110@gmail.com, hongjihyeon1004@gmail.com)
                </div>
                <div className="footer__2-2">
                    <ul>
                        <li>
                            <Link to={'/'}>사이트 정보</Link>
                        </li>
                        <li>
                            <Link to={'/'}>이미지 출처</Link>
                        </li>
                        <li>
                            <Link to={'/'}>개인정보처리방침</Link>
                        </li>
                        <li>
                            <Link to={'/'}>개인정보처리방침</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
