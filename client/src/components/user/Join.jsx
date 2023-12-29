import React, { useState } from 'react'
import axios from 'axios'

import firebase from '../../firebase.js'
import { useNavigate } from 'react-router-dom'
const Join = () => {
    const [Email, setEmail] = useState('')
    const [EmailMsg, setEmailMsg] = useState('')
    const [Name, setName] = useState('')
    const [Pass, setPass] = useState('')
    const [PassC, setPassC] = useState('')
    const [flag, setFlag] = useState(false)
    const [mailCheck, setMailCheck] = useState(false)
    const navigate = useNavigate()

    const EmailCheckFunc = (e) => {
        e.preventDefault()
        if (!Email) {
            return alert('이메일을 입력해주세요')
        }
        let body = {
            Email: Email,
        }
        axios.post('/api/user/emailcheck', body).then((response) => {
            if (response.data.success) {
                if (response.data.check) {
                    setMailCheck(true)
                    setEmailMsg('사용가능한 이메일입니다.')
                } else {
                    setEmailMsg('사용할 수 없는 이메일입니다.')
                }
            }
        })
    }
    const JoinFunc = async (e) => {
        setFlag(true)
        e.preventDefault()
        if (!(Email && Name && Pass && PassC)) {
            return alert('모든 항목을 입력해주세요')
        }
        if (Pass !== PassC) {
            return alert('비밀번호가 일치하지 않습니다')
        }
        if (!mailCheck) {
            return alert('아이디 중복 검사를 해주세요')
        }
        let createdUser = await firebase
            .auth()
            .createUserWithEmailAndPassword(Email, Pass)
        await createdUser.user.updateProfile({
            displayName: Name,
        })
        console.log(createdUser.user)
        let body = {
            email: createdUser.user.multiFactor.user.email,
            displayName: createdUser.user.multiFactor.user.displayName,
            uid: createdUser.user.multiFactor.user.uid,
        }
        axios.post('api/user/join', body).then((response) => {
            if (response.data.success) {
                alert('회원가입 완료되었습니다.')
                navigate('/login')
            } else {
                alert('회원가입 실패하였습니다.')
            }
        })
    }
    return (
        <div className="join__wrap">
            <div className="join__inner">
                <form action="/submit" method="post">
                    <h2>JOIN</h2>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="join__input"
                            autoComplete="off"
                            required
                            value={Email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                        {EmailMsg}
                        <button
                            className="required__check check"
                            onClick={(e) => EmailCheckFunc(e)}
                        ></button>
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="join__input"
                            autoComplete="off"
                            required
                            minLength={10}
                            value={Name}
                            onChange={(e) => {
                                setName(e.currentTarget.value)
                            }}
                        />
                        <div className="required__check"></div>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="join__input"
                            autoComplete="off"
                            required
                            minLength={15}
                            value={Pass}
                            onChange={(e) => {
                                setPass(e.currentTarget.value)
                            }}
                        />
                        <div className="required__check check">
                            <div className="required__msg">
                                비밀번호의 규칙은 ~~~입니다.
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="passwordCheck">Confirm</label>
                        <input
                            type="password"
                            id="passwordCheck"
                            name="passwordCheck"
                            className="join__input"
                            autoComplete="off"
                            required
                            value={PassC}
                            onChange={(e) => {
                                setPassC(e.currentTarget.value)
                            }}
                        />
                        <div className="required__check"></div>
                    </div>
                    <button
                        disabled={flag}
                        type="submit"
                        className="join__btn"
                        onClick={(e) => JoinFunc(e)}
                    >
                        join
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Join
