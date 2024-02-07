import React, { useEffect, useState } from 'react'
import axios from 'axios'
import firebase from '../../../firebase'
import { useNavigate } from 'react-router-dom'
import EmailCheckFunc from './emailCheck'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../reducer/userSlice'

const Join = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [passC, setPassC] = useState('')
    const [EmailMsg, setEmailMsg] = useState('')
    const [mailCheck, setMailCheck] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const JoinFunc = async (e) => {
        e.preventDefault()
        if (!(email && name && pass && passC)) {
            return alert('모든 항목을 입력해주세요')
        }
        if (pass !== passC) {
            return alert('비밀번호가 일치하지 않습니다')
        }
        if (!mailCheck) {
            return alert('아이디 중복 검사를 통과 해주세요')
        }
        try {
            let createdUser = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, pass)

            await createdUser.user.updateProfile({
                displayName: name,
            })

            let accessToken = await createdUser.user.getIdToken()

            let body = {
                email: createdUser.user.multiFactor.user.email,
                displayName: createdUser.user.multiFactor.user.displayName,
                uid: createdUser.user.multiFactor.user.uid,
                accessToken: accessToken,
                photoURL: createdUser.user.multiFactor.user.photoURL || '',
            }
            axios.post('api/user/join', body).then((response) => {
                if (response.data.success) {
                    alert('회원가입이 완료되었습니다.')
                    console.log(body)
                    dispatch(loginUser(body))
                    navigate('/')
                } else {
                    alert('회원가입에 실패하였습니다.')
                }
            })
        } catch (err) {
            console.log(err)
            if (err.code === 'auth/email-already-in-use') {
                alert('이미 사용 중인 이메일 주소입니다.')
            } else {
                alert('Firebase 회원가입에 실패했습니다.')
            }
        }
    }

    return (
        <div className="join__wrap">
            <div className="join__inner">
                <form action="/submit" method="post">
                    <h2>JOIN</h2>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="join__input"
                            autoComplete="off"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                        <button
                            className="required__check check"
                            onClick={(e) =>
                                EmailCheckFunc(
                                    e,
                                    email,
                                    setMailCheck,
                                    setEmailMsg
                                )
                            }
                        ></button>
                        <div className="msgTag">{EmailMsg}</div>
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
                            value={name}
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
                            value={pass}
                            onChange={(e) => {
                                setPass(e.currentTarget.value)
                            }}
                        />
                        <div className="required__check">
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
                            value={passC}
                            onChange={(e) => {
                                setPassC(e.currentTarget.value)
                            }}
                        />
                        <div className="required__check"></div>
                    </div>

                    <button
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
