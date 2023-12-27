import React from 'react'

const Login = () => {
    return (
        <div className="login__wrap">
            <div className="login__inner">
                <form action="/submit" method="post">
                    <h2>LOGIN</h2>
                    <div>
                        <label htmlFor="id">ID</label>
                        <p><a className="login__a">Forgot ID?</a></p>
                        <input className="login__input" type="text" id="id" name="id" required />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <p><a className="login__a" href="#">Forgot password?</a></p>
                        <input className="login__input" type="password" id="password" name="password" required />
                    </div>

                    <button type="submit" className="login__btn">login</button>
                    <p><a className="login__a600">Forgot ID?</a></p>
                    <p><a className="login__a600" href="#">Forgot password?</a></p>
                </form>
            </div>

        </div>
    )
}

export default Login