import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import loadingSlice from './loadingSlice'

export default configureStore({
    reducer: {
        user: userSlice,
        loading: loadingSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
