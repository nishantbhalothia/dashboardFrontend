import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isLoggedIn: false,
    isFetching: false,
    error: false,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.loading = false;
          },
        logout: (state, action) => {
            state.user = null;
            state.isLoggedIn = false;
            state.isFetching = false;
        },
    },
});


export const { setUser, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;  // state.user.user is the user object
export const selectIsFetching = (state) => state.user.isFetching;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;


export default userSlice.reducer;
