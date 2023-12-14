import React from 'react'

const Join = () => {
    return (
        <div className='join__wrap'>
            <div className="join__inner">
                <form action="/submit" method="post">
                    <h2>JOIN</h2>
                    <div>
                        <label htmlFor="id">ID</label>
                        <input className="join__input" type="text" id="id" name="id" autoComplete='off' required />

                        <div className="required__check check">
                            <div className="required__msg">아이디의 규칙은 ~~~입니다.</div>
                        </div>

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