import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        startLoading: (state) => true,
        finishLoading: (state) => false,
    },
})

export const { startLoading, finishLoading } = loadingSlice.actions

export default loadingSlice.reducer
