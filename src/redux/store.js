import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

const store = configureStore({  
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // devTools: process.env.NODE_ENV !== 'production',
    // preloadedState: {user: {isLoggedIn: true, user: {username: 'test'}}}
});

export default store;