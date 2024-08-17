// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from './cartSlice';
// const appStore = configureStore({
//     reducer: {
//         cart: cartReducer,
//     },
// });


// export default appStore;

import cartReducer from './cartSlice';
import { configureStore } from '@reduxjs/toolkit';


const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default appStore;