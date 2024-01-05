import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import firebase from '../../firebase.js'

const Login = () => {
    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate()

    const LoginFunc = async (e) => {
        e.preventDefault()
        if (!(Email && Pass)) {
            return alert('이메일과 비밀번호를 채워주세요')
        }

        try {
            await firebase.auth().signInWithEmailAndPassword(Email, Pass)
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
                            value={Email}
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
                            value={Pass}
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
