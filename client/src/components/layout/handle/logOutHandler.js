import firebase from '../../../firebase'

export const LogoutHandler = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
        firebase.auth().signOut()
        window.location.href = '/'
    }
}
export default LogoutHandler
