const nav = () => {
    const list = [
        {
            key: '/',
            value: 'Home',
            data: 'H',
        },
        {
            key: '/diary',
            value: 'Diary',
            data: 'D',
        },
        {
            key: '/voca',
            value: ' VOCA list',
            data: 'V',
        },
        {
            key: '/mypage',
            value: 'My page',
            data: 'M',
        },
    ]
    const login = [
        {
            key: '/login',
            value: 'login',
        },
        {
            key: '/Join',
            value: 'join',
        },
    ]
    return { list, login }
}
export default nav
