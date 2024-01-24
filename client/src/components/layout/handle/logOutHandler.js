import firebase from '../../../firebase'
import { clearUser } from '../../../reducer/userSlice'

export const LogoutHandler = async (dispatch) => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
        try {
            await firebase.auth().signOut()
            dispatch(clearUser())
            window.location.href = '/'
        } catch (error) {
            console.log(error, 'error')
        }
    }
}
export default LogoutHandler
