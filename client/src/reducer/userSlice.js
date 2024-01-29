import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: () => {
        const savedUser = sessionStorage.getItem('user')
        if (savedUser) {
            return JSON.parse(savedUser)
        } else {
            return {
                displayName: '',
                uid: '',
                accessToken: '',
                photoURL: '',
                isLoading: false,
                isLoggedIn: false,
            }
        }
    },
    reducers: {
        loginUser: (state, action) => {
            state.displayName = action.payload.displayName
            state.uid = action.payload.uid
            state.accessToken = action.payload.accessToken
            state.photoURL = action.payload.photoURL || ''
            state.isLoading = true
            state.isLoggedIn = true
            sessionStorage.setItem('user', JSON.stringify(state))
            //  로컬 스토리지 사용자 정보
        },

        clearUser: (state) => {
            state.displayName = ''
            state.uid = ''
            state.accessToken = ''
            state.isLoading = false
            state.isLoggedIn = false
            sessionStorage.removeItem('user')
        },
    },
})

export const { loginUser, clearUser } = userSlice.actions

export default userSlice.reducer
