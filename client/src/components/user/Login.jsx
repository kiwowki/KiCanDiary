import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import firebase from '../../firebase.js'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../reducer/userSlice.js'

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const isLoading = user.isLoading
    const accessToken = user.accessToken

    useEffect(() => {
        if (user.isLoading) {
            if (user.accessToken) {
                navigate('/')
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, accessToken])

    const LoginFunc = async (e) => {
        e.preventDefault()
        if (!(email && pass)) {
            return alert('이메일과 비밀번호를 채워주세요')
        }

        try {
            await firebase.auth().signInWithEmailAndPassword(email, pass)
            alert('로그인 성공')
            navigate('/')
        } catch (err) {
            console.log(err)
            setErrorMsg('로그인 실패. 이메일과 비밀번호를 다시 확인해주세요')
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setErrorMsg('')
        }, 5000)
    }, [errorMsg])

    return (
        <div className="login__wrap">
            <div className="login__inner">
                <form action="/submit" method="post">
                    <h2>LOGIN</h2>
                    <div>
                        <label htmlFor="id">ID</label>
                        <p>
                            <Link className="login__a" to="/">
                                Forgot ID?
                            </Link>
                        </p>

                        <input
                            type="text"
                            id="id"
                            name="id"
                            className="login__input"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <p>
                            <Link className="login__a" to="/">
                                Forgot password?
                            </Link>
                        </p>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="login__input"
                            required
                            value={pass}
                            onChange={(e) => setPass(e.currentTarget.value)}
                        />
                    </div>
                    <div>{errorMsg !== '' && <p>{errorMsg}</p>}</div>
                    <button
                        type="submit"
                        className="login__btn"
                        onClick={(e) => {
                            LoginFunc(e)
                        }}
                    >
                        login
                    </button>
                    <p>
                        <Link className="login__a600" to="/">
                            Forgot ID?
                        </Link>
                    </p>
                    <p>
                        <Link className="login__a600" to="/">
                            Forgot password?
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
