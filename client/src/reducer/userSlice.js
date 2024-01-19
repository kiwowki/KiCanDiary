import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        displayName: "",
        uid: "",
        accessToken: "",
        photoURL: "",
        isLoading: false,
        isLoggedIn: false
    },
    reducers: {
        loginUser: (state, action) => {
            state.displayName = action.payload.displayName;
            state.uid = action.payload.uid;
            state.accessToken = action.payload.accessToken;
            // state.photoURL = action.payload.photoURL;
            state.isLoading = true;
            state.isLoggedIn = true;
        },

        clearUser: (state) => {
            state.displayName = "";
            state.uid = "";
            state.accessToken = "";
            state.isLoading = false;
            state.isLoggedIn = false;
        },
    },
});

export const { loginUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
