import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import user from '../../assets/img/user.png'
import { useSelector } from 'react-redux'

const Aside = () => {
    const displayName = useSelector((state) => state.user.displayName)

    console.log(displayName)

    return (
        <aside id="aside">
            <div className="aside__wrap">
                <div className="logo mb30rem">
                    <div className="logo__text mb10">
                        <em>kitch</em> candy
                    </div>
                    <div className="logo__img">
                        <Link to={'/'}>
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
                <nav className="nav">
                    <ul className="box1">
                        <li className="pt10">
                            <Link to={'/diarylist'}>Diary</Link>
                        </li>
                        <li>
                            <Link to={'/voca'}>Voca list</Link>
                        </li>
                        <li>
                            <Link to={'/mypage'}>My page</Link>
                        </li>
                        <li className="">
                            <Link to={'/'}>Logout</Link>
                        </li>
                    </ul>
                </nav>
                <div className="user">
                    <Link to={'/login'}>
                        {displayName
                            ? (
                                <>
                                    <div className="user__profile">
                                        <img src={user} alt="" />
                                    </div>
                                    <div className="user__info">
                                        <span className="user__name">
                                        {displayName}
                                            <em>님</em>
                                            <br />
                                        </span>
                                        <span> 환영합니다.</span>
                                    </div>
                                </>
                            )
                            : <>
                                <div className="user__profile">
                                    <img src={user} alt="" />
                                </div>

                                <div className="user__info">
                                    <span>로그인 바로가기</span>
                                </div>
                            </>}
                    </Link>

                </div>
                <div className='bottomSticker'>
                    <div className="small"></div>
                    <div className="big"></div>
                </div>
            </div>
        </aside>
    )
}

export default Aside
