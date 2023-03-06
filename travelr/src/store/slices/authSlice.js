import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
}

const initialState = {
    user: initialUserState,
    loaded: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // login action
        login: (state, action) => {
            state.user = action.payload;
            state.loaded = true;
        },

        // logout action
        logout: (state) => {
            state.user = initialUserState;
        },

        // loader action
        loader: (state) => {
            state.loaded = true;
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, loader } = authSlice.actions

export default authSlice.reducer