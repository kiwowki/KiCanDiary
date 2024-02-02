import axios from 'axios'

export const EmailCheckFunc = async (e, email, setMailCheck, setEmailMsg) => {
    e.preventDefault()
    if (!email) {
        return alert('이메일을 입력해주세요')
    }
    let body = {
        Email: email,
    }
    await axios.post('/api/user/emailcheck', body).then((response) => {
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
export default EmailCheckFunc
