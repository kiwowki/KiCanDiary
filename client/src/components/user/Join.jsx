import React, { useState } from 'react'
import axios from 'axios'


const Join = () => {
    const [Email, setEmail] = useState("");
    const [EmailMsg, setEmailMsg] = useState(false);
    const EmailCheckFunc = (e) => {
        e.preventDefault();
        if (!Email) {
            return alert("이메일을 입력해주세요");
        }
        let body = {
            Email: Email,
        }
        axios.post("/api/user/emailcheck", body).then((response) => {
            if (response.data.success) {
                if (response.data.check) {
                    setEmailMsg("사용가능한 이메일입니다.")
                } else {
                    setEmailMsg("사용할 수 없는 이메일입니다.")
                }
            }
        })
    }
    return (
        <div className='join__wrap'>
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
                            autoComplete='off'
                            required
                            value={Email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                        {EmailMsg}
                        <button className="required__check check" onClick={(e) => EmailCheckFunc(e)}>
                        </button>
                    </div>


                    <div>
                        <label htmlFor="name">Name</label>
                        <input className="join__input" type="text" id="name" name="name" autoComplete='off' required />
                        <div className="required__check"></div>
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input className="join__input" type="password" id="password" name="password" autoComplete='off' required />
                        <div className="required__check check">
                            <div className="required__msg">비밀번호의 규칙은 ~~~입니다.</div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="passwordCheck">Confirm</label>
                        <input className="join__input" type="password" id="passwordCheck" name="passwordCheck" autoComplete='off' required />
                        <div className="required__check"></div>
                    </div>

                    <button type="submit" className="join__btn">join</button>

                </form >
            </div >
        </div>
    )
}

export default Join